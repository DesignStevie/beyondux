import { React, useEffect } from "react";
import "./Project.css";
import { useParams, Link, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import projectData from "../Data/ProjectData";

function Project(myProjectData) {
  //useParams
  const projectNameFromUrl = useParams().project;

  //UseLocation
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  const [displayProject] = projectData.filter((projectObj) => {
    return "/" + projectNameFromUrl === projectObj.cover.link;
  });
  return (
    <>
      <div className="navContainer">
        <Link to={"/"} className="homeButton">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2066_316"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2066_316)">
              <path
                d="M7.8248 12.9998L12.7248 17.8998C12.9248 18.0998 13.0206 18.3331 13.0123 18.5998C13.004 18.8665 12.8998 19.0998 12.6998 19.2998C12.4998 19.4831 12.2665 19.579 11.9998 19.5873C11.7331 19.5956 11.4998 19.4998 11.2998 19.2998L4.6998 12.6998C4.5998 12.5998 4.52897 12.4915 4.4873 12.3748C4.44564 12.2581 4.4248 12.1331 4.4248 11.9998C4.4248 11.8665 4.44564 11.7415 4.4873 11.6248C4.52897 11.5081 4.5998 11.3998 4.6998 11.2998L11.2998 4.6998C11.4831 4.51647 11.7123 4.4248 11.9873 4.4248C12.2623 4.4248 12.4998 4.51647 12.6998 4.6998C12.8998 4.8998 12.9998 5.1373 12.9998 5.4123C12.9998 5.6873 12.8998 5.9248 12.6998 6.1248L7.8248 10.9998H18.9998C19.2831 10.9998 19.5206 11.0956 19.7123 11.2873C19.904 11.479 19.9998 11.7165 19.9998 11.9998C19.9998 12.2831 19.904 12.5206 19.7123 12.7123C19.5206 12.904 19.2831 12.9998 18.9998 12.9998H7.8248Z"
                fill="white"
              />
            </g>
          </svg>
          Back
        </Link>
      </div>
      <div className="whiteBackground">
        {/* PROJECT --- HEADER */}
        <div className="containerPlain">
          <h2 className="projectHeading">{displayProject.header.name}</h2>
          <div className="projectDetailsContainer">
            <div className="projectDetails">
              <div className="details">
                <h4>Company</h4>
                <p>{displayProject.header.company}</p>
              </div>
              <div className="details">
                <h4>Team</h4>
                <ul>
                  {displayProject.header.team.map((team, key) => {
                    return <li>{team}</li>;
                  })}
                </ul>
              </div>
              <div className="details">
                <h4>Assumed Roles</h4>
                <ul>
                  <li>Product Designer</li>
                  <li>User Experience (UX) Designer</li>
                  <li>User Interface (UI) Designer</li>
                  <li>Workshop Facilitator </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="headerImage">
            <img src={displayProject.header.showcase} alt="Final Solution" />
          </div>
        </div>
        {/* PROJECT --- UNDERSTAND */}
        <div className="greyBackground">
          <div className="containerPlain">
            <div className="projectProcessContainer">
              <h2 className="processHeader">Understand</h2>
              <h3 className="processSubHeader">Context</h3>
              <div className="processText">
                {displayProject.understand.context}
              </div>
              <h3 className="processSubHeader">Discovery</h3>
              <div className="processText">
                {displayProject.understand.discovery}
              </div>
              {displayProject.understand.extra.valid && (
                <>
                  <h3 className="processSubHeader">
                    {displayProject.understand.extra.heading}
                  </h3>
                  <div className="processText">
                    {displayProject.understand.extra.text.map((txt, key) => {
                      return (
                        <>
                          {txt.tag === "p" && <p>{txt.text}</p>}
                          {txt.tag === "ul" && (
                            <ul>
                              {txt.text.flatMap((txt, key) => {
                                return <li>{txt}</li>;
                              })}
                            </ul>
                          )}
                        </>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {displayProject.understand.showcase && (
          <div className="processImage">
            <img
              src={displayProject.understand.showcase}
              alt="Final Solution"
            />
          </div>
        )}

        {/* PROJECT --- RESEARCH */}
        <div className="greyBackground">
          <div className="containerPlain">
            <div className="projectProcessContainer">
              <h3 className="processHeader">Research</h3>
              <div className="processText">{displayProject.research}</div>
            </div>
          </div>
        </div>
        {displayProject.researchImage && (
          <div className="processImage">
            <img src={displayProject.researchImage} alt="Final Solution" />
          </div>
        )}
        {/* PROJECT --- IDEATE */}
        <div className="greyBackground">
          <div className="containerPlain">
            <div className="projectProcessContainer">
              <h3 className="processHeader">Ideate</h3>
              <div className="processText">{displayProject.ideate}</div>
            </div>
          </div>
        </div>
        {displayProject.ideateImage && (
          <div className="processImage">
            <img src={displayProject.ideateImage} alt="Final Solution" />
          </div>
        )}
        {/* PROJECT --- VALIDATE */}
        <div className="greyBackground">
          <div className="containerPlain">
            <div className="projectProcessContainer">
              <h2 className="processHeader">Validate</h2>
              <h3 className="processSubHeader">Prototyping</h3>
              <div className="processText">
                {displayProject.validate.prototyping}
              </div>
              <h3 className="processSubHeader">User Testing</h3>
              <div className="processText">
                {displayProject.validate.testing}
              </div>
            </div>
          </div>

          {displayProject.validate.showcase && (
            <div className="processImage">
              <img src={displayProject.validate.showcase} alt="Final Solution" />
            </div>
          )}
          {/* PROJECT --- FINAL SOLUTION */}
          {displayProject.finalSolutionImage && (
            <div className="processImage">
              <img
                src={displayProject.finalSolutionImage}
                alt="Final Solution"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
