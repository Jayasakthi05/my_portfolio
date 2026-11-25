
function ProjectCard( {card} ) {

  return (

    <div className="projectcard">

      <h2>{card.title}</h2>

      <p>{card.description}</p>

    </div>

  );
}

export default ProjectCard;
