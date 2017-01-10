import React, { PropTypes } from 'react';
import Description from '../Description';

export const styles = {
  general: {
    margin: '30px',
  },
};

/**
 * get component preview, by this component you can change props in fly mode
 * and can change background layer and view theme action
 */
export default class Preview extends React.Comoponent {

  static propTypes = {
    description: PropTypes.string,
    Component: PropTypes.element,
  };

  /**
   * @return {ReactMarkup}
   */
  render() {

    const { description, Component } = this.props;

    console.log(Component, Component.props, '||||');

    return (

      <div style={styles.general}>
        <Description>{description}</Description>
        <Component />
        <h2>In this section we will change props in fly mode</h2>
      </div>

    );

  }

}
