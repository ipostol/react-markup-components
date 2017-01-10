import React, { Component, PropTypes } from 'react';
import Description from '../Description';
import PropTypesList from '../PropTypesList';

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
    padding: '20px',
    boxSizing: 'border-box',
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

    console.log(children.type.__PT__, '||||');

    return (

      <div style={styles.general}>
        <div style={styles.content}>
          {
            description && <Description>{description}</Description>
          }
          {
            children
          }
          <div>In this section we will change props in fly mode</div>
          <div>{JSON.stringify(children.type.__PT__, null, '\t')}</div>
        </div>
      </div>

    );

  }

}
