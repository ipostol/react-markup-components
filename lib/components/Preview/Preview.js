'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Description = require('../Description');

var _Description2 = _interopRequireDefault(_Description);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = exports.styles = {
  general: {
    margin: '30px'
  }
};

/**
 * get component preview, by this component you can change props in fly mode
 * and can change background layer and view theme action
 */

var Preview = function (_React$Comoponent) {
  _inherits(Preview, _React$Comoponent);

  function Preview() {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));
  }

  _createClass(Preview, [{
    key: 'render',


    /**
     * @return {ReactMarkup}
     */
    value: function render() {
      var _props = this.props,
          description = _props.description,
          Component = _props.Component;


      console.log(Component, Component.props, '||||');

      return _react2.default.createElement(
        'div',
        { style: styles.general },
        _react2.default.createElement(
          _Description2.default,
          null,
          description
        ),
        _react2.default.createElement(Component, null),
        _react2.default.createElement(
          'h2',
          null,
          'In this section we will change props in fly mode'
        )
      );
    }
  }]);

  return Preview;
}(_react2.default.Comoponent);

Preview.propTypes = {
  description: _react.PropTypes.string,
  Component: _react.PropTypes.element
};
exports.default = Preview;