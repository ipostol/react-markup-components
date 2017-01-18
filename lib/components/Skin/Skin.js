'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable import/no-unresolved, import/extensions */

var styles = exports.styles = {
  general: {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    width: '600px',
    borderRadius: '10px',
    position: 'relative',
    padding: '20px',
    border: '1px solid #000',
    boxSizing: 'border-box'
  }
};

var Skin = function Skin(_ref) {
  var children = _ref.children,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ['children', 'style']);

  return _react2.default.createElement(
    'div',
    _extends({ style: _extends({}, styles.general, style) }, rest),
    _react2.default.createElement(
      'div',
      { style: styles.content },
      children
    )
  );
};

Skin.propTypes = {
  children: _react.PropTypes.node
};

exports.default = Skin;