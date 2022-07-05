import React from "react";

function ProjectItem({ id, name, about, technologies }) {
  console.log(id);
  return (
    <div key={id} className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((item, index) => {return <span key={id+index}>{item}</span>})}
      </div>
    </div>
  );
}

export default ProjectItem;
