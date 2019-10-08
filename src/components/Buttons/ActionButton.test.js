import { ActionButton } from '.';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Theme from '../../constants/theme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

describe('ActionButton', () => {
  it('When disabled, button is unclickable & color changed', () => {
    let value = 0;

    // test if value adds up to 1 when clicked
    const wrapperEnabled = shallow(
      <ActionButton onClick={() => value++}>Testje1</ActionButton>,
    );
    wrapperEnabled.simulate('click');
    expect(value).toEqual(1);

    // test if value stays 1 when button is disabled and clicked
    const wrapperDisabled = shallow(
      <ActionButton disabled onClick={() => value++}>
        Testje2
      </ActionButton>,
    );
    wrapperDisabled.simulate('click');
    expect(value).toEqual(1);

    // test if style is correct when disabled
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ActionButton disabled onClick={() => value++}>
          Testje2
        </ActionButton>
      </ThemeProvider>,
    );
    expect(wrapper.childAt(0)).toHaveStyleRule(
      'background-color',
      Theme().colors.disabled,
    );
  });

  it('can pass extra props', () => {
    const wrapper = shallow(
      <ActionButton id={31} onClick={() => console.log('testen')}>
        Testje
      </ActionButton>,
    );
    expect(wrapper.props().id).toEqual(31);
  });

  it('style changes when level changes', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ActionButton onClick={() => console.log('test')}>Testje2</ActionButton>
      </ThemeProvider>,
    );

    // test no level
    expect(wrapper.childAt(0)).toHaveStyleRule(
      'background-color',
      Theme().colors.action,
    );

    // test primary level
    wrapper.setProps({
      children: (
        <ActionButton level="primary" onClick={() => console.log('test')}>
          Testje2
        </ActionButton>
      ),
    });
    expect(wrapper.childAt(0)).toHaveStyleRule(
      'background-color',
      Theme().colors.action,
    );

    // test secondary level
    wrapper.setProps({
      children: (
        <ActionButton level="secondary" onClick={() => console.log('test')}>
          Testje2
        </ActionButton>
      ),
    });
    expect(wrapper.childAt(0)).toHaveStyleRule(
      'background-color',
      Theme().colors.interactive,
    );

    // test random level
    wrapper.setProps({
      children: (
        <ActionButton level="randomword" onClick={() => console.log('test')}>
          Testje2
        </ActionButton>
      ),
    });
    expect(wrapper.childAt(0)).toHaveStyleRule(
      'background-color',
      Theme().colors.interactive,
    );
  });

  it('fullwidth prop takes 100% of width', () => {
    const wrapper = mount(
      <ActionButton fullwidth onClick={() => console.log('testen')}>
        Testje
      </ActionButton>,
    );
    expect(wrapper).toHaveStyleRule('width', '100%');
  });

  it('icon display', () => {
    // test with image string
    const wrapper = mount(
      <ActionButton
        icon="data:image/png;base64,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"
        onClick={() => console.log('testen')}
      >
        Testje
      </ActionButton>,
    );
    expect(wrapper.exists('img')).toEqual(true);

    //empty icon tag
    wrapper.setProps({ icon: '' });
    expect(wrapper.exists('img')).toEqual(false);
  });
});
