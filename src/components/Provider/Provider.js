import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default ({ children, state }) => (
  <Provider store={createStore(() => defaultState)}>
    {children}
  </Provider>
);
