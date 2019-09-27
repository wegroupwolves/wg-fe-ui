"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledTheme = require("styled-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #525252;\n  font-size: 1.4rem;\n  height: 5.5rem;\n  padding-left: 3.5rem;\n  font-weight: ", ";\n  width: 100%;\n  padding-right: 1rem;\n  text-align: center;\n  background-color: ", ";\n  border-right: ", ";\n  border-color: ", ";\n  cursor: pointer;\n\n  & span {\n    text-align: left;\n    width: 100%;\n  }\n\n  &:hover {\n    background-color: #f7f7f7;\n  }\n\n  &.active {\n    font-weight: 700;\n    background-color: #f7f7f7;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-height: 4.5rem;\n  width: 6rem;\n  text-align: left;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Item = function Item(_ref) {
  var className = _ref.className,
      otherProps = _ref.otherProps,
      icon = _ref.icon,
      onClick = _ref.onClick,
      children = _ref.children,
      isActive = _ref.isActive;
  return _react.default.createElement(Container, _extends({}, otherProps, {
    className: className,
    isActive: isActive,
    onClick: onClick
  }), _react.default.createElement(SvgIcon, null, icon), _react.default.createElement("span", null, children));
};

var SvgIcon = _styledComponents.default.div(_templateObject());

var Container = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.isActive ? '700' : '400';
}, function (props) {
  return props.isActive ? '#f7f7f7' : 'none';
}, function (props) {
  return props.isActive ? '0.1rem solid' : 'none';
}, function (props) {
  return props.isActive ? (0, _styledTheme.key)('colors.action') : 'none';
});

Item.defaultProps = {
  isActive: false,
  onClick: function onClick() {}
};
Item.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** Adds extra props to the element */
  otherProps: _propTypes.object,
  isActive: _propTypes.bool,
  icon: _propTypes.element,
  onClick: _propTypes.func,
  children: _propTypes.node.isRequired
};
var _default = Item;
exports.default = _default;