"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = require("prop-types");

var _styledTheme = require("styled-theme");

var _Item = _interopRequireDefault(require("./Item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  height: 100vh;\n  width: 25rem;\n  z-index: 100;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  border-right: 1px solid ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  margin-left: 3.5rem;\n  color: ", ";\n  margin-bottom: 1.5rem;\n\n  &:not(:first-child) {\n    margin-top: 2.5rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 0.1rem;\n  width: 100%;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MainNavigation = function MainNavigation(_ref) {
  var className = _ref.className,
      otherProps = _ref.otherProps,
      children = _ref.children;
  return _react.default.createElement(NavigationBar, _extends({}, otherProps, {
    className: className
  }), children);
};

var Line = _styledComponents.default.div(_templateObject(), (0, _styledTheme.key)('colors.bg-disabled'));

var Title = _styledComponents.default.h1(_templateObject2(), (0, _styledTheme.key)('colors.disabled'));

var NavigationBar = _styledComponents.default.nav(_templateObject3(), (0, _styledTheme.key)('fonts.primary'), (0, _styledTheme.key)('colors.bg-disabled'));

MainNavigation.Title = Title;
MainNavigation.Title.displayName = 'MainNavigation.Title';
MainNavigation.Line = Line;
MainNavigation.Line.displayName = 'MainNavigation.Line';
MainNavigation.Item = _Item.default;
MainNavigation.Item.displayName = 'MainNavigation.Item';
MainNavigation.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** Adds extra props to the element */
  otherProps: _propTypes.object,
  children: _propTypes.node
};
var _default = MainNavigation;
exports.default = _default;