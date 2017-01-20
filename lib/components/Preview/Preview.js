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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */

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
  },
  full: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  fullButton: {
    position: 'fixed',
    bottom: '5px',
    right: '5px',
    borderRadius: '5px'
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

    _this.offFullMode = function () {
      return _this.setState({ full: false });
    };

    _this.onFullMode = function () {
      return _this.setState({ full: true });
    };

    _this.state = {
      props: props.children.props,
      full: false
    };
    return _this;
  }

  _createClass(Preview, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      var diff = (0, _utils.diffObject)(this.props.children.props, nextProps.children.props);

      var nextStateProps = _extends({}, this.state.props);

      Object.keys(diff).forEach(function (key) {

        nextStateProps[key] = diff[key];
      });

      this.setState({ props: nextStateProps });
    }
  }, {
    key: 'checkTheme',
    value: function checkTheme() {
      var _props = this.props,
          defaultTheme = _props.defaultTheme,
          haveTheme = _props.haveTheme;


      if (haveTheme) {

        return [_react2.default.createElement(
          'div',
          { style: _extends({}, styles.layer, { backgroundColor: _consts.LIGHT_COLOR }), key: 'light' },
          _react2.default.createElement(C, this.state.props)
        ), _react2.default.createElement(
          'div',
          { style: _extends({}, styles.layer, { backgroundColor: _consts.DARK_COLOR }), key: 'dark' },
          _react2.default.createElement(C, _extends({}, this.state.props, { isDark: true }))
        )];
      }

      return _react2.default.createElement(
        'div',
        { style: _extends({}, styles.layer, { backgroundColor: defaultTheme === 'dark' ? _consts.DARK_COLOR : _consts.LIGHT_COLOR }) },
        _react2.default.createElement(C, _extends({}, this.state.props, { isDark: defaultTheme === 'dark' }))
      );
    }

    /**
     * @return {ReactElement}
     */

  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          description = _props2.description,
          children = _props2.children,
          aside = _props2.aside,
          skinStyle = _props2.skinStyle;

      var C = children.type;

      if (this.state.full) {

        return _react2.default.createElement(
          'div',
          { style: styles.full },
          _react2.default.createElement(C, this.state.props),
          _react2.default.createElement(
            'button',
            { style: styles.fullButton, onClick: this.offFullMode },
            'Off full mode'
          )
        );
      }

      return _react2.default.createElement(
        _Skin2.default,
        { style: skinStyle },
        description && _react2.default.createElement(
          _Description2.default,
          null,
          description
        ),
        this.checkTheme(),
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
        _react2.default.createElement(_PropTypesList2.default, { propTypes: children.type.propList }),
        _react2.default.createElement(
          'button',
          { style: styles.fullButton, onClick: this.onFullMode },
          'On full mode'
        )
      );
    }
  }]);

  return Preview;
}(_react.Component);

Preview.propTypes = {
  description: _react.PropTypes.string,
  children: _react.PropTypes.node,
  haveTheme: _react.PropTypes.bool
};
exports.default = Preview;