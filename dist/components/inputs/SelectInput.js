"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _propTypes = require("prop-types");

var _styledTheme = require("styled-theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.2rem;\n  transition: 0.2s;\n  line-height: 1rem;\n  margin-bottom: 1rem;\n  color: ", ";\n  width: 80%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 2rem;\n\n  &:focus {\n    outline: none;\n  }\n\n  & .Select {\n    &__control {\n      border-radius: 0.3rem;\n      border: 0.1rem solid ", ";\n      box-shadow: none;\n\n      &:hover {\n        border-color: ", ";\n      }\n    }\n\n    &__control--menu-is-open {\n      &:hover {\n        border-color: ", ";\n      }\n\n      .Select__dropdown-indicator {\n        & svg {\n          transform: rotate(180deg);\n          transition: 0.1s ease;\n        }\n      }\n    }\n\n    &__value-container {\n      padding: 0 0.5em;\n      font-size: ", ";\n    }\n\n    &__single-value {\n      color: black;\n    }\n\n    &__menu {\n      font-size: 1.8rem;\n      z-index: 999;\n    }\n\n    &__menu-list {\n      max-height: 13rem;\n    }\n\n    &__menu-notice--no-options {\n      text-align: left;\n      font-size: 1.2rem;\n    }\n\n    &__option {\n      font-size: 1.2rem;\n      color: ", ";\n\n      :hover {\n        cursor: pointer;\n        background-color: ", ";\n        color: white;\n      }\n\n      &--is-focused {\n        color: white;\n        background-color: ", ";\n      }\n\n      &--is-selected {\n        background-color: ", ";\n        color: white;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-family: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SelectInput = function SelectInput(_ref) {
  var className = _ref.className,
      selected = _ref.selected,
      loading = _ref.loading,
      options = _ref.options,
      name = _ref.name,
      disabled = _ref.disabled,
      children = _ref.children,
      initial = _ref.initial,
      noOptionMessage = _ref.noOptionMessage,
      loadingMessage = _ref.loadingMessage,
      placeholder = _ref.placeholder,
      otherProps = _ref.otherProps;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      isSelected = _useState2[0],
      setSelected = _useState2[1];

  var handleChange = function handleChange(e) {
    selected(name, e.value);
    setSelected(e);
  };

  (0, _react.useEffect)(function () {
    if (loading || !options.length || options === []) {
      setSelected('');
    }

    if (initial) {
      setSelected(initial);
    }
  }, [options]);
  return _react.default.createElement(Container, {
    className: className
  }, _react.default.createElement(Label, {
    disabled: disabled
  }, children), _react.default.createElement(Input, _extends({
    isDisabled: disabled,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    options: options,
    value: isSelected,
    noOptionsMessage: function noOptionsMessage() {
      return noOptionMessage;
    },
    placeholder: loading ? loadingMessage : placeholder,
    classNamePrefix: "Select"
  }, otherProps)));
};

var Container = _styledComponents.default.div(_templateObject(), (0, _styledTheme.key)('fonts.primary'));

var Input = (0, _styledComponents.default)(_reactSelect.default)(_templateObject2(), (0, _styledTheme.key)('colors.outline'), (0, _styledTheme.key)('colors.interactive'), (0, _styledTheme.key)('colors.interactive'), (0, _styledTheme.key)('fonts.normal-size'), (0, _styledTheme.key)('colors.sub-txt'), (0, _styledTheme.key)(["colors", "hover"]), (0, _styledTheme.key)(["colors", "hover"]), (0, _styledTheme.key)(["colors", "toggle"]));

var Label = _styledComponents.default.p(_templateObject3(), function (props) {
  return props.disabled ? (0, _styledTheme.key)('colors.disabled') : (0, _styledTheme.key)('colors.sub-title');
});

SelectInput.defaultProps = {
  disabled: false,
  loading: false,
  noOptionMessage: 'No options',
  loadingMessage: 'Loading...',
  placeholder: 'Choose your option',
  initial: null
};
SelectInput.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: _propTypes.string,

  /** Returns name and value of selected */
  selected: _propTypes.func.isRequired,

  /** Sets name of inputfield */
  name: _propTypes.string.isRequired,

  /** if true input is disabled */
  disabled: _propTypes.bool,

  /** label above the input */
  children: _propTypes.string.isRequired,

  /** array of objects {value: 'test', label: 'Test'} */
  options: _propTypes.array.isRequired,

  /** set true if options are loading */
  loading: _propTypes.bool,

  /** name that sets selected on load */
  initial: _propTypes.object,

  /** Message to show when options are empty */
  noOptionMessage: _propTypes.string,

  /** Message to show when loading is true */
  loadingMessage: _propTypes.string,

  /** Message to show on load when no initial */
  placeholder: _propTypes.string,

  /** Adds extra props to the element */
  otherProps: _propTypes.object
};
var _default = SelectInput;
exports.default = _default;