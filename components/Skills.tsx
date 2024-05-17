import React from "react";
import SkillCard from "./Helper/SkillCard";

const Skills = () => {

    return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
        <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
          <div className="col-span-3">
            <p className="heading_mini">My Skills</p>
            <h1 className="heading_primary">Let's Explor Popular <span className="text-yellow-400">Skills</span>{""} & Experiences</h1>
            <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
                Kuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
                </p>
                <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-700 text-white
                shadow-2xl transition-all rounded-md hover:-translate-y-1 hover:scale-105 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out
                hover:before:h-56 hover:before:w-56">
                    <span className="relative z-10">Learn More</span>
                </button>
            </div>
            <div className="col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center ">
                <div>
                    <SkillCard  title="React" image="/images/react.svg" percent="90%"
                    />
                </div>
                <div>
                    <SkillCard title="CSS" image="/images/css.svg" percent="97%"
                    />
                </div>
                <div>
                    <SkillCard title="JavaScript" image="/images/js.svg" percent="90%"
                    />
                </div>
                <div>
                    <SkillCard title="TypeScript" image="/images/ts.svg" percent="90%"
                    />
                </div>
                <div>
                    <SkillCard title="HTML" image="/images/HTML.svg" percent="90%"
                    />
                </div>
                <div>
                    <SkillCard title="Node JS" image="/images/node.svg" percent="90%"
                    />
                </div>
                <div>
                    <SkillCard title="Mongo DB" image="/images/mongo.svg" percent="90%"
                    />
                </div>
                <div>
                    <SkillCard title="Python" image="/images/python.svg" percent="90%"
                    />
                </div>
            </div>
            </div>  
        </div>
    </div>
    );
};
export default Skills;