import { FaGithubSquare } from "react-icons/fa";

import React from "react";

const ProjectsCard = ({
  url,
  img,
  github,
  title,
  text,
  tools,
  highlights,
  index,
}) => {
  return (
    <article className="bg-gradient-to-r  overflow-hidden from-green-50 to-indigo-50 rounded-lg shadow-md hover:shadow-xl ">
      <a href={url} target="_blank">
        <img
          src={img}
          alt={title}
          className="w-full object-cover object-top rounded-t-lg h-64 hover:scale-105 duration-300 "
        />
      </a>

      <div className=" p-8 ">
        <div className="flex flex-row justify-between mb-8">
          <h2 className="text-xl tracking-wide font-medium capitalize mb-6 ">
            {title}
          </h2>
          <div className=" flex gap-x-4">
            <a href={github} target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-400 hover:text-gray-800 hover:scale-110 duration-300" />
            </a>
          </div>
        </div>

        <div className="flex flex-col  lg:flex-row lg:space-x-2 mt-2 capitalize ">
          <h3 className="  text-slate-700 font-semibold mr-7">Tools:</h3>
          <p className="  text-slate-700 leading-relaxed "> {tools}</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-2 mt-2">
          <h3 className="  text-slate-700 font-semibold mr-[22px]">Focus:</h3>
          <p className="  text-slate-700 leading-relaxed"> {text}</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-2 mt-2">
          <h3
            className={`text-slate-700 font-semibold ${
              index === 3 && "whitespace-nowrap"
            }`}
          >
            {index === 3 ? "Add-ons: " : "Features:"}
          </h3>
          <p className="  text-slate-700 leading-relaxed capitalize">
            {highlights}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
