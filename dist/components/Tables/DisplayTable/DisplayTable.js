"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = require("prop-types");

var _Value = _interopRequireDefault(require("./Value.js"));

var _Row = _interopRequireDefault(require("./Row.js"));

var _Key = _interopRequireDefault(require("./Key.js"));

var _dist = require("styled-theme/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  font-family: ", ";\n  font-size: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DisplayTable = function DisplayTable(_ref) {
  var className = _ref.className,
      otherProps = _ref.otherProps,
      children = _ref.children;
  return _react.default.createElement(StyledDisplayTable, _extends({}, otherProps, {
    className: className
  }), _react.default.createElement(StyledBody, null, children));
};

var StyledDisplayTable = _styledComponents.default.table(_templateObject(), (0, _dist.key)('fonts.primary'), (0, _dist.key)('fonts.normal-size'));

var StyledBody = _styledComponents.default.tbody(_templateObject2());

DisplayTable.defaultProps = {
  className: null
};
DisplayTable.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** Adds extra props to the element */
  otherProps: _propTypes.object,
  children: _propTypes.node
};
DisplayTable.Value = _Value.default;
DisplayTable.Value.displayName = 'DisplayTable.Value';
DisplayTable.Row = _Row.default;
DisplayTable.Row.displayName = 'DisplayTable.Row';
DisplayTable.Key = _Key.default;
DisplayTable.Key.displayName = 'DisplayTable.Key';
var _default = DisplayTable;
exports.default = _default;