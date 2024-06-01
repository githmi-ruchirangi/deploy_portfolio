import React from "react";
import ServiceCard from "./Helper/ServiceCard";

const Services = () => {

    return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
        <div className="text-center">
        <p className="heading_mini">Popular services</p>
        <h1 className="heading_primary">My Special <span className="text-yellow-400">Services</span> For You
        </h1>
        </div>
        <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-center">
            <div
            data-aos="fade-up" 
            data-aos-anchor-placement="top-center"  >
                <ServiceCard title="Web Application Development" num="01" description="Building robust and scalable web applications tailored to your business needs."/>
            </div>
            <div
             data-aos="fade-up" 
             data-aos-anchor-placement="top-center"
             data-aos-delay="200"
            >
                <ServiceCard title="Android Development" num="02" description="Proficient in developing user-friendly Android apps for seamless performance on various devices."/>
            </div>
            <div
             data-aos="fade-up" 
             data-aos-anchor-placement="top-center"
             data-aos-delay="400">
                <ServiceCard title="UI/UX Design" num="03" description="Designing user interfaces and user experiences that are both intuitive and visually appealing."/>
            </div>
            <div
             data-aos="fade-up" 
             data-aos-anchor-placement="top-center"
             data-aos-delay="600">
                <ServiceCard title="Database Management" num="04" description="Designing and managing efficient and secure databases to store and organize your data."/>
            </div>
            <div
             data-aos="fade-up" 
             data-aos-anchor-placement="top-center"
             data-aos-delay="800">
                <ServiceCard title="API Integration" num="05" description="Integrating various APIs to extend the functionality of your applications."/>
            </div>
           
            <div
             data-aos="fade-up" 
             data-aos-anchor-placement="top-center"
             data-aos-delay="1000">
                <ServiceCard title="Custom Solutions" num="06" description="Providing custom solutions to meet unique business requirements."/>
            </div>
            <div
             data-aos="fade-up" 
             data-aos-anchor-placement="top-center"
             data-aos-delay="1200">
                <ServiceCard title="Security Implementation" num="07" description="Implementing security measures to protect your applications from threats."/>
            </div>
           
            <div
             data-aos="fade-up" 
             data-aos-anchor-placement="top-center"
             data-aos-delay="1400">
                <ServiceCard title="Search Engine Optimization" num="08" description="Optimizing websites to enhance visibility and ranking on search engine results pages."/>
            </div>
            
        </div>
    </div>
    );
};
export default Services;