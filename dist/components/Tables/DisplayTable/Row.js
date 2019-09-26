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
  var data = _taggedTemplateLiteral(["\n  min-height: 5rem;\n  padding: 0.5rem 1.5rem;\n  display: flex;\n  border-top: 0.1rem solid ", ";\n\n  &:first-child {\n    border: none;\n  }\n\n  &:nth-child(even) {\n    background-color: rgba(0, 0, 0, 0.02);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Row = function Row(_ref) {
  var className = _ref.className,
      otherProps = _ref.otherProps,
      children = _ref.children;
  return _react.default.createElement(StyledRow, _extends({}, otherProps, {
    className: className
  }), children);
};

var StyledRow = _styledComponents.default.tr(_templateObject(), (0, _dist.key)('colors.outline'));

Row.defaultProps = {
  className: null
};
Row.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** Adds extra props to the element */
  otherProps: _propTypes.object,
  children: _propTypes.node
};
var _default = Row;
exports.default = _default;