'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = {
  list: {},
  item: {}
};

exports.default = function (_ref) {
  var propTypes = _ref.propTypes,
      rest = _objectWithoutProperties(_ref, ['propTypes']);

  return _react2.default.createElement(
    'div',
    _extends({ style: styles.list }, rest),
    Object.keys(propTypes).map(function (key) {
      return _react2.default.createElement(
        'div',
        { style: styles.item },
        key,
        ': ',
        JSON.stringify(propTypes[key])
      );
    })
  );
};