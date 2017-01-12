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
  },
};

/**
 * get component preview, by this component you can change props in fly mode
 * and can change background layer and view theme action
 */
export default class Preview extends Component {

  static propTypes = {
    description: PropTypes.string,
    children: PropTypes.any,
  };

  constructor(props) {
    super();
    this.state = {
      props: props.children.props,
    };
  }

  componentWillReceiveProps(nextProps) {

    const diff = diffObject(this.props, nextProps);

    const nextStateProps = { ...this.state.props };

    Object.keys(diff).forEach(key => {

      nextStateProps[key] = diff[key];

    });

    this.setState({ props: nextStateProps });

  }

  onPropsChange = (field, value) => this.setState({ props: { ...this.state.props, [field]: value } });

  /**
   * @return {ReactElement}
   */
  render() {

    const { description, children, aside } = this.props;
    const C = children.type;

    return (
      <Skin>
        {
          description && <Description>{description}</Description>
        }
        <div style={{ ...styles.layer, backgroundColor: LIGHT_COLOR }}>
          <C {...this.state.props} />
        </div>
        <div style={{ ...styles.layer, backgroundColor: DARK_COLOR }}>
          <C {...this.state.props} />
        </div>
        <div style={styles.divider} />
        <div style={styles.flex}>
          <PropsChange propTypes={children.type.propList} props={this.state.props} onPropsChange={this.onPropsChange} />
          <div style={styles.aside}>
            {aside}
          </div>
        </div>
        <PropTypesList propTypes={children.type.propList} />
      </Skin>
    );

  }

}
