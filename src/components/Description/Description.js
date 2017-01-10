import React, { Component } from 'react';

export const style = {
  fontSize: '20px',
  padding: '20px',
  textAlign: 'center',
};

export default (props) => (
  <div style={style} {...props} />
);
