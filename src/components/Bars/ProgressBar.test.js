import React from 'react'
import ProgressBar, { ClaimStatus } from './ProgressBar'
import LoadingBar from './LoadingBar'
import 'jest-styled-components'
import { mount, shallow } from 'enzyme'
import Theme from '../../constants/theme'
import { ThemeProvider } from 'styled-components'


describe('ProgressBar', () => {

    it('when rendered, component should have all children rendered', () => {
        const wrapper = mount(
            <ProgressBar />
        );

        expect(wrapper.find(LoadingBar).exists()).toEqual(true);
        expect(wrapper.find(ClaimStatus).exists()).toEqual(true)
    });

    it('when correct stages passed, should their length equal to number of ClaimStatus components', () => {
        const stages = [
            { 
              key: 'start', 
              name: 'start', 
              id: 1 
            },
            {
              key: 'middle',
              name: 'middle',
              id: 2
            },
            {
              key: 'end',
              name: 'end',
              id: 3
            }
        ];

        const wrapper = mount(<ProgressBar stages={stages} />);

        expect(wrapper.find(ClaimStatus).length).toEqual(stages.length)
    });

});