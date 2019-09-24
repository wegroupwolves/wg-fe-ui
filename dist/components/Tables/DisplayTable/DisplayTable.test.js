"use strict";

var _ = require(".");

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Checkbox', function () {
  it('can add clickable highlight to value', function () {
    var value = 0;
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.DisplayTable, null, _react.default.createElement(_.DisplayTable.Row, null, _react.default.createElement(_.DisplayTable.Value, {
      toggled: function toggled() {
        return value++;
      },
      highlight: "highlight"
    }, "Value")))); // Check if highlight displays text

    expect(wrapper.find('span').text()).toEqual('highlight'); // Check if toggled function triggers when highlight clicked

    wrapper.find('span').simulate('click');
    expect(value).toEqual(1);
  });
  it('contains necesarry DisplayTable components', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.DisplayTable, null, _react.default.createElement(_.DisplayTable.Row, null, _react.default.createElement(_.DisplayTable.Key, null, "Key"), _react.default.createElement(_.DisplayTable.Value, null, "Value"))));
    expect(wrapper.find('tbody').exists()).toEqual(true);
    expect(wrapper.find('th').exists()).toEqual(true);
    expect(wrapper.find('td').exists()).toEqual(true);
  });
});