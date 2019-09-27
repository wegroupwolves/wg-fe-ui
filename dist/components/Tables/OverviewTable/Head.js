"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Head = function Head(_ref) {
  var className = _ref.className,
      otherProps = _ref.otherProps,
      children = _ref.children;
  return _react.default.createElement("thead", _extends({
    className: className
  }, otherProps), _react.default.createElement("tr", null, children));
};

Head.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** Adds extra props to the element */
  otherProps: _propTypes.object,
  children: _propTypes.node
};
var _default = Head;
exports.default = _default;