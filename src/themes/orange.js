export default (function() {
  const brandPrimary = '#FF8000';
  const brandLighter = '#F2BB80';
  const brandLight = '#FF9B21';
  const brandLightest = '#FFEFDC';
  const brandDark = '#db6f01';
  const brandDarker = '#6d340d';
  const brandSecondary = '#FF9B21';
  const brandFont = `Lato, Helvetica, Myriad, Sans-Serif`;
  return {
    brand: {
      primary: brandPrimary,
      light: brandLight,
      lighter: brandLighter,
      lightest: brandLightest,
      dark: brandDark,
      darker: brandDarker,
      secondary: brandSecondary,
    },
    typo: {
      title: '#050505',
      text: '#0E0E0E',
      highlight: '#505050',
      subTitle: '#5B5550',
      interactive: '#C1C1C1',
      outline: '#CCCCCC',
      editable: '#3297FD',
      selected: brandLight,
    },
    ui: {
      background: '#FBFBFB',
      backgroundLight: '#D3D4D8',
      toolbar: '#F6F6F6',
      outline: '#CCCCCC',
      interactive: '#C1C1C1',
      disabled: '#AEAEAE',
      highlight: '#505050',
      active: brandLight,
    },
    hover: {
      primary: brandLightest,
      secondary: '#F6F6F6',
    },
    status: {
      succes: '#37D66C',
      error: '#F74040',
      warning: '#FF9B21',
      succesLight: '#D2FDE0',
      errorLight: '#FFE1E1',
      warningLight: '#FFEFDC',
    },
    font: brandFont,
  };
});
