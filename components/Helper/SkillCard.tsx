import React from "react";
import Image from "next/image";

interface Props{

    image:string;
    title:string;
    
}

const SkillCard = ({image,title}:Props) => {

    return (
    <div className="p-6 hover:bg-red-700 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900 hover:-translate-y-1 hover:scale-103 ">
       <Image src={image} alt={title} width={64} height={64} className="object-cover mx-auto"/>
       <h1 className="text-xs mt-[1rem] text-white font-[600]">{title}</h1>
       {/* <div className="bg-black mt-[1rem] rounded-lg p-2 text-white opacity-65">
        {percent}
       </div> */}
        </div>
    );
};
export default SkillCard;