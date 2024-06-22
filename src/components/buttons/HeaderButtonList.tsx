import React from 'react';
import buttonsData from '../../data/buttonsData';
import CustomButton from './CustomButton';

const CustomButtonsList = () => {
  return buttonsData.map((data, index) => (
    <CustomButton
      key={index}
      text={data.text}
      top={data.top}
      left={data.left}
    />
  ));
};

export default CustomButtonsList;
