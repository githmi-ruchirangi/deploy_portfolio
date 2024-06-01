import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Project from "@/components/Project";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import React, { useEffect, useState, useRef } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const HomePage: React.FC = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    // Refs for sections
    const aboutRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    // Animation setup
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease",
            once: true,
            anchorPlacement: "bottom-bottom",
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <NavMobile showNav={showNav} closeNav={closeNavHandler} refs={{ aboutRef, servicesRef, projectsRef, contactRef }} />
            <Nav 
            aboutRef={aboutRef} 
            servicesRef={servicesRef} 
            projectsRef={projectsRef} 
            contactRef={contactRef} 
            openNav={showNavHandler} />
            <Hero />
            <section ref={aboutRef}>
                <AboutMe />
            </section>
            <section ref={servicesRef}>
                <Services />
            </section>
            <Skills />
            <section ref={projectsRef}>
                <Project />
            </section>
            <Reviews />
            <Blog />
            <section ref={contactRef}>
                <Contact />
            </section>
            <Footer 
                aboutRef={aboutRef} 
                servicesRef={servicesRef} 
                projectsRef={projectsRef} 
                contactRef={contactRef} 
            />
        </div>
    );
};

export default HomePage;