import React from 'react';

export const styles = {
  list: {
    margin: '20px 0 20px 0',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  item: {
    marginLeft: '10px',
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


