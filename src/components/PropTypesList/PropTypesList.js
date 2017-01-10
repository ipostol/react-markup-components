import React from 'react';

export const styles = {
  list: {

  },
  item: {

  },
};

export default ({ propTypes, ...rest }) => (
  <div style={styles.list} {...rest}>
    {
      Object.keys(propTypes).map(key => <div style={styles.item}>{key}: {JSON.stringify(propTypes[key])}</div>)
    }
  </div>
);


