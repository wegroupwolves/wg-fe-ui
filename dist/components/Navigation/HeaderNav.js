"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = require("prop-types");

var _styledTheme = require("styled-theme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 60%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding-top: 2rem;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin: 0 3rem;\n  font-size: 1.6rem;\n  padding: 2.5rem 2rem 2rem;\n  font-family: ", ";\n  border-bottom: ", ";\n  border-color: ", ";\n  font-weight: ", ";\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 8rem;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fbfbfb;\n  border-bottom: 0.2px solid #e2e2e2;\n  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);\n  z-index: 11;\n  padding: 0 7rem 0 3.4rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderNav = function HeaderNav(_ref) {
  var navTabs = _ref.navTabs,
      theme = _ref.theme,
      className = _ref.className,
      currentLocation = _ref.currentLocation,
      _onClick = _ref.onClick;
  return _react.default.createElement(Container, {
    className: className
  }, _react.default.createElement(Wrapper, null, _react.default.createElement(LogoContainer, null, _react.default.createElement(Logo, {
    src: theme.data.logo,
    alt: "WeGroup"
  })), _react.default.createElement(Navigation, null, navTabs.map(function (tab) {
    var to = tab.to;
    return _react.default.createElement(NavItem, {
      onClick: function onClick() {
        return _onClick(to);
      },
      key: tab.title,
      active: to === currentLocation,
      "data-test-id": tab.title
    }, tab.title);
  }))));
};

var Wrapper = _styledComponents.default.div(_templateObject());

var Container = _styledComponents.default.div(_templateObject2());

var NavItem = _styledComponents.default.li(_templateObject3(), (0, _styledTheme.key)('fonts.primary'), function (props) {
  return props.active === true ? "3px solid" : 'none';
}, function (props) {
  return props.active === true ? (0, _styledTheme.key)('colors.action') : 'none';
}, function (props) {
  return props.active === true ? "bold" : 'none';
}, (0, _styledTheme.key)(["colors", "dark-grey-font"]));

var Navigation = _styledComponents.default.ul(_templateObject4());

var LogoContainer = _styledComponents.default.div(_templateObject5());

var Logo = _styledComponents.default.img(_templateObject6());

HeaderNav.defaultProps = {
  navTabs: [],
  onClick: function onClick() {}
};
HeaderNav.propTypes = {
  navTabs: _propTypes.array,
  theme: _propTypes.node,
  className: _propTypes.string,
  onClick: _propTypes.func,

  /** testje */
  currentLocation: _propTypes.string
};
var exportComponent = (0, _styledComponents.withTheme)(HeaderNav);
exportComponent.displayName = 'HeaderNav';
var _default = exportComponent;
exports.default = _default;