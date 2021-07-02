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
      title: '#453635',
      text: '#453635',
      highlight: '#505050',
      subTitle: '#5B5550',
      interactive: '#858585',
      outline: '#CCCCCC',
      editable: '#3297FD',
      selected: brandLight,
    },
    ui: {
      background: '#F4F4F4',
      backgroundLight: '#D9D6D6',
      toolbar: '#F6F6F6',
      outline: '#C4C4C4',
      interactive: '#B4B4B4',
      disabled: '#B4B4B4',
      highlight: '#6A6A6A',
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
      blue: '#00A3FF',
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
    isImmo: true,
  };
});
