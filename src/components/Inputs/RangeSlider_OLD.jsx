import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const RangeSlider = () => {
  return (
    <MultiRangeSlider>
      <InputLeft type="range" min="0" max="100" value="25"></InputLeft>
      <InputRight type="range" min="0" max="100" value="75"></InputRight>

      <Slider>
        <Track></Track>
        <Range></Range>
        <ThumbLeft>€64</ThumbLeft>
        <ThumbRight>€304</ThumbRight>
      </Slider>
    </MultiRangeSlider>
  );
};

const MultiRangeSlider = styled.div`
  position: relative;
  max-width: 100rem;
  width: 100%;

  input[type='range'] {
    position: absolute;
    z-index: 2;
    height: 36px;
    width: 100%;
  }
`;

const InputLeft = styled.input`
  top: 50px;
`;

const InputRight = styled.input`
  top: -50px;
`;

const Slider = styled.div`
  position: relative;
  z-index: 1;
  height: 36px;
`;

const Track = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 8px;
  background: #f0f1f3;
`;

const Range = styled.div`
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  top: 0;
  bottom: 0;
  border-radius: 8px;
  background-color: red;
`;

const ThumbLeft = styled.div`
  position: absolute;
  z-index: 3;
  width: 50px;
  height: 30px;
  background-color: white;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-align: center;
  color: ${({ theme }) => theme.typo.title};

  transform: translate(3px, 3px);

  left: 25%;
`;

const ThumbRight = styled.div`
  position: absolute;
  z-index: 3;
  width: 50px;
  height: 30px;
  background-color: white;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-align: center;
  color: ${({ theme }) => theme.typo.title};

  transform: translate(-3px, 3px);

  right: 25%;
`;

// RangeSlider.propTypes = {};

export default RangeSlider;
