"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _i18next = _interopRequireDefault(require("i18next"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTheme = require("styled-theme");

var _NL = _interopRequireDefault(require("../../assets/flags/NL.jsx"));

var _EN = _interopRequireDefault(require("../../assets/flags/EN.jsx"));

var _FR = _interopRequireDefault(require("../../assets/flags/FR.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  &:hover {\n    & ", " {\n      display: flex;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 3rem;\n  height: 3rem;\n  margin-left: 1.5rem;\n  margin-right: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  position: absolute;\n  right: 2rem;\n  top: 4rem;\n  flex-direction: column;\n  background: #fafafa;\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);\n  width: auto;\n  border-radius: 0.5rem;\n  padding: 0.7rem 0;\n\n  & button {\n    cursor: pointer;\n    border: none;\n    background: none;\n    text-align: left;\n    align-items: center;\n    outline: none;\n    display: flex;\n    padding: 0.7rem 1.5rem 0.7rem 0;\n    margin-bottom: 0.5rem;\n    font-size: ", ";\n    font-weight: bold;\n\n    &:active {\n      border: none;\n    }\n\n    &:hover {\n      color: ", ";\n      background-color: #ececec;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    & > img {\n      margin: 0 1.5rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LanguageSelector = function LanguageSelector() {
  var _useState = (0, _react.useState)(_react.default.createElement(_EN.default, null)),
      _useState2 = _slicedToArray(_useState, 2),
      langIcon = _useState2[0],
      setLangIcon = _useState2[1];

  var setLanguage = function setLanguage(lang) {
    _i18next.default.changeLanguage(lang);

    if (_i18next.default.language === 'nl') {
      setLangIcon(_react.default.createElement(_NL.default, null));
    }

    if (_i18next.default.language === 'en') {
      setLangIcon(_react.default.createElement(_EN.default, null));
    }

    if (_i18next.default.language === 'fr') {
      setLangIcon(_react.default.createElement(_FR.default, null));
    }
  };

  (0, _react.useEffect)(function () {
    if (_i18next.default.language === 'nl') {
      setLangIcon(_react.default.createElement(_NL.default, null));
    }

    if (_i18next.default.language === 'en') {
      setLangIcon(_react.default.createElement(_EN.default, null));
    }

    if (_i18next.default.language === 'fr') {
      setLangIcon(_react.default.createElement(_FR.default, null));
    }
  });
  return _react.default.createElement(LangSelector, null, _react.default.createElement(FlagIcon, {
    src: langIcon,
    button: true
  }, langIcon), _react.default.createElement(DropDownContainer, null, _react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setLanguage('nl');
    }
  }, _react.default.createElement(FlagIcon, null, _react.default.createElement(_NL.default, null)), "NL"), _react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setLanguage('en');
    }
  }, _react.default.createElement(FlagIcon, null, _react.default.createElement(_EN.default, null)), "EN"), _react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setLanguage('fr');
    }
  }, _react.default.createElement(FlagIcon, null, _react.default.createElement(_FR.default, null)), "FR")));
};

var DropDownContainer = _styledComponents.default.div(_templateObject(), (0, _styledTheme.key)(['fonts.normal-size']), (0, _styledTheme.key)('colors.primary-regular'));

var FlagIcon = _styledComponents.default.div(_templateObject2());

var LangSelector = _styledComponents.default.div(_templateObject3(), DropDownContainer);

var _default = LanguageSelector;
exports.default = _default;