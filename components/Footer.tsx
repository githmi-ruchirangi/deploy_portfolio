import { MapIcon } from "@heroicons/react/16/solid";
import React from "react";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { PhoneIcon } from "@heroicons/react/16/solid";
import ScrollUp from "@/components/Helper/ScrollUp"

interface FooterProps {
    aboutRef: React.RefObject<HTMLElement>;
    servicesRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
}

const Footer: React.FC<FooterProps> = ({ aboutRef, servicesRef, projectsRef, contactRef }) => {
    const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="pt-[5rem] pb-[3rem]  custom-bg">
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
                <div>
                    <div className="font-logo text-white text-[18px]">
                        <span className="text-[30px] md:text[40px] text-yellow-400">Wihanga</span> Dilantha
                    </div>
                    <h1 className="text-[14px] mt-[0.5rem] mb-[1rem] text-white opacity-70 text-justify">
                        WD Insights brings your vision to life through innovative software solutions.
                        From web applications to mobile apps and backend services, I dedicate to delivering top-quality results.
                        Reach out me for inquiries, collaborations, or project discussions. Let's make your brand shine!
                    </h1>
                    <a href="mailto:dilanthaweerakoon@gmail.com" className="mt-[1.3rem]  text-yellow-300 font-light underline cursor-pointer">dilanthaweerakoon@gmail.com</a>
                </div>
                <div className="md:mx-auto">
                    <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">Quick Links</h1>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</p>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300" onClick={() => scrollToRef(aboutRef)}>About</p>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300" onClick={() => scrollToRef(servicesRef)}>Services</p>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300" onClick={() => scrollToRef(projectsRef)}>Projects</p>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300" onClick={() => scrollToRef(contactRef)}>Contact</p>
                </div>
                <div className="lg:mx-auto">
                    <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">Address</h1>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <MapIcon className="w-[1rem] h-[1rem] text-yellow-300" />
                        <p className="text-[17px] font-normal text-white opacity-75">No. 93/1, Kandy Road, Yakkala</p>
                    </div>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
                        <a href="mailto:dilanthaweerakoon@gmail.com" className="text-[17px] font-normal text-white opacity-75 underline cursor-pointer">dilanthaweerakoon@gmail.com</a>
                    </div>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300" />
                        <p className="text-[17px] font-normal text-white opacity-75">+94-71 919 0880</p>
                    </div>
                </div>
            </div>
            <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
                &#169; Copyright 2024 by WihangaD | All Rights Reserved
            </div>
            <ScrollUp />
        </div>
    );
};

export default Footer;
