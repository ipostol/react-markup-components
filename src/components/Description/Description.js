/* eslint-disable import/no-unresolved, import/extensions */

import React from 'react';

export const style = {
  fontSize: '20px',
  padding: '20px',
  textAlign: 'center',
};

export default props => (
  <div style={style} {...props} />
);
