import { projects } from "../Data/index";
import ConsumablesCard from "./ConsumablesCard";

function Projects() {
  return (
    <div id="project" className=" text-black scroll-mt-20 px-5 xl:px-0">
      <div className="container mx-auto  ">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
          {projects.map((project, index) => (
            <ConsumablesCard
              key={index}
              project={project}
              ltr={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
