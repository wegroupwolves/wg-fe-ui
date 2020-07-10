import React from 'react';
import styled from 'styled-components';
import { array, string, object } from 'prop-types';

import GuidedImageStep from './GuidedImageStep';

const GuidedImage = ({ imageUrl, steps, className, otherProps }) => {
  return (
    <ImageWrapper className={className} {...otherProps}>
      <img src={imageUrl} alt="" />

      <StepsWrapper>
        {steps.map((step, i) => (
          <GuidedImageStep
            key={i}
            offsetTop={step.offsetTop}
            offsetLeft={step.offsetLeft}
            content={step.content}
          >
            {i + 1}
          </GuidedImageStep>
        ))}
      </StepsWrapper>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;

  > img {
    max-width: 100%;
  }
`;

const StepsWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

GuidedImage.propTypes = {
  /** The URL of the image to be displayed. */
  imageUrl: string.isRequired,
  /** An array of steps to be displayed on top of the image. */
  steps: array.isRequired,
  /** Extra classnames to be passed to the element. */
  className: string,
  /** Extra prop to be passed to the element. */
  otherProps: object,
};

export default GuidedImage;
