"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTheme = require("styled-theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 1rem;\n  height: 2rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  background-color: ", ";\n  font-weight: 900;\n  font-size: ", ";\n  border-radius: 0.5rem;\n  min-width: 12rem;\n  width: ", ";\n  height: 4rem;\n  color: white;\n  border: 0;\n  padding: 0 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  :active {\n    transform: scale(0.95);\n  }\n\n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    /* background-color: #FFBF80; */\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ActionButton = function ActionButton(_ref) {
  var level = _ref.level,
      disabled = _ref.disabled,
      children = _ref.children,
      fullwidth = _ref.fullwidth,
      onClick = _ref.onClick,
      icon = _ref.icon,
      otherProps = _ref.otherProps,
      className = _ref.className;

  var handleClick = function handleClick() {
    if (!disabled) {
      onClick();
    }
  };

  return _react.default.createElement(StyledButton, _extends({
    level: level,
    onClick: function onClick() {
      return handleClick();
    },
    fullwidth: fullwidth,
    disabled: disabled,
    className: className
  }, otherProps), icon ? _react.default.createElement(Image, {
    src: icon
  }) : null, children);
};

var StyledButton = _styledComponents.default.button(_templateObject(), (0, _styledTheme.key)('fonts.primary'), function (props) {
  return props.disabled ? (0, _styledTheme.key)('colors.disabled') : props.level === 'primary' ? (0, _styledTheme.key)('colors.action') : (0, _styledTheme.key)('colors.interactive');
}, (0, _styledTheme.key)('fonts.normal-size'), function (props) {
  return props.fullwidth ? '100%' : '';
});

var Image = _styledComponents.default.img(_templateObject2());

ActionButton.defaultProps = {
  disabled: false,
  level: 'primary',
  fullwidth: false,
  icon: null,
  otherProps: null
};
ActionButton.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** If true button is disabled */
  disabled: _propTypes.bool,

  /** The color theme */
  level: _propTypes.string,

  /** The label of the button */
  children: _propTypes.node.isRequired,

  /** If true button width is 100% */
  fullwidth: _propTypes.bool,

  /** Triggered when button is clicked */
  onClick: _propTypes.func.isRequired,

  /** Adds icon to button */
  icon: _propTypes.node,

  /** Adds extra props to the element */
  otherProps: _propTypes.object
};
var _default = ActionButton;
exports.default = _default;