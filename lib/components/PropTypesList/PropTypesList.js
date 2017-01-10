'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = exports.styles = {
  list: {
    margin: '20px 0 20px 0'
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  item: {
    marginLeft: '10px'
  }
};

var PropTypesList = function (_Component) {
  _inherits(PropTypesList, _Component);

  function PropTypesList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PropTypesList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PropTypesList.__proto__ || Object.getPrototypeOf(PropTypesList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _this.handleClose = function () {
      return _this.setState({ isOpen: false });
    }, _this.handleOpen = function () {
      return _this.setState({ isOpen: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PropTypesList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          propTypes = _props.propTypes,
          rest = _objectWithoutProperties(_props, ['propTypes']);

      return _react2.default.createElement(
        'div',
        _extends({ style: styles.general }, rest),
        _react2.default.createElement(_RaisedButton2.default, { label: 'Show all propTypes', onClick: this.handleOpen }),
        _react2.default.createElement(
          _Dialog2.default,
          {
            title: 'Dialog With Actions',
            actions: [_react2.default.createElement(_FlatButton2.default, {
              label: 'Cancel',
              primary: true,
              onClick: this.handleClose
            })],
            modal: true,
            open: this.state.isOpen
          },
          _react2.default.createElement(
            'div',
            { style: styles.list },
            _react2.default.createElement(
              'div',
              { style: styles.title },
              'Props:'
            ),
            Object.keys(propTypes).map(function (key) {
              return _react2.default.createElement(
                'div',
                { key: key, style: styles.item },
                key,
                ': ',
                JSON.stringify(propTypes[key])
              );
            })
          )
        )
      );
    }
  }]);

  return PropTypesList;
}(_react.Component);

exports.default = PropTypesList;