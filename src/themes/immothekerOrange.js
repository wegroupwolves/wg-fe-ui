export default (function() {
  const brandPrimary = '#ED8B00';
  const brandLighter = '#F2BB80';
  const brandLight = '#FF9B21';
  const brandLightest = '#FFEFDC';
  const brandDark = '#db6f01';
  const brandDarker = '#6d340d';
  const brandSecondary = '#453635';
  const brandFont = `Roboto, Helvetica, Myriad, Sans-Serif`;
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
      interactive: '#858585',
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
      succes: '#28a745',
      error: '#DC3545',
      warning: '#FFc107',
      succesLight: '#28A745',
      errorLight: '#DC3545',
      warningLight: '#FFEFDC',
      blue: '#17A2B8',
      yellow: '#FFD600',
    },
    labels: {
      default: '#F6F6F6',
      defaultText: '#AEAEAE',

      prospect: '#E2EDF0',
      prospectText: '#6EA3B4',

      lead: '#FFF7CE',
      leadText: '#C8893D',

      customer: '#E3F0E2',
      customerText: '#75B46E',

      guarantee: '#F0F1F3',
      guaranteeText: '#8990A3',
    },
    font: brandFont,
  };
});
