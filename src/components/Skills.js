import React from 'react';
import ReactIcon from '../views/React SVG from SVG Repo.svg';
import Javascript from '../views/Javascript SVGRepo.svg';
import Tailwind from "../views/Tailwind icon.svg";
import NestJS from "../views/Nestjs icon.svg";
import HTMLandCSS from "../views/HTML CSS Logo.png"
import Git from '../views/Git icon.svg';
import VideoEditing from '../views/Video Editing.svg';
import Presentation from "../views/Presentation Chart Graph.svg";
import MarketAnalysis from "../views/Market Analysis Icon.svg";

const SkillItem = ({ icon, name }) => (
    <div className="flex flex-col items-center p-4">
      <div className="p-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shadow-lg rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-150">
        <img src={icon} alt={name} className="w-2/3 h-2/3 object-contain" />
      </div>
      <h6 className="text-sm sm:text-base md:text-lg mt-3 font-semibold text-white text-center">
        {name}
      </h6>
    </div>
  );
  
const skillsData = [
    { icon: ReactIcon, name: "React.js" },
    { icon: Javascript, name: "Javascript" },
    { icon: Tailwind, name: "TailwindCSS" },
    { icon: NestJS, name: "NestJS" },
    { icon: HTMLandCSS, name: "HTML5 & CSS3" },
    { icon: Git, name: "Git" },
    { icon: VideoEditing, name: "Video Editing" },
    { icon: Presentation, name: "Presentations" },
    { icon: MarketAnalysis, name: "Market Analysis" }
];
  
const SkillsSection = () => (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillItem
              key={index}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
);
  
export default SkillsSection;
