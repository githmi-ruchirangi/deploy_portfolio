import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props{
    showNav:boolean;
    closeNav:()=>void;
    refs: {
        aboutRef: React.RefObject<HTMLElement>;
        servicesRef: React.RefObject<HTMLElement>;
        projectsRef: React.RefObject<HTMLElement>;
        contactRef: React.RefObject<HTMLElement>;
    };
}


const NavMobile = ({ closeNav, showNav, refs }: Props) => {
    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

    const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
            closeNav(); 
        }
    };


    return (
     <div>
     <div className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}>
        
    </div>
    <ul className={`text-white ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}>
                <li className="cursor-pointer text-[25px] sm:text-[30px]" onClick={() => scrollToRef(refs.aboutRef)}>About</li>
                <li className="cursor-pointer text-[25px] sm:text-[30px]" onClick={() => scrollToRef(refs.servicesRef)}>Services</li>
                <li className="cursor-pointer text-[25px] sm:text-[30px]" onClick={() => scrollToRef(refs.projectsRef)}>Projects</li>
                <li className="cursor-pointer text-[25px] sm:text-[30px]" onClick={() => scrollToRef(refs.contactRef)}>Contact me</li>
            <XMarkIcon onClick={closeNav}  className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white"></XMarkIcon>
        </ul>
    </div>
    );
};
export default NavMobile;