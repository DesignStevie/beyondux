import React, { useState } from "react";
import "./Projects.css";
import ProjectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";

function Projects() {
  const [count, setCount] = useState(3);
  const projectsCount = ProjectData.length;

  return (
    <>
      <div className="workitems">
        {ProjectData.slice(0, count).map((project, key) => {
          return (
            <>
              {project.release ? (
                <Link
                  key={key}
                  className="workitem-container"
                  to={project.linkName}
                >
                  <img
                    className="project-image"
                    src={project.image}
                    alt="project"
                  />
                  <div className="workitem-content">
                    <h2 className="pageHeadingPurpleSmall">
                      {project.projectName}
                    </h2>
                    <p> {project.short_description}</p>
                  </div>
                </Link>
              ) : (
                <div className="comingSoonContainer">
                  <img
                    className="project-image"
                    src={project.image}
                    alt="project"
                  />
                  <div className="workitem-content">
                    <h2 className="primaryGreyColor">{project.projectName}</h2>
                    <p> {project.short_description}</p>
                    <p className="primaryColor">Coming Soon</p>
                  </div>
                </div>
              )}
            </>
          );
        })}
        {count < projectsCount && (
          <button
            onClick={() => setCount(count + 3)}
            className="viewMore roundbutton primaryButton"
          >
            View More
          </button>
        )}
      </div>
    </>
  );
}

export default Projects;
