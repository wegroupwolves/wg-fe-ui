"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTheme = require("styled-theme");

var _checkmark = _interopRequireDefault(require("../../assets/checkmark.js"));

var _theme = _interopRequireDefault(require("../../../.storybook/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: 1.4rem;\n  line-height: 1.5rem;\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  & input {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  width: 1.9rem;\n  height: 1.9rem;\n  border: ", ";\n  box-sizing: border-box;\n  border-radius: 0.3rem;\n  margin-right: 1rem;\n  transition: 0.2s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      otherProps = _ref.otherProps,
      children = _ref.children,
      name = _ref.name;

  var handleChange = function handleChange(e) {
    if (!disabled) {
      onChange(e);
    }
  };

  return _react.default.createElement(StyledLabel, _extends({
    htmlFor: name,
    disabled: disabled,
    className: className
  }, otherProps), _react.default.createElement("input", {
    name: name,
    id: name,
    disabled: disabled,
    checked: checked,
    type: "checkbox",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }), _react.default.createElement(StyledBox, {
    disabled: disabled,
    checked: checked
  }, checked && disabled ? _react.default.createElement(StyledCheckmark, {
    color: (0, _theme.default)().colors.disabled
  }) : checked && !disabled ? _react.default.createElement(StyledCheckmark, {
    color: 'white'
  }) : null), children);
};

var StyledBox = _styledComponents.default.div(_templateObject(), function (props) {
  return props.checked && !props.disabled ? (0, _styledTheme.key)('colors.action') : '#F0F1F3';
}, function (props) {
  return props.checked && !props.disabled ? null : props.disabled ? '0.1rem solid #CCCCCC' : '0.1rem solid #A29C95';
}, function (props) {
  return props.checked ? null : '#F7F8F9';
});

var StyledLabel = _styledComponents.default.label(_templateObject2(), (0, _styledTheme.key)('fonts.primary'), function (props) {
  return props.disabled ? (0, _styledTheme.key)('colors.disabled') : (0, _styledTheme.key)('colors.title');
});

var StyledCheckmark = (0, _styledComponents.default)(_checkmark.default)(_templateObject3());
Checkbox.defaultProps = {
  checked: false,
  disabled: false
};
Checkbox.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** If true box is disabled */
  disabled: _propTypes.bool,

  /** If true box is check */
  checked: _propTypes.bool,

  /** The label next to the box */
  children: _propTypes.node.isRequired,

  /** Triggered when button is clicked */
  onChange: _propTypes.func.isRequired,

  /** Adds extra props to the element */
  otherProps: _propTypes.object,
  name: _propTypes.string.isRequired
};
var _default = Checkbox;
exports.default = _default;