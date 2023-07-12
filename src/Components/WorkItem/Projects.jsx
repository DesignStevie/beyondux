import React from "react";
import "./Projects.css";
import ProjectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="workitems">
      {ProjectData.map((project, key) => {
        return (
          <Link
            key={key}
            className="workitem-container"
            to={project.linkName}
          >
            <img className="project-image" src={project.image} alt="project" />
            <div className="workitem-content">
              <h2 className="pageHeadingPurpleSmall"> {project.projectName}</h2>
              <p> {project.short_description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Projects;
