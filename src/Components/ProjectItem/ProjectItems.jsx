import React from "react";
import "./ProjectItems.css";
import ProjectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";

function ProjectItems() {
  return (
    <>
      {ProjectData.map((project, key) => {
        return (
          <div
            className={
              (key + 1) % 2 === 1
                ? "itemContainer blackGradient"
                : "itemContainer greyGradient"
            }
          >
            <div className="itemContainerConstraint">
              <div
                className={
                  (key + 1) % 2 === 1
                    ? "itemTitleContainer titleWhite"
                    : "itemTitleContainer titleBlack"
                }
              >
                <div className="itemTitle">
                  <div className="itemNumber">0{key + 1}</div>
                  <div className="title">{project.cover.name}</div>
                  <div className="description">{project.cover.description}</div>
                  {project.release ? (
                    <Link
                      key={key}
                      to={project.cover.link}
                      className="linkButton"
                    >
                      <div className="roundButton buttonPrimaryIcon">
                        <span>View Project</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_2902_283"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_2902_283)">
                            <path
                              d="M12.6 12.0008L8.69999 8.10078C8.51665 7.91745 8.42499 7.68411 8.42499 7.40078C8.42499 7.11745 8.51665 6.88411 8.69999 6.70078C8.88332 6.51745 9.11665 6.42578 9.39999 6.42578C9.68332 6.42578 9.91665 6.51745 10.1 6.70078L14.7 11.3008C14.8 11.4008 14.8708 11.5091 14.9125 11.6258C14.9542 11.7424 14.975 11.8674 14.975 12.0008C14.975 12.1341 14.9542 12.2591 14.9125 12.3758C14.8708 12.4924 14.8 12.6008 14.7 12.7008L10.1 17.3008C9.91665 17.4841 9.68332 17.5758 9.39999 17.5758C9.11665 17.5758 8.88332 17.4841 8.69999 17.3008C8.51665 17.1174 8.42499 16.8841 8.42499 16.6008C8.42499 16.3174 8.51665 16.0841 8.69999 15.9008L12.6 12.0008Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </div>
                    </Link>
                  ) : (
                    <div className="comingSoon">COMING SOON</div>
                  )}
                </div>
              </div>
              <div
                className={
                  (key + 1) % 2 === 1
                    ? "itemImageContainer imageLeft"
                    : "itemImageContainer imageRight"
                }
              >
                <Link key={key} to={project.release ? project.cover.link : ""}>
                  <img
                    className="mockup"
                    src={project.cover.showcase}
                    alt="Project"
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectItems;
