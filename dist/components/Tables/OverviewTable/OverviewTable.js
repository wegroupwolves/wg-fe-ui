"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTheme = require("styled-theme");

var _propTypes = require("prop-types");

var _Head = _interopRequireDefault(require("./Head"));

var _HeaderCell = _interopRequireDefault(require("./HeaderCell"));

var _Body = _interopRequireDefault(require("./Body"));

var _Row = _interopRequireDefault(require("./Row"));

var _BodyCell = _interopRequireDefault(require("./BodyCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  width: 100%;\n  text-align: left;\n  margin-top: 2.5rem;\n  margin-bottom: 4rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var OverviewTable = function OverviewTable(_ref) {
  var className = _ref.className,
      otherProps = _ref.otherProps,
      children = _ref.children;
  return _react.default.createElement(Table, _extends({
    className: className
  }, otherProps), children);
};

var Table = _styledComponents.default.table(_templateObject(), (0, _styledTheme.key)('fonts.primary'));

OverviewTable.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** Adds extra props to the element */
  otherProps: _propTypes.object,
  children: _propTypes.node
};
OverviewTable.Head = _Head.default;
OverviewTable.Head.displayName = 'OverviewTable.Head';
OverviewTable.HeaderCell = _HeaderCell.default;
OverviewTable.HeaderCell.displayName = 'OverviewTable.HeaderCell';
OverviewTable.Body = _Body.default;
OverviewTable.Body.displayName = 'OverviewTable.Body';
OverviewTable.Row = _Row.default;
OverviewTable.Row.displayName = 'OverviewTable.Row';
OverviewTable.BodyCell = _BodyCell.default;
OverviewTable.BodyCell.displayName = 'OverviewTable.BodyCell';
var _default = OverviewTable;
exports.default = _default;