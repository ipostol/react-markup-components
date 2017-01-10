import React, { Component, PropTypes } from 'react';
import Description from '../Description';
import PropTypesList from '../PropTypesList';
import PropsChange from '../PropsChange';

export const styles = {
  general: {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    width: '600px',
    borderRadius: '10px',
    backgroundColor: '#d8d8d8',
    position: 'relative',
    padding: '20px',
    boxSizing: 'border-box',
  },
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

  onPropsChange = (field, value) => this.setState({ props: { ...this.state.props, [field]: value } });

  /**
   * @return {ReactElemen}
   */
  render() {

    const { description, children } = this.props;
    console.log(children);

    const C = children.type;

    return (

      <div style={styles.general}>
        <div style={styles.content}>
          {
            description && <Description>{description}</Description>
          }
          <div style={{ ...styles.layer, backgroundColor: '#fff' }}>
            <C {...this.state.props} />
          </div>
          <div style={{ ...styles.layer, backgroundColor: '#000' }}>
            <C {...this.state.props} />
          </div>
          <div style={styles.divider} />
          <PropsChange propTypes={children.type.__PT__} props={this.state.props} onPropsChange={this.onPropsChange} />
          <PropTypesList propTypes={children.type.__PT__} />
        </div>
      </div>

    );

  }

}
