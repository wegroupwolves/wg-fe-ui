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
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Key = function Key(_ref) {
  var className = _ref.className,
      otherProps = _ref.otherProps,
      children = _ref.children;
  return _react.default.createElement(StyledKey, _extends({}, otherProps, {
    className: className
  }), children);
};

var StyledKey = _styledComponents.default.th(_templateObject(), (0, _dist.key)('colors.title'));

Key.defaultProps = {
  className: null
};
Key.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** Adds extra props to the element */
  otherProps: _propTypes.object,

  /** Key text */
  children: _propTypes.node.isRequired
};
var _default = Key;
exports.default = _default;