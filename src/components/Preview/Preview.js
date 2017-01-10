import React, { Component, PropTypes } from 'react';
import Description from '../Description';

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

  /**
   * @return {ReactElemen}
   */
  render() {

    const { description, children } = this.props;

    console.log(children, '||||');

    return (

      <div style={styles.general}>
        {
          description && <Description>{description}</Description>
        }
        {
          children
        }
        <h2>In this section we will change props in fly mode</h2>
      </div>

    );

  }

}
