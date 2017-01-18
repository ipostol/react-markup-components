/* eslint-disable import/no-unresolved, import/extensions */

import React, { PropTypes } from 'react';

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
    position: 'relative',
    padding: '20px',
    border: '1px solid #000',
    boxSizing: 'border-box',
  },
};

const Skin = ({ children, style, ...rest }) => (
  <div style={styles.general} {...rest}>
    <div style={{ ...styles.content, ...style }}>
      {
        children
      }
    </div>
  </div>
);

Skin.propTypes = {
  children: PropTypes.node,
};

export default Skin;
