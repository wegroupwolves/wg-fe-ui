import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import LoadingSpinner from '../src/components/Loaders/LoadingSpinner.jsx';

storiesOf('Low level blocks/Loaders', module)
  .addDecorator(withInfo({ inline: true }))
  .add('LoadingSpinner', () => {
    return <StyledSpinner />;
  });

const StyledSpinner = styled(LoadingSpinner)`
  width: 20px;
  height: 20px;
`;
