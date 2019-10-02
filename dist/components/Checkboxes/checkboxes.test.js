"use strict";

var _ = require(".");

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _theme = _interopRequireDefault(require("../../../.storybook/theme"));

require("jest-styled-components");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Checkbox', function () {
  it('can pass extra props', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.Checkbox, {
      name: "test",
      id: 31,
      onChange: function onChange() {
        return console.log('testen');
      }
    }, "Testje"));
    expect(wrapper.props().children().props()).toEqual({
      id: 31
    });
  });
  it('changes style when disabled', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: _theme.default
    }, _react.default.createElement(_.Checkbox, {
      disabled: true,
      name: "check",
      onChange: function onChange() {
        return console.log('test');
      }
    }, "Testje2")));
    expect(wrapper).toHaveStyleRule('color', (0, _theme.default)().colors.disabled);
    expect(wrapper.find('div')).toHaveStyleRule('border', '0.1rem solid #CCCCCC');
  });
  it('when checked, style changes', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: _theme.default
    }, _react.default.createElement(_.Checkbox, {
      checked: true,
      name: "check",
      onChange: function onChange() {
        return console.log('test');
      }
    }, "Testje2")));
    expect(wrapper.find('div')).toHaveStyleRule('background-color', (0, _theme.default)().colors.action);
  });
});