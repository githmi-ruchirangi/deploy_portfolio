import React from "react";
import Image from "next/image";
import { SparklesIcon, StarIcon } from "@heroicons/react/16/solid";

interface Props{

    image:string;
    interest:string;
    desc:string
   
}

const InterestCard = ({image,interest,desc}:Props) => {

    return (
    <div className="m-0.5 hover:bg-gray-700 transition-all duration-300 rounded-lg ">
        <div className="border-2 p-4 border-gray-700 rounded-xl">
        <Image
        src={image}
        alt={interest}
        width={130}
        height={130}
        className="rounded-full mx-auto mt-[2rem]"/>
        <div>
            <SparklesIcon className="w-[6rem] h-[6rem] text-white opacity-15 fixed"/>
        </div>
        <h1 className="text-[20px] mt-[0.4rem] text-center text-yellow-400 mt-[2rem] font-medium">{interest}</h1>
        
        <p className="text-[15px] text-white text-justify opacity-65 mt-[3rem] text-center mt-[0.3rem] ml-[1rem] mr-[1rem] mb-[1rem]">
            {desc}</p>
            
             <div>
            <SparklesIcon className="w-[6rem] right-0 h-[6rem] text-white opacity-15 fixed"/>
        </div>
        
        </div>
        </div>
    );
};
export default InterestCard;