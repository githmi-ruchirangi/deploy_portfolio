import React from "react";
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {

    return (
        <TypeAnimation
        sequence={[
          'a Software Engineer',
          1000, 
          'a  Researcher',
          1000,
          'a  Freelancer',
          1000,
          'a',
          1000
        ]}
        wrapper="span"
        speed={50}
       className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
        repeat={Infinity}
      />
    )
};
export default TypeWriteEffect;