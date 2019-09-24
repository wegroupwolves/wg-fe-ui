"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTheme = require("styled-theme");

var _detectBrowser = require("detect-browser");

var _checkmark = _interopRequireDefault(require("../../assets/checkmark"));

var _errormark = _interopRequireDefault(require("../../assets/errormark"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: ", ";\n  bottom: 1.2rem;\n  max-width: 2rem;\n  transition: 0.2s;\n  object-fit: contain;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: ", ";\n  bottom: 1.3rem;\n  max-width: 2rem;\n  transition: 0.2s;\n  object-fit: contain;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n  font-size: 1rem;\n  color: ", ";\n  position: absolute;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  width: 100%;\n  border: 0.1rem solid;\n  border-color: ", ";\n  border-radius: 0.3rem;\n  height: 4rem;\n  font-size: 1.6rem;\n  padding-left: 0.7rem;\n\n  &:focus {\n    outline: none;\n    border-color: ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  font-size: 1.4rem;\n  margin-bottom: 0.7rem;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  font-family: ", ";\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TextInput = function TextInput(_ref) {
  var className = _ref.className,
      children = _ref.children,
      name = _ref.name,
      type = _ref.type,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      setFieldValue = _ref.setFieldValue,
      setFieldTouched = _ref.setFieldTouched,
      errors = _ref.errors,
      touched = _ref.touched,
      otherProps = _ref.otherProps,
      value = _ref.value;

  var _useState = (0, _react.useState)(value ? value : ''),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      focus = _useState4[0],
      setFocus = _useState4[1];

  var _useState5 = (0, _react.useState)('1rem'),
      _useState6 = _slicedToArray(_useState5, 2),
      iconRight = _useState6[0],
      setIconRight = _useState6[1];

  var browser = (0, _detectBrowser.detect)();

  var handleFocus = function handleFocus() {
    setFocus(true);

    if (browser) {
      switch (browser.name) {
        case 'safari':
          setIconRight('3.5rem');
          break;

        case '':
          setIconRight('3.5rem');
          break;

        default:
          setIconRight('1rem');
          break;
      }
    }
  };

  return _react.default.createElement(Container, {
    className: className
  }, _react.default.createElement(StyledLabel, {
    disabled: disabled,
    htmlFor: name
  }, children), _react.default.createElement(InputContainer, null, _react.default.createElement(StyledInput, _extends({}, otherProps, {
    id: name,
    name: name,
    type: type,
    disabled: disabled,
    placeholder: placeholder ? placeholder : null,
    errors: errors[name] ? true : false,
    touched: touched[name] ? true : false,
    value: inputValue,
    onChange: function onChange(e) {
      setFieldValue(name, e.target.value);
      setInputValue(e.target.value);
    },
    onBlur: function onBlur() {
      setFieldTouched(name, true);
      setFocus(false);
    },
    onFocus: function onFocus() {
      return handleFocus();
    }
  })), errors[name] && touched[name] ? _react.default.createElement(StyledErrormark, {
    color: "#F74040",
    focus: focus,
    right: iconRight,
    browser: browser ? browser.name : null
  }) : touched[name] ? _react.default.createElement(StyledCheckmark, {
    color: "#00CD39",
    focus: focus,
    right: iconRight,
    browser: browser ? browser.name : null
  }) : null), errors[name] && touched[name] ? _react.default.createElement(ErrorContainer, null, _react.default.createElement("p", null, errors[name])) : null);
};

var Container = _styledComponents.default.div(_templateObject(), (0, _styledTheme.key)('fonts.primary'));

var StyledLabel = _styledComponents.default.label(_templateObject2(), function (props) {
  return props.disabled ? '#AEAEAE' : '#5B5550';
});

var InputContainer = _styledComponents.default.div(_templateObject3());

var StyledInput = _styledComponents.default.input(_templateObject4(), function (props) {
  return props.disabled ? '#F0F1F3' : 'white';
}, function (props) {
  return props.errors & props.touched ? (0, _styledTheme.key)('colors.bad') : props.touched & !props.errors ? (0, _styledTheme.key)('colors.good') : (0, _styledTheme.key)('colors.outline');
}, (0, _styledTheme.key)('colors.primary-regular'), (0, _styledTheme.key)('colors.button-toggle'));

var ErrorContainer = _styledComponents.default.div(_templateObject5(), (0, _styledTheme.key)('colors.bad'));

var StyledCheckmark = (0, _styledComponents.default)(_checkmark.default)(_templateObject6(), function (props) {
  return props.focus ? props.right : '1rem';
});
var StyledErrormark = (0, _styledComponents.default)(_errormark.default)(_templateObject7(), function (props) {
  return props.focus ? props.right : '1rem';
});
TextInput.defaultProps = {
  disabled: false,
  placeholder: null,
  errors: {},
  touched: {},
  setFieldTouched: function setFieldTouched() {},
  setFieldValue: function setFieldValue() {}
};
TextInput.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** label above the input */
  children: _propTypes.node.isRequired,

  /** name of input and label */
  name: _propTypes.string.isRequired,

  /** type of input: email, text, ... */
  type: _propTypes.string.isRequired,

  /** if true input is disabled */
  disabled: _propTypes.bool,

  /** example value in the input */
  placeholder: _propTypes.string,

  /** object with inputname and errormessage */
  errors: _propTypes.object,

  /** object with inputname and boolean to check if touched */
  touched: _propTypes.object,

  /** returns name and touched boolean */
  setFieldTouched: _propTypes.func,

  /** returns name and inputvalue */
  setFieldValue: _propTypes.func,

  /** Adds extra props to the element */
  otherProps: _propTypes.object,
  value: _propTypes.node
};
var _default = TextInput;
exports.default = _default;