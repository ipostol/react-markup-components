'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable import/no-unresolved, import/extensions */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = exports.style = {
  fontSize: '20px',
  padding: '20px',
  textAlign: 'center'
};

exports.default = function (props) {
  return _react2.default.createElement('div', _extends({ style: style }, props));
};