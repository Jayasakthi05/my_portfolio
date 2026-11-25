
import ProjectCard from "../components/ProjectCard";

function Project() {
  const project = [
    {
      id: 1,
      title: "Hostel Hub",
      description: "A Python-based hostel management project."
    },
    {
      id: 2,
      title: "ChimeraGen",
      description: "A synthetic data augmentation platform."
    },
    {
      id: 3,
      title: "BioCrypt-ROI",
      description: "An MRI image protection project using visual cryptography."
    }
  ];

  return (
    <div className="project">
      <h1>My Projects</h1>
     

      <div className="project-container">
        {project.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Project;
                