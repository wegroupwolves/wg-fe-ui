import React, { useState, useEffect } from 'react';
import { array, func, string, number, object } from 'prop-types';
import { Slider, Handles } from 'react-compound-slider';

import { Handle, Rail } from './index';

const RangeSlider = ({
  initialValues,
  onChanged,
  handlePrefix,
  min,
  max,
  step,
  mode,
  className,
  ...otherProps
}) => {
  const [values, setValues] = useState(initialValues.slice());

  useEffect(() => {
    setValues(initialValues.slice());
  }, [initialValues]);

  const sliderStyle = {
    position: 'relative',
    width: 'calc(100% - 56px)',
    maxWidth: 'calc(100rem - 56px)',
    marginRight: 56,
    height: 36,
    paddingRight: 50,
  };

  const onChange = newValues => {
    setValues(newValues);
    onChanged(newValues);
  };

  return (
    <Slider
      rootStyle={sliderStyle}
      domain={[min, max]}
      onChange={onChange}
      values={values}
      step={step}
      mode={mode}
      className={className}
      {...otherProps}
    >
      <Rail />

      <Handles>
        {({ handles, getHandleProps }) => (
          <div className="slider-handles">
            {handles.map(handle => (
              <Handle
                key={handle.id}
                handle={handle}
                getHandleProps={getHandleProps}
                handlePrefix={handlePrefix}
              />
            ))}
          </div>
        )}
      </Handles>
    </Slider>
  );
};

RangeSlider.defaultProps = {
  initialValues: [0, 100],
  min: 0,
  max: 100,
  step: 1,
  mode: 2,
};

RangeSlider.propTypes = {
  /** The initial values of the slider. */
  initialValues: array.isRequired,
  /** Function to be run when the user releases the handle on a new value. (Returns a variable containing the current values.) */
  onChanged: func,
  /** Optional prefix to be shown in the handles. */
  handlePrefix: string,
  /** Minimum value of the slider. */
  min: number.isRequired,
  /** Maximum value of the slider. */
  max: number.isRequired,
  /** Step by which the values change. */
  step: number.isRequired,
  /** The mode of the slider. (Read more here: https://sghall.github.io/react-compound-slider/#/component-api/slider) */
  mode: number,
  /** Optional className to be applied. */
  className: string,
  /** Optional additional props to be passed. */
  otherProps: object,
};

export default RangeSlider;
