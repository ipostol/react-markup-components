'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Skin = require('../Skin');

var _Skin2 = _interopRequireDefault(_Skin);

var _Description = require('../Description');

var _Description2 = _interopRequireDefault(_Description);

var _PropTypesList = require('../PropTypesList');

var _PropTypesList2 = _interopRequireDefault(_PropTypesList);

var _PropsChange = require('../PropsChange');

var _PropsChange2 = _interopRequireDefault(_PropsChange);

var _consts = require('../../consts');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = exports.styles = {
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#000',
    margin: '10px 0'
  },
  layer: {
    margin: '20px 0',
    padding: '10px'
  },
  flex: {
    display: 'flex'
  },
  aside: {
    margin: '20px'
  }
};

/**
 * get component preview, by this component you can change props in fly mode
 * and can change background layer and view theme action
 */

var Preview = function (_Component) {
  _inherits(Preview, _Component);

  function Preview(props) {
    _classCallCheck(this, Preview);

    var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this));

    _this.onPropsChange = function (field, value) {
      return _this.setState({ props: _extends({}, _this.state.props, _defineProperty({}, field, value)) });
    };

    _this.state = {
      props: props.children.props
    };
    return _this;
  }

  _createClass(Preview, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      var diff = (0, _utils.diffObject)(this.props, nextProps);

      var nextStateProps = _extends({}, this.state.props);

      Object.keys(diff).forEach(function (key) {

        nextStateProps[key] = diff[key];
      });

      this.setState({ props: nextStateProps });
    }
  }, {
    key: 'render',


    /**
     * @return {ReactElement}
     */
    value: function render() {
      var _props = this.props,
          description = _props.description,
          children = _props.children,
          aside = _props.aside;

      var C = children.type;

      return _react2.default.createElement(
        _Skin2.default,
        null,
        description && _react2.default.createElement(
          _Description2.default,
          null,
          description
        ),
        _react2.default.createElement(
          'div',
          { style: _extends({}, styles.layer, { backgroundColor: _consts.LIGHT_COLOR }) },
          _react2.default.createElement(C, this.state.props)
        ),
        _react2.default.createElement(
          'div',
          { style: _extends({}, styles.layer, { backgroundColor: _consts.DARK_COLOR }) },
          _react2.default.createElement(C, this.state.props)
        ),
        _react2.default.createElement('div', { style: styles.divider }),
        _react2.default.createElement(
          'div',
          { style: styles.flex },
          _react2.default.createElement(_PropsChange2.default, { propTypes: children.type.propList, props: this.state.props, onPropsChange: this.onPropsChange }),
          _react2.default.createElement(
            'div',
            { style: styles.aside },
            aside
          )
        ),
        _react2.default.createElement(_PropTypesList2.default, { propTypes: children.type.propList })
      );
    }
  }]);

  return Preview;
}(_react.Component);

Preview.propTypes = {
  description: _react.PropTypes.string,
  children: _react.PropTypes.any
};
exports.default = Preview;