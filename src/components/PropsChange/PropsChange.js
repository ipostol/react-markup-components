/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export const styles = {
  general: {
    margin: '20px 0',
  },
  toggleField: {
    margin: '20px 0',
  },
};

export default class PropsChange extends Component {

  state = {};

  static propTypes = {
    propTypes: PropTypes.object,
    props: PropTypes.object,
    onPropsChange: PropTypes.func,
  };

  checkType(field) {

    const { propTypes, onPropsChange, props } = this.props;
    const type = propTypes[field];
    const value = props[field];

    if (Array.isArray(type)) {

      return (
        <SelectField onChange={(e, number, value) => onPropsChange(field, value)} value={value}>
          {
            type.map((item, index) => <MenuItem value={item} primaryText={item} key={index} />)
          }
        </SelectField>
      );

    } else if (type === 'boolean') {

      return (
        <Toggle
          label={field}
          toggled={!!value}
          style={styles.toggleField}
          onToggle={() => onPropsChange(field, !value)}
        />  
      );

    } else if (type === 'number') {

      return (
        <TextField
          hintText={field}
          value={value || ''}
          onChange={(e, value) => onPropsChange(field, parseInt(value, 10) || '')}
        />
      );

    } else if (type === 'object' || type === 'array') {

      return (
        <div>
          <TextField
            hintText={field}
            value={this.state[field] === undefined ? JSON.stringify(value) || '' : this.state[field]}
            multiLine
            onChange={(e, value) => this.setState({ [field]: value })}
          />
          <button onClick={() => onPropsChange(field, JSON.parse(this.state[field]))}>click</button>
        </div>
      );

    } else if (type === 'function') {

      return null;

    } else {

      return (
        <TextField
          hintText={field}
          value={value || ''}
          onChange={(e, value) => onPropsChange(field, value)}
        />
      );

    }

  }

  render() {

    const { propTypes, props } = this.props;

    return (
      <div style={styles.general}>
        {
          propTypes && Object.keys(propTypes).map(key => <div key={key}>{this.checkType(key)}</div>)
        }
      </div>
    );

  }

}
