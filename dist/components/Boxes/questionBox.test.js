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
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.QuestionBox, {
    lol: 'test'
    }, "Testje"));
    expect(wrapper.props().lol).toEqual('test');
  });
  it('returns value when option is clicked', function () {
    var answer;
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.QuestionBox, {
      option1: "1",
      option2: "2",
      response: function response(res) {
        return answer = res;
      }
    }, "Testje")); // simulate click on option1

    wrapper.find('.option1').first().simulate('click'); // test if answer changed to the value

    expect(answer).toEqual('1'); // simulate click on option2

    wrapper.find('.option2').first().simulate('click'); // test if answer changed to the value

    expect(answer).toEqual('2');
  });
  it('style changes when disabled', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: _theme.default
    }, _react.default.createElement(_.QuestionBox, {
      option1: "1",
      option2: "2"
    }, "test"))); // check if color default is action

    expect(wrapper.find('.option1')).toHaveStyleRule('background-color', (0, _theme.default)().colors.action); // add prop disabled to questionBox

    wrapper.setProps({
      children: _react.default.createElement(_.QuestionBox, {
        disabled: true,
        option1: "1",
        option2: "2"
      }, "test")
    }); // check if bg color is disabled

    expect(wrapper.find('.option1')).toHaveStyleRule('background-color', (0, _theme.default)().colors.disabled);
  });
});