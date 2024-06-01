import React, { useState } from "react";
import SkillCard from "./Helper/SkillCard";

const Skills = () => {
    const [showMore, setShowMore] = useState(false);

    const handleSeeMoreClick = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="pt-[5rem] pb-[3rem] bg-black">
            <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
                <div className="col-span-3">
                    <p className="heading_mini">My Skills</p>
                    <h1 className="heading_primary">Let's Explore Popular <span className="text-yellow-400">Skills</span> & Experiences</h1>
                    <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem] text-justify">
                        As a dedicated software engineer with over one year of industry experience, I am proficient in Java, Spring Boot, React,
                        JavaScript, Python, and React Native. I specialize in creating scalable, high-performance applications using
                        frameworks like React, Node.js, Next.js, and Firebase. Skilled in developing predictive AI models,
                        I have worked with CNN, LSTM, TensorFlow, and PyTorch. Recognized for my problem-solving skills and
                        continuous learning mindset, I aim to drive innovation and contribute to impactful projects in the tech industry.
                    </p>
                    <button
                        onClick={handleSeeMoreClick}
                        className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-700 text-white
                        shadow-2xl transition-all rounded-md hover:-translate-y-1 hover:scale-105 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out
                        hover:before:h-56 hover:before:w-56"
                    >
                        <span className="relative z-10">{showMore ? "See Less" : "More skills"}</span>
                    </button>
                </div>
                <div className="col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-[1rem] items-center ">
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center">
                            <SkillCard title="React" image="/images/react.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                            <SkillCard title="Java" image="/images/java.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                            <SkillCard title="Spring Boot" image="/images/springboot.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
                            <SkillCard title="Python" image="/images/python.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
                            <SkillCard title="Flutter" image="/images/flutter.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1000">
                            <SkillCard title="Dart" image="/images/dart.png"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1200">
                            <SkillCard title="JavaScript" image="/images/js.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1400">
                            <SkillCard title="TypeScript" image="/images/ts.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1600">
                            <SkillCard title="PHP" image="/images/php.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1800">
                            <SkillCard title="Laravel" image="/images/laravel.svg" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="2000">
                            <SkillCard title="React Native" image="/images/rn.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="2200">
                            <SkillCard title="Node.js" image="/images/nodejs.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="2400">
                            <SkillCard title="Next.js" image="/images/nextjs.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="2600">
                            <SkillCard title="Tailwind CSS" image="/images/tailwind.svg"  />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="2800">
                            <SkillCard title="Flask" image="/images/flask.svg" />
                        </div>
                        {showMore && (
                            <>
                                
                                <div data-aos="flip-left" data-aos-anchor-placement="top-center" >
                                    <SkillCard title="Firebase" image="/images/firebase.svg"  />
                                </div>
                                <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                                    <SkillCard title="HTML5" image="/images/HTML.svg"  />
                                </div>
                                <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                                    <SkillCard title="CSS" image="/images/css.svg"  />
                                </div>
                                <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
                                    <SkillCard title="MySQL" image="/images/mysql.svg"  />
                                </div>
                                <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
                                    <SkillCard title="PostgreSQL" image="/images/postgresql.svg"  />
                                </div>
                                <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1000">
                                    <SkillCard title="Oracle SQL" image="/images/sql.svg"  />
                                </div>
                                <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1200">
                                    <SkillCard title="PySpark" image="/images/spark.svg"  />
                                </div>
                                <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1400">
                                    <SkillCard title="Azure cloud" image="/images/azure.svg"  />
                                </div>
                                <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1600">
                                    <SkillCard title="Android" image="/images/android.svg"  />
                                </div>
                                <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1800">
                                    <SkillCard title="Linux" image="/images/linux.svg"  />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
