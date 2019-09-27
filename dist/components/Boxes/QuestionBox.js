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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: ", ";\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 3rem;\n  align-self: flex-start;\n\n  & span {\n    font-weight: bold;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  height: 5rem;\n  display: flex;\n  position: relative;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  font-size: ", ";\n  font-weight: bold;\n  background-color: ", ";\n  color: white;\n  border: solid 0.2rem;\n  border-radius: ", ";\n  border-color: ", ";\n  cursor: pointer;\n  transition: 0.3s;\n  text-decoration: none;\n\n  &:hover {\n    background-color: ", ";\n    cursor: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-family: ", ";\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.1);\n  border-radius: 0;\n  border-radius: 0 1.6rem 1.6rem;\n  z-index: 10;\n  position: relative;\n  align-self: flex-end;\n  margin: auto;\n  margin-top: 0;\n  margin-bottom: 3rem;\n  flex-shrink: 0;\n  background-color: white;\n  padding-bottom: 4.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var QuestionBox = function QuestionBox(_ref) {
  var children = _ref.children,
      option1 = _ref.option1,
      option2 = _ref.option2,
      className = _ref.className,
      disabled = _ref.disabled,
      response = _ref.response,
      otherProps = _ref.otherProps;

  var handleClick = function handleClick(e) {
    response(e.currentTarget.innerHTML);
  };

  return _react.default.createElement(Container, _extends({}, otherProps, {
    className: className
  }), _react.default.createElement(Question, null, _react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: children
    }
  })), option1 || option2 ? _react.default.createElement(Answers, null, _react.default.createElement(Answer, {
    className: "option1",
    disabled: disabled,
    left: true,
    onClick: function onClick(e) {
      return disabled ? e.preventDefault() : handleClick(e);
    }
  }, option1), _react.default.createElement(Answer, {
    className: "option2",
    left: false,
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, option2)) : null);
};

var Container = _styledComponents.default.div(_templateObject(), (0, _dist.key)('fonts.primary'));

var Answers = _styledComponents.default.div(_templateObject2());

var Answer = _styledComponents.default.p(_templateObject3(), (0, _dist.key)('fonts.big-size'), function (props) {
  return props.disabled ? (0, _dist.key)('colors.disabled') : (0, _dist.key)('colors.action');
}, function (props) {
  return props.left ? '0 0 0 1.6rem' : '0 0 1.6rem 0';
}, function (props) {
  return props.disabled ? (0, _dist.key)('colors.disabled') : (0, _dist.key)('colors.toggle');
}, function (props) {
  return props.disabled ? (0, _dist.key)('colors.disabled') : (0, _dist.key)('colors.hover');
}, function (props) {
  return props.disabled ? "default" : "pointer";
});

var Question = _styledComponents.default.div(_templateObject4(), (0, _dist.key)('fonts.normal-size'));

QuestionBox.defaultProps = {
  disabled: false,
  option1: null,
  option2: null,
  response: function response() {}
};
QuestionBox.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** Question */
  children: _propTypes.node.isRequired,

  /** option to the left */
  option1: _propTypes.string,

  /** option to the right */
  option2: _propTypes.string,

  /** returns string of clicked option */
  response: _propTypes.func,

  /** if true option1 is disabled */
  disabled: _propTypes.bool,

  /** Adds extra props to the element */
  otherProps: _propTypes.object
};
var _default = QuestionBox;
exports.default = _default;