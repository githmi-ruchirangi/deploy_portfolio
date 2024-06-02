import React from "react";
import InterestsSlider from "./Helper/InterestsSlider";

const Interests = () => {

    return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
        <div className="text-center">
        <p className="heading_mini">Interests</p>
        <h1 className="heading_primary">My <span className="text-yellow-400"> Passions</span> 
        </h1>
        </div>
        <div className="w-[80%] pt-[3rem] md:pt-[5rem] mx-auto">
            <InterestsSlider />
        </div>
    </div>
    );
};
export default Interests;