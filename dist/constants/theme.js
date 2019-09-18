"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Theme = function Theme() {
  var Orange = {};
  Orange.data = {
    name: "WeGroup",
    chatName: "Louise",
    avatar: "https://files.wegroup.be/avatars/avatar-louise.svg",
    logo: "https://files.wegroup.be/logos/wegroup/wegroup-logo.svg"
  };
  Orange.colors = {
    'sub-txt': "#A29C95",
    highlight: "#505050",
    disabled: "#AEAEAE",
    good: "#00CD39",
    bad: '#F74040',
    interactive: "#C1C1C1",
    title: "#000000",
    'sub-title': "#5B5550",
    // Buttons
    action: "#FF8000",
    toggle: '#FF9B21',
    hover: '#FFBF80',
    outline: '#CCCCCC',
    'bg-disabled': '#F0F1F3'
  };
  Orange.fonts = {
    primary: "Lato, Helvetica, Myriad, Sans-Serif",
    'normal-size': "1.5rem",
    'big-size': "2rem",
    'small-size': "1.2rem"
  };
  return Orange;
};

var _default = Theme;
exports.default = _default;