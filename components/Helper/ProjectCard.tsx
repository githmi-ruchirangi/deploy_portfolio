import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  tech1?: string;  
  tech2?: string;  
  tech3?: string;  
  tech4?: string;  
  dec: string;
}

const ProjectCard = ({ image, tech1, tech2, tech3, tech4, title, dec }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-x-full');
          entry.target.classList.add('opacity-100', 'translate-x-0');
        }
      });
    });

    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, []);

  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div
        ref={cardRef}
        className="p-4 rounded-xl relative opacity-0 translate-x-full transition-all duration-500 ease-in-out bg-gray-800 shadow-md"
      >
        <Image src={image} alt={title} width={500} height={500} className="object-contain rounded-xl mx-auto shadow-md" />
      </div>
      <div>
        <h1 className="text-[25px] text-white">{title}</h1>
        <p className="text-white opacity-65 text-[15px] mt-[1rem] text-justify">{dec}</p>

        <div className="mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
          {tech1 && <h1 className="px-6 py-1 bg-blue-700 text-white rounded-lg text-center text-xs">{tech1}</h1>}
          {tech2 && <h1 className="px-6 py-1 bg-white text-black rounded-lg text-center text-xs">{tech2}</h1>}
          {tech3 && <h1 className="px-6 py-1 bg-sky-500 text-black rounded-lg text-center text-xs">{tech3}</h1>}
          {tech4 && <h1 className="px-6 py-1 bg-blue-800 text-white rounded-lg text-center text-xs">{tech4}</h1>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
