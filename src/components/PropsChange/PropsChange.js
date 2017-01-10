import React, { Component, PropTypes } from 'react';

export default class PropsChange extends Component {

  static propTypes = {
    propTypes: PropTypes.object,
    props: PropTypes.object,
    onPropsChange: PropTypes.func,
  };

  render() {

    const { propTypes, props, onPropsChange } = this.props;

    return (
      <div>
        {
          Object.keys(props).map((key) => (
            <div>{key}, {props[key]}, {propTypes[key]}</div>
          ))
        }
      </div>
    );

  }

}
