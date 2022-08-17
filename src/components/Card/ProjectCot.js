import { Bedprojects} from "../Data/CotData";
import HospistalCotsCard from "./HospitalCotsCard";

function ProjectCot() {
  return (
    <div id="project" className=" scroll-mt-20 px-5 xl:px-0 bg-sky-100">
      <div className="container mx-auto pt-10 py-10 ">
        <h1 className=" flex justify-center text-2xl font-semibold text-sky-800 ">
          Consumables
        </h1>
      </div>
      <div className="container mx-auto  ">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
          {Bedprojects.map((project, index) => (
            <HospistalCotsCard
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

export default ProjectCot;
