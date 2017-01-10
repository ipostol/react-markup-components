import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export const styles = {
  field: {
    margin: '20px 0',
  },
};

export default class PropsChange extends Component {

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
        <SelectField onChange={(e, number, value) => onPropsChange(field, value)}>
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
          onToggle={() => onPropsChange(field, !value)}
        />  
      );

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
      <div>
        {
          Object.keys(propTypes).map(key => <div style={styles.field}>{this.checkType(key)}</div>)
        }
      </div>
    );

  }

}
