'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */

var styles = exports.styles = {
  general: {
    margin: '20px 0',
    width: '50%'
  },
  toggleField: {
    margin: '20px 0'
  },
  button: {
    borderRadius: '5px',
    marginLeft: '3px',
    height: '25px'
  },
  textFieldDiv: {
    display: 'flex',
    alignItems: 'center'
  },
  textFieldWidth: {
    width: 'calc(100% - 45px)'
  }
};

var PropsChange = function (_Component) {
  _inherits(PropsChange, _Component);

  function PropsChange() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PropsChange);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PropsChange.__proto__ || Object.getPrototypeOf(PropsChange)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PropsChange, [{
    key: 'checkType',
    value: function checkType(field) {
      var _this2 = this;

      var _props = this.props,
          propTypes = _props.propTypes,
          onPropsChange = _props.onPropsChange,
          props = _props.props;

      var type = propTypes[field];
      var value = props[field];

      if (Array.isArray(type)) {

        return _react2.default.createElement(
          _SelectField2.default,
          { onChange: function onChange(e, number, value) {
              return onPropsChange(field, value);
            }, value: value },
          type.map(function (item, index) {
            return _react2.default.createElement(_MenuItem2.default, { value: item, primaryText: item, key: index });
          })
        );
      } else if (type === 'boolean') {

        return _react2.default.createElement(_Toggle2.default, {
          label: field,
          toggled: !!value,
          style: styles.toggleField,
          onToggle: function onToggle() {
            return onPropsChange(field, !value);
          }
        });
      } else if (type === 'number') {

        return _react2.default.createElement(_TextField2.default, {
          hintText: field,
          value: value || '',
          onChange: function onChange(e, value) {
            return onPropsChange(field, parseInt(value, 10) || '');
          }
        });
      } else if (type === 'object' || type === 'array') {

        return _react2.default.createElement(
          'div',
          { style: styles.textFieldDiv },
          _react2.default.createElement(_TextField2.default, {
            hintText: field,
            value: this.state[field] === undefined ? JSON.stringify(value, null, '  ') || '' : this.state[field],
            multiLine: true,
            style: styles.textFieldWidth,
            rowsMax: 8,
            onChange: function onChange(e, value) {
              return _this2.setState(_defineProperty({}, field, value));
            }
          }),
          _react2.default.createElement(
            'button',
            { style: styles.button, onClick: function onClick() {
                return onPropsChange(field, JSON.parse(_this2.state[field]));
              } },
            'set'
          )
        );
      } else if (type === 'function') {

        return null;
      } else {

        return _react2.default.createElement(_TextField2.default, {
          hintText: field,
          value: value || '',
          onChange: function onChange(e, value) {
            return onPropsChange(field, value);
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          propTypes = _props2.propTypes,
          props = _props2.props;


      return _react2.default.createElement(
        'div',
        { style: styles.general },
        propTypes && Object.keys(propTypes).map(function (key) {
          return _react2.default.createElement(
            'div',
            { key: key },
            _this3.checkType(key)
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