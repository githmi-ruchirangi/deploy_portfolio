import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface Props {
    openNav: () => void;
    aboutRef: React.RefObject<HTMLElement>;
    servicesRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
}

const Nav: React.FC<Props> = ({ openNav, aboutRef, servicesRef, projectsRef, contactRef }) => {
    const [navSticky, setNavSticky] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true);
            }
            if (window.scrollY <= 90) {
                setNavSticky(false);
            }
        };
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const stickyStyle = navSticky ? 'bg-[#212428] shadow-gray-900 shadow-sm' : '';

    return (
        <div className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000]`}>
            <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
                <div className="font-logo text-white text-[18px]">
                    <span className="text-[30px] md:text-[40px] text-yellow-300">WD.</span>
                    <span className="text-[28px] md:text-[30px]">Dev </span>
                </div>
                <ul className="md:flex hidden items-center space-x-10">
                    <li><a className="nav_link cursor-pointer"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</a></li>
                    <li><a className="nav_link cursor-pointer"  onClick={() => scrollToRef(aboutRef)}>About</a></li>
                    <li><a className="nav_link cursor-pointer"  onClick={() => scrollToRef(servicesRef)}>Services</a></li>
                    <li><a className="nav_link cursor-pointer"  onClick={() => scrollToRef(projectsRef)}>Projects</a></li>
                    <li><a className="nav_link cursor-pointer"  onClick={() => scrollToRef(contactRef)}>Contact</a></li>
                </ul>
                <Bars3CenterLeftIcon onClick={openNav} className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180" />
            </div>
        </div>
    );
};

export default Nav;
