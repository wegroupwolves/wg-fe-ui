export default function() {
  const brandPrimary = '#D61D70';
  const brandLight = '#ff1f76';
  const brandLighter = '#ffc2d9';
  const brandLightest = '#ffdeea';
  const brandDark = '#9e003c';
  const brandDarker = '#8c0060';
  const brandSecondary = '#ff1f76';
  const brandFont = `Circular, Helvetica, Myriad, Sans-Serif`;
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
      default: '#C1C1C1',
      defaultText: '#505050',

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
}
