"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = require("prop-types");

var _styledTheme = require("styled-theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  position: relative;\n  font-size: ", ";\n  padding: ", ";\n  border: ", ";\n  box-shadow: ", ";\n  border-radius: 0.5rem;\n  margin-top: 2rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  width: 100%;\n  max-width: 100rem;\n  margin-bottom: 4.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Section = function Section(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react.default.createElement(StyledSection, {
    className: className
  }, children);
};

var StyledSection = _styledComponents.default.section(_templateObject(), (0, _styledTheme.key)('fonts.primary'));

var Title = _styledComponents.default.h1(_templateObject2(), (0, _styledTheme.key)('fonts.big-size'));

var Subtitle = _styledComponents.default.h2(_templateObject3(), (0, _styledTheme.key)('fonts.normal-size'));

var Content = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.background ? 'white' : 'none';
}, (0, _styledTheme.key)('fonts.normal-size'), function (props) {
  return props.background ? '3.5rem' : 'none';
}, function (props) {
  return props.background ? "0.1rem solid ".concat((0, _styledTheme.key)('colors.outline')) : 'none';
}, function (props) {
  return props.background ? '0 0.2rem 0.5rem rgba(0, 0, 0, 0.05)' : 'none';
});

Section.propTypes = {
  children: _propTypes.node,
  className: _propTypes.string
};
Section.Title = Title;
Section.Title.displayName = 'Section.Title';
Section.Subtitle = Subtitle;
Section.Subtitle.displayName = 'Section.Subtitle';
Section.Content = Content;
Section.Content.displayName = 'Section.Content';
var _default = Section;
exports.default = _default;