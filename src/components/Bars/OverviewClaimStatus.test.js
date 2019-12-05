import OverviewClaimStatus from './OverviewClaimStatus';
import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { orange } from '../../themes';
const theme = orange();

describe('OverviewClaimStatus', () => {
  it('renders proper children', () => {
    const statuses = ['first', 'second', 'third'];
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <OverviewClaimStatus statuses={statuses} currentStatus={statuses[1]} />
      </ThemeProvider>,
    );

    const statusText = wrapper.find('span');

    // Check if span exists
    expect(statusText.exists()).toEqual(true);
    // Check if span has valid text
    expect(statusText.text()).toEqual('second');
    // Check if all rectangles are rendered
    const rectangles = wrapper.find('StatusRectangle');
    expect(rectangles).toHaveLength(statuses.length);
    // Check if rect colors are valid
    expect(rectangles.at(0)).toHaveStyleRule('background-color', '#37D66C');
    expect(rectangles.at(1)).toHaveStyleRule('background-color', '#FFD600');
    expect(rectangles.at(2)).toHaveStyleRule('background-color', '#F1EFEF');
  });
});
