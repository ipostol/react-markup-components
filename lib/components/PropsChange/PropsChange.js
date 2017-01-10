'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropsChange = function (_Component) {
  _inherits(PropsChange, _Component);

  function PropsChange() {
    _classCallCheck(this, PropsChange);

    return _possibleConstructorReturn(this, (PropsChange.__proto__ || Object.getPrototypeOf(PropsChange)).apply(this, arguments));
  }

  _createClass(PropsChange, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          propTypes = _props.propTypes,
          props = _props.props,
          onPropsChange = _props.onPropsChange;


      return _react2.default.createElement(
        'div',
        null,
        Object.keys(props).map(function (key) {
          return _react2.default.createElement(
            'div',
            null,
            key,
            ', ',
            props[key],
            ', ',
            propTypes[key]
          );
        })
      );
    }
  }]);

  return PropsChange;
}(_react.Component);

PropsChange.propTypes = {
  propTypes: _react.PropTypes.object,
  props: _react.PropTypes.object,
  onPropsChange: _react.PropTypes.func
};
exports.default = PropsChange;