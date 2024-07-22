import React from "react";
import BlogCard from "./Helper/BlogCard";


const Blog = () => {

    return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
        <div className="text-center">
        <p className="heading_mini">My Blogs</p>
        <h1 className="heading_primary">My Latest <span className="text-yellow-300">Blogs</span> and News</h1>
            </div>
            <div className="w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]">
            <div
            data-aos="zoom-in" 
            data-aos-anchor-placement="top-bottom" 
            >
                <BlogCard title="A Comprehensive Guide: Spring Boot Microservices"  date="02 June 2024" image="/images/b1.svg" link="https://medium.com/@wihangaweerakoon/a-comprehensive-guide-spring-boot-microservices-3518e07c65d8"/>
            </div>
            <div
            data-aos="zoom-in" 
            data-aos-anchor-placement="top-bottom" 
            data-aos-delay="200">
                <BlogCard title="The Starter Guide: Search Engine Optimization (SEO)"  date="06 June 2024" image="/images/b2.svg" link="https://medium.com/@wihangaweerakoon/the-starter-guide-search-engine-optimization-seo-924483acdfbc"/>
            </div>
            <div
            data-aos="zoom-in" 
            data-aos-anchor-placement="top-bottom" 
            data-aos-delay="400">
                <BlogCard title="The Starter Guide: React Native for Beginners"  date="09 June 2024" image="/images/b3.svg" link="https://medium.com/@wihangaweerakoon/react-native-for-beginners-a5b03bce7598"/>
            </div>
            
            </div>
        </div>
    );
};
export default Blog;