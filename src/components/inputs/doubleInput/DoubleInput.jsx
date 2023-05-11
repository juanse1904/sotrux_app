import React, { useState } from 'react';
import TextInputStyled from '../textInput/styledInput';

const DoubleInput = ({
  name,
  placeHolder1,
  placeHolder2,
  className,
  value,
  isDouble,
  name1,
  name2,
  onChangeFunction,
}) => {
  const [currentValue, setCurrentValue] = useState({
    target: {
      name,
      value: {
        v1: value.v1,
        v2: value.v2,
      },
    },
  });

  const handleChange1 = (e) => {
    const value1 = e.target.value;
    setCurrentValue({
      ...currentValue,
      target: {
        name,
        value: {
          v1: value1,
          v2: currentValue.target.value.v2,
        },
      },
    });

    onChangeFunction(currentValue);
  };

  const handleChange2 = (e) => {
    const value2 = e.target.value;

    setCurrentValue({
      ...currentValue,
      target: {
        name,
        value: {
          v1: currentValue.target.value.v1,
          v2: value2,
        },
      },
    });
  };

  return (
    <div className={className}>
      <div className="double-container">
        {isDouble ? (
          <>
            <TextInputStyled
              type="Text"
              name={name1}
              value={value.v1}
              placeHolder={placeHolder1}
              onChangeFunction={handleChange1}
            />
            <p className="double-separator">-</p>
            <TextInputStyled
              type="Text"
              name={name2}
              value={value.v2}
              placeHolder={placeHolder2}
              onChangeFunction={handleChange2}
            />
          </>
        ) : (
          <TextInputStyled
            type="Text"
            name={name1}
            value={value[0]}
            placeHolder={placeHolder1}
            onChangeFunction={handleChange1}
          />
        )}
      </div>
    </div>
  );
};

export default DoubleInput;
