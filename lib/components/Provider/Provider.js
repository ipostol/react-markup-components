'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      state = _ref.state;
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: (0, _redux.createStore)(function () {
        return state;
      }) },
    children
  );
};