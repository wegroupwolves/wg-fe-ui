"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: 1.3rem;\n  width: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HeaderCell = function HeaderCell(_ref) {
  var width = _ref.width,
      className = _ref.className,
      otherProps = _ref.otherProps,
      children = _ref.children,
      title = _ref.title;
  return _react.default.createElement(Th, _extends({
    width: width,
    title: title,
    className: className
  }, otherProps), children);
};

var Th = _styledComponents.default.th(_templateObject(), function (props) {
  return props.width;
}, function (props) {
  return props.title ? "700" : "400";
}, function (props) {
  return props.title ? "1.6rem" : "1.4rem";
}, function (props) {
  return props.title ? "#5b5550" : "#a29c95";
});

HeaderCell.defaultProps = {
  title: false,
  width: 'unset'
};
HeaderCell.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** Adds extra props to the element */
  otherProps: _propTypes.object,
  children: _propTypes.node,

  /** The width of the tableCell element */
  width: _propTypes.string,

  /** Applies title styling to the cell */
  title: _propTypes.bool
};
var _default = HeaderCell;
exports.default = _default;