"use strict";

var _ = require(".");

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _theme = _interopRequireDefault(require("../../../.storybook/theme"));

require("jest-styled-components");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TextInput', function () {
  it('style changes when disabled', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: _theme.default
    }, _react.default.createElement(_.TextInput, {
      type: "text",
      name: "firstname"
    }, "Name")));
    expect(wrapper.find('input')).toHaveStyleRule('background-color', 'white');
    wrapper.setProps({
      children: _react.default.createElement(_.TextInput, {
        disabled: true,
        type: "text",
        name: "firstname"
      }, "name")
    });
    expect(wrapper.find('input')).toHaveStyleRule('background-color', (0, _theme.default)().colors['bg-disabled']);
  });
  it('returns value when input changes', function () {
    var ctrlName = 'fakeName';
    var ctrlValue = 'Ruben';
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.TextInput, {
      setFieldValue: function setFieldValue(name, value) {
        ctrlName = name;
        ctrlValue = value;
      },
      name: "test",
      type: "text"
    }, "test"));
    expect(ctrlValue).toEqual('Ruben');
    expect(ctrlName).toEqual('fakeName');
    wrapper.find('input').simulate('change', {
      target: {
        value: 'WeGroup'
      }
    });
    expect(ctrlValue).toEqual('WeGroup');
    expect(ctrlName).toEqual('test');
  });
  it('returns touched value when input is touched', function () {
    var ctrlName = 'noTest';
    var ctrlTouched = false;
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.TextInput, {
      type: "Text",
      name: "test",
      setFieldTouched: function setFieldTouched(name, value) {
        ctrlTouched = value;
        ctrlName = name;
      }
    }, "Test")); // simulate an onblur event and test if variables are changed by setFieldTouched

    wrapper.find('input').simulate('blur');
    expect(ctrlTouched).toEqual(true);
    expect(ctrlName).toEqual('test');
  });
  it('has different border color on validation', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: _theme.default
    }, _react.default.createElement(_.TextInput, {
      name: "test",
      type: "text"
    }, "Test"))); // check if borders have default color when not touched yet

    expect(wrapper.find('input')).toHaveStyleRule('border-color', (0, _theme.default)().colors['outline']); // Check if border is red when errors and touched

    wrapper.setProps({
      children: _react.default.createElement(_.TextInput, {
        errors: {
          test: 'incorrect'
        },
        touched: {
          test: true
        },
        name: "test",
        type: "text"
      }, "Test")
    });
    expect(wrapper.find('input')).toHaveStyleRule('border-color', (0, _theme.default)().colors['bad']); // Check if border is green when no errors but touched

    wrapper.setProps({
      children: _react.default.createElement(_.TextInput, {
        touched: {
          test: true
        },
        name: "test",
        type: "text"
      }, "Test")
    });
    expect(wrapper.find('input')).toHaveStyleRule('border-color', (0, _theme.default)().colors['good']);
  });
  it('Good or bad icons show at right time', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.TextInput, {
      name: "test",
      type: "text"
    }, "Test")); // check if icons don't exist

    expect(wrapper.exists('Errormark')).toEqual(false);
    expect(wrapper.exists('Checkmark')).toEqual(false); // check if errormark shows when errors

    wrapper.setProps({
      errors: {
        test: 'incorrect'
      },
      touched: {
        test: true
      }
    });
    expect(wrapper.exists('Errormark')).toEqual(true);
    expect(wrapper.exists('Checkmark')).toEqual(false); // check if checkmark shows when no errors but touched

    wrapper.setProps({
      errors: {},
      touched: {
        test: true
      }
    });
    expect(wrapper.exists('Checkmark')).toEqual(true);
    expect(wrapper.exists('Errormark')).toEqual(false);
  });
  it('otherProps adds props to input', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.TextInput, {
      otherProps: {
        max: '12'
      },
      name: "test",
      type: "text"
    }, "Test"));
    expect(wrapper.find('input').props().max).toEqual('12');
  });
});