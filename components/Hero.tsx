import React from "react";
import TypeWriteEffect from "./Helper/TypeWriteEffect";
import Image from 'next/image';

const Hero = () => {

    return (
    <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg">
       <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
        <div>
            <h1 className="text-[#c4cfde] mb-[1.3rem]">WELCOME TO MY WORLD</h1>
            <div>
                <h1 className="x1:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white">
                    Hi, I'm <span className="text-yellow-300">Wihanga</span>
                </h1>
                <TypeWriteEffect/>
        </div>
        <p className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Kuis nostrud exercitation ullamco 
             laboris nisi ut aliquip ex ea commodo consequat.</p>
             <div className="mt-[2rem] flex items-center space-x-6">
                <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-700 text-white
                shadow-2xl transition-all rounded-md hover:-translate-y-1 hover:scale-105 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out
                hover:before:h-56 hover:before:w-56">
                    <span className="relative z-10">Hire me</span>
                </button>
                <button className="before:ease relative h-12 w-40 overflow-hidden bg-orange-500 text-white font-semibold rounded-md hover:-translate-y-1 hover:scale-105 shadow-2xl before:absolute before:left-0 before:-ml-2 
                before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-600 before:transition-all before:duration-300 
                hover:text-white hover:shadow-black hover:before:-rotate-180 ">
                    <span className="relative z-10">Download CV</span>
                </button>
             </div>
        </div>
        <div className="hidden md:block">
        <Image src="/images/hero.png" alt="hero" width={600} height={600} className="object-contain"/>
        </div>
        </div>
       </div>
        </div>
    );
};
export default Hero;