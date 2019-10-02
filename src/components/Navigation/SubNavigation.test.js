import { SubNavigation } from '.';
import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';

describe('SubNavigation', () => {
  it('can increase value after click', () => {
    let value = 0;
    const wrapper = mount(
      <SubNavigation>
        <React.Fragment key={1}>
          <SubNavigation.Section onClick={() => value++}>
            Label
          </SubNavigation.Section>
          <SubNavigation.SectionContainer active={true}>
            <SubNavigation.SubSection
              key={1}
              onClick={() => value++}
              active={false}
            >
              SubLabel
            </SubNavigation.SubSection>
            ))
          </SubNavigation.SectionContainer>
        </React.Fragment>
        ))
      </SubNavigation>,
    );

    // Check if li displays text
    expect(
      wrapper
        .find('li')
        .at(0)
        .text(),
    ).toEqual('Label');

    // Check if toggled function triggers when li clicked
    wrapper
      .find('li')
      .at(0)
      .simulate('click');
    expect(value).toEqual(1);
  });

  it('contains necesarry SubNavigation components', () => {
    const wrapper = mount(
      <SubNavigation>
        <React.Fragment key={1}>
          <SubNavigation.Section>Label</SubNavigation.Section>
          <SubNavigation.SectionContainer active={true}>
            <SubNavigation.SubSection key={1} active={false}>
              SubLabel
            </SubNavigation.SubSection>
            ))
          </SubNavigation.SectionContainer>
        </React.Fragment>
        ))
      </SubNavigation>,
    );

    expect(wrapper.find('ul').exists()).toEqual(true);
    expect(wrapper.find('li').exists()).toEqual(true);
  });
});
