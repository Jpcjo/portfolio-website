import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";

import React from "react";
import SectionTile from "../components/SectionTile";

const Projects = () => {
  return (
    <section
      className="pt-28 pb-20 align-element md:px-20 md:pt-20"
      id="projects"
    >
      <SectionTile text="Web Projects" />
      <div className="py-16 grid  md:grid-cols-2 gap-12 ">
        {projects.map((project, index) => {
          return <ProjectsCard key={project.id} index={index} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
