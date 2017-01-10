import React from 'react';

export const styles = {
  title: {},
  list: {

  },
  item: {

  },
};

export default ({ propTypes, ...rest }) => (
  <div style={styles.list} {...rest}>
    <div style={styles.title}>Props:</div>
    {
      Object.keys(propTypes).map(key => <div key={key} style={styles.item}>{key}: {JSON.stringify(propTypes[key])}</div>)
    }
  </div>
);


