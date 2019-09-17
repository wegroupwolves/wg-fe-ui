"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkmark = function Checkmark(_ref) {
  var color = _ref.color,
      className = _ref.className;
  return _react.default.createElement("svg", {
    className: className,
    width: "14",
    height: "12",
    viewBox: "0 0 14 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M12.2848 1L4.68936 9.71536L1 5.71879",
    stroke: color,
    style: {
      strokeWidth: 2.19416
    }
  }));
};

Checkmark.propTypes = {
  className: _propTypes.string,
  color: _propTypes.string.isRequired
};
var _default = Checkmark;
exports.default = _default;