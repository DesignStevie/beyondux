import React from "react";
import "./ProjectItems.css";
import ProjectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";

function ProjectItems() {
  return (
    <>
      {ProjectData.map((project, key) => {
        return (
          <div className="itemContainer">
            <div className="itemTitleContainer">
              <div className="itemTitle">
              <div className="itemNumber">0{key + 1}</div>
                <div className="title">{project.projectName}</div>
                <div className="description">{project.short_description}</div>
                {project.release ? (
                  <Link key={key} to={project.linkName} className="linkButton">
                    <div className="linkButtonContainer">
                      View Project
                      <div className="hoverBar"></div>
                    </div>
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.34853 6.99992L0.599268 2.25065C0.394923 2.04629 0.293957 1.8004 0.296368 1.51297C0.298779 1.22552 0.402162 0.979622 0.606517 0.775267C0.810862 0.570922 1.05833 0.46875 1.34892 0.46875C1.6395 0.46875 1.88696 0.570922 2.09132 0.775267L7.06667 5.74845C7.24397 5.92575 7.37537 6.12286 7.46087 6.33977C7.54638 6.55668 7.58913 6.77673 7.58913 6.99992C7.58913 7.22311 7.54638 7.44316 7.46087 7.66007C7.37537 7.87698 7.24397 8.07408 7.06667 8.25138L2.08407 13.234C1.87971 13.4383 1.63502 13.5377 1.35 13.5322C1.06498 13.5266 0.82029 13.4217 0.615934 13.2173C0.41159 13.013 0.309418 12.7655 0.309418 12.4749C0.309418 12.1843 0.41159 11.9369 0.615934 11.7325L5.34853 6.99992Z"
                        fill="#2F80ED"
                      />
                    </svg>
                  </Link>
                ) : (
                  <div className="comingSoon">COMING SOON</div>
                )}
              </div>
            </div>
            <div className="itemImageContainer">
              <Link key={key} to={project.release ? project.linkName : ""}>
                <img
                  className="mockup"
                  src={project.coverImage}
                  alt="Project"
                />
              </Link>
              {/* <img className="interface" src={project.interfaceImage} alt="Project" /> */}
              <div className="rotateContainer">
                <div className="projectNamePortrait">
                  {project.projectName.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectItems;
