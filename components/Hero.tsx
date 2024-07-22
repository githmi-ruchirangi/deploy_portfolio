import React, { useEffect } from "react";
import TypeWriteEffect from "./Helper/TypeWriteEffect";
import Image from 'next/image';

interface Props {
    contactRef: React.RefObject<HTMLElement>;
}

const Hero = ({ contactRef }: Props) => {

    useEffect(() => {
        const handleDownloadCV = () => {
            const cvUrl = "/pdfs/Wihanga Dilantha-Resume.pdf";
            const link = document.createElement('a');
            link.href = cvUrl;
            link.setAttribute('download', 'Wihanga Dilantha-Resume.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        const downloadButton = document.getElementById('download-cv-button');
        if (downloadButton) {
            downloadButton.addEventListener('click', handleDownloadCV);
        }

        return () => {
            if (downloadButton) {
                downloadButton.removeEventListener('click', handleDownloadCV);
            }
        };
        
    }, []);
    
    const handleHireMeClick = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const hiremeButton = document.getElementById('hire-me-button');
        if (hiremeButton) {
            hiremeButton.addEventListener('click', handleHireMeClick);
        }

        return () => {
            if (hiremeButton) {
                hiremeButton.removeEventListener('click', handleHireMeClick);
            }
        };
    }, []);
    
    return (
        <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg">
            <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
                    <div>
                        <h1 data-aos="fade-right" className="text-[#c4cfde] mb-[1.3rem]">WELCOME TO MY WORLD</h1>
                        <div data-aos="fade-left" data-aos-delay="400" >
                            <h1 className="x1:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white">
                                Hi, I'm <span className="text-yellow-300">Wihanga</span>
                            </h1>
                            <TypeWriteEffect/>
                        </div>
                        <p 
                            data-aos="fade-up" 
                            data-aos-delay="800"  
                            className="mt-[1.3rem] text-[15px] md:text-[13px] text-[#c4cfde] text-justify">
                            A passionate software engineer with over one year of experience in Java, Spring Boot and Microservices, specializing in backend development and REST APIs. Additionally, I have over a year of experience in React, Python and Flask. I excel at problem-solving, system design, and system enhancement. As a responsible and self-motivated individual, I am a recent graduate with strong technical skills, eager to embrace challenges, and dedicated to utilizing my abilities to contribute to organizational growth.
                        </p>
                        <div className="mt-[2rem] flex items-center space-x-6">
                            <button 
                                data-aos="zoom-in" 
                                data-aos-delay="1200" 
                                id="hire-me-button"
                                className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-700 text-white shadow-2xl transition-all rounded-md hover:-translate-y-1 hover:scale-105 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                <span className="relative z-10">Hire me</span>
                            </button>
                            <button 
                                data-aos="zoom-out" 
                                data-aos-delay="1600" 
                                id="download-cv-button"
                                className="relative h-12 w-40 overflow-hidden bg-gray-400 text-gray-700 font-semibold rounded-md cursor-not-allowed"
                                disabled>
                                <span className="relative z-10">Download CV</span>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Image src="/images/hero.svg" alt="hero" width={600} height={600} className="object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
