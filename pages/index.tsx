import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Project from "@/components/Project";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import React, { useState } from "react";


const HomePage = () => {

const [showNav, setShowNav] = useState(false)
const showNavHandler =()=>setShowNav(true)
const closeNavHandler =()=>setShowNav(false)

    return (
    <div className="overflow-hidden">
        <NavMobile showNav={showNav} closeNav={closeNavHandler}/>
        <Nav openNav={showNavHandler}/>
        <Hero/>
        <AboutMe/>
        <Services/>
        <Skills/>
        <Project/>
        <Reviews/>
        <Blog/>
        </div>
    );
};
export default HomePage;
