const Theme = () => {
  const Orange = {};

  Orange.data = {
    name: `WeGroup`,
    chatName: `Louise`,
    avatar: `https://files.wegroup.be/avatars/avatar-louise.svg`,
    logo: `https://files.wegroup.be/logos/wegroup/wegroup-logo.svg`,
  };

  Orange.colors = {
   'sub-txt': '#A29C95',
    highlight: '#505050',
    disabled: '#AEAEAE',
    disabledGray: '#D3D4D8',
    gray: '#C4C4C4',
    good: '#00CD39',
    bad: '#F74040',

    inactive: '#FBFBFB',
    normal: '#FFFFFF',
    selected: '#FFEFDC',

    interactive: '#C1C1C1',

    title: '#000000',
    font: '#050505',
    'sub-title': '#5B5550',

    // Buttons
    action: '#FF8000',
    toggle: '#FF9B21',
    hover: '#FFBF80',

    outline: '#CCCCCC',
    backDrop: '#F0F1F3',
  };

  Orange.fonts = {
    primary: `Lato, Helvetica, Myriad, Sans-Serif`,
    'normal-size': `1.6rem`,
    'regular-size': `1.4rem`,
    'big-size': `2.1rem`,
    'small-size': `1.2rem`,
  };

  return Orange;
};

export default Theme;
