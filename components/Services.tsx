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
        <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
            <div>
                <ServiceCard title="React Website" num="01"/>
            </div>
            <div>
                <ServiceCard title="Next JS Website" num="02"/>
            </div>
            <div>
                <ServiceCard title="Fullstack Website" num="03"/>
            </div>
            <div>
                <ServiceCard title="Node JS Api" num="04"/>
            </div>
            <div>
                <ServiceCard title="MERN WebApp" num="05"/>
            </div>
            <div>
                <ServiceCard title="Bug Fixing" num="06"/>
            </div>
        </div>
    </div>
    );
};
export default Services;