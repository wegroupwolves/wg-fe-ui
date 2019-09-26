"use strict";

var _ = require(".");

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _2 = require("../..");

var _theme = _interopRequireDefault(require("../../../.storybook/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SearchSelectInput', function () {
  it('returns value and name of selected option', function () {
    var testValue = {
      name: null,
      value: null
    };
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.SearchSelectInput, {
      name: "test",
      selected: function selected(name, value) {
        testValue.name = name, testValue.value = value;
      },
      options: [{
        value: 'option1',
        label: 'Option 1'
      }, {
        value: 'option2',
        label: 'Option 2'
      }]
    }, "Test")); // simulate selecting the first option

    wrapper.find('.Select__control').first().simulate('keyDown', {
      key: 'ArrowDown',
      keyCode: 40
    });
    wrapper.find('.Select__control').first().simulate('keyDown', {
      key: 'Enter',
      keyCode: 13
    }); // if simulate is complete, selected should be triggered

    expect(testValue.value).toEqual('option1');
    expect(testValue.name).toEqual('test');
  });
  it('placeholder should be loading when enabled', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.SearchSelectInput, {
      name: "test",
      loading: true,
      selected: function selected(name, value) {
        return console.log(name, value);
      },
      options: [{
        value: 'option1',
        label: 'Option 1'
      }, {
        value: 'option2',
        label: 'Option 2'
      }]
    }, "Test")); // see if text is changed to loading

    expect(wrapper.find('.Select__placeholder').first().text()).toEqual('Loading...');
  });
  it('when no options available, show message', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.SearchSelectInput, {
      name: "test",
      selected: function selected(name, value) {
        return console.log(name, value);
      },
      options: []
    }, "Test")); // simulate arrowdown to open option container

    wrapper.find('.Select__control').first().simulate('keyDown', {
      key: 'ArrowDown',
      keyCode: 40
    }); // look if message is in the option container

    expect(wrapper.find('.Select__menu-notice--no-options').first().text()).toEqual('No options');
  });
  it('when disabled style changes and input is disabled', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_2.ThemeProvider, {
      theme: _theme.default
    }, _react.default.createElement(_.SearchSelectInput, {
      name: "test",
      selected: function selected(name, value) {
        return console.log(name, value);
      },
      options: []
    }, "Test"))); // check if input prop disabled is false by default

    expect(wrapper.find('input').props().disabled).toEqual(false); // check if label is sub-title color

    expect(wrapper.find('p')).toHaveStyleRule('color', (0, _theme.default)().colors['sub-title']); // set props to disabled

    wrapper.setProps({
      children: _react.default.createElement(_.SearchSelectInput, {
        name: "test",
        selected: function selected(name, value) {
          return console.log(name, value);
        },
        options: [],
        disabled: true
      }, "Test")
    }); // check if label color changed to disabled

    expect(wrapper.find('p')).toHaveStyleRule('color', (0, _theme.default)().colors['disabled']); // check if input prop disabled is true

    expect(wrapper.find('input').props().disabled).toEqual(true);
  });
  it('otherProps adds props to input', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.SearchSelectInput, {
      name: "test",
      selected: function selected(name, value) {
        return console.log(name, value);
      },
      options: [],
      otherProps: {
        id: 12
      }
    }, "Test"));
    expect(wrapper.find('Select').props().id).toEqual(12);
  });
});