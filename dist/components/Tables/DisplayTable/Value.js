"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = require("prop-types");

var _dist = require("styled-theme/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-weight: 900;\n  justify-content: space-between;\n\n  & span {\n    background-color: ", ";\n    color: white;\n    text-transform: uppercase;\n    height: 3rem;\n    padding: 0 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0.3rem;\n    font-size: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Value = function Value(_ref) {
  var className = _ref.className,
      otherProps = _ref.otherProps,
      children = _ref.children,
      highlight = _ref.highlight,
      toggled = _ref.toggled;
  return _react.default.createElement(StyledValue, _extends({}, otherProps, {
    className: className
  }), children, highlight ? _react.default.createElement("span", {
    onClick: function onClick() {
      return toggled();
    }
  }, highlight) : null);
};

var StyledValue = _styledComponents.default.td(_templateObject(), (0, _dist.key)('colors.highlight'), (0, _dist.key)('colors.toggle'), (0, _dist.key)('fonts.small-size'));

Value.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** Adds extra props to the element */
  otherProps: _propTypes.object,

  /** triggers when highlight is clicked */
  toggled: _propTypes.func,

  /** clickable highlight */
  highlight: _propTypes.string,

  /** Value text */
  children: _propTypes.node.isRequired
};
var _default = Value;
exports.default = _default;