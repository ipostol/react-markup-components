/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import Skin from '../Skin';
import Description from '../Description';
import PropTypesList from '../PropTypesList';
import PropsChange from '../PropsChange';
import { LIGHT_COLOR, DARK_COLOR } from '../../consts';
import { diffObject } from '../../utils';

export const styles = {
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#000',
    margin: '10px 0',
  },
  layer: {
    margin: '20px 0',
    padding: '10px',
  },
  flex: {
    display: 'flex',
  },
  aside: {
    margin: '20px',
    width: '50%',
  },
  full: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  fullButton: {
    position: 'fixed',
    bottom: '5px',
    right: '5px',
    borderRadius: '5px',
  },
};

/**
 * get component preview, by this component you can change props in fly mode
 * and can change background layer and view theme action
 */
export default class Preview extends Component {

  static propTypes = {
    description: PropTypes.string,
    children: PropTypes.node,
    haveTheme: PropTypes.bool,
  };

  constructor(props) {
    super();
    this.state = {
      props: props.children.props,
      full: false,
    };
  }

  componentWillReceiveProps(nextProps) {

    const diff = diffObject(this.props.children.props, nextProps.children.props);

    const nextStateProps = { ...this.state.props };

    Object.keys(diff).forEach(key => {

      nextStateProps[key] = diff[key];

    });

    this.setState({ props: nextStateProps });

  }

  onPropsChange = (field, value) => this.setState({ props: { ...this.state.props, [field]: value } });

  offFullMode = () => this.setState({ full: false });

  onFullMode = () => this.setState({ full: true });

  checkTheme() {

    const { defaultTheme, haveTheme, children } = this.props;
    const C = children.type;

    if (haveTheme) {

      return [
        <div style={{ ...styles.layer, backgroundColor: LIGHT_COLOR }} key="light">
          <C {...this.state.props} />
        </div>,
        <div style={{ ...styles.layer, backgroundColor: DARK_COLOR }} key="dark">
          <C {...this.state.props} isDark />
        </div>
      ];

    }

    if (defaultTheme === 'dark') {

      return (
        <div style={{ ...styles.layer, backgroundColor: DARK_COLOR }}>
          <C {...this.state.props} isDark />
        </div>
      );

    }

    return (
      <div style={{ ...styles.layer, backgroundColor: LIGHT_COLOR }}>
        <C {...this.state.props} />
      </div>
    );

  }

  /**
   * @return {ReactElement}
   */
  render() {

    const { description, children, aside, skinStyle } = this.props;
    const C = children.type;

    if (this.state.full) {

      return (
        <div style={styles.full}>
          <C {...this.state.props} />
          <button style={styles.fullButton} onClick={this.offFullMode}>Off full mode</button>
        </div>
      );

    }

    return (
      <Skin style={skinStyle}>
        {
          description && <Description>{description}</Description>
        }
        {
          this.checkTheme()
        }
        <div style={styles.divider} />
        <div style={styles.flex}>
          <PropsChange propTypes={children.type.propList} props={this.state.props} onPropsChange={this.onPropsChange} />
          <div style={styles.aside}>
            {aside}
          </div>
        </div>
        <PropTypesList propTypes={children.type.propList} />
        <button style={styles.fullButton} onClick={this.onFullMode}>On full mode</button>
      </Skin>
    );

  }

}
