import { React, useEffect } from "react";
import "./Project.css";
import { useParams, Link, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import projectData from "../Data/ProjectData";

function Project(myProjectData) {
  const projectNameFromUrl = useParams().project;
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [pathname]);

  const [displayProject] = projectData.filter((projectObj) => {
    return "/" + projectNameFromUrl === projectObj.linkName;
  });
  return (
    <>
      <div className="page-container">
        <div className="greyBackground">
          <div className="containerPlain">
            {/* PROJECT --- HEADING */}
            <h1 className="pageHeadingPurple">{displayProject.projectName}</h1>
            <div className="headerImage">
              <img src={displayProject.headerImage} alt="Final Solution" />
            </div>
            <div className="projectDetailsContainer">
              <div className="projectIntroductionText">
                {displayProject.problem}
              </div>
              <div className="projectDetails">
                <div className="details">
                  <h4>COMPANY</h4>
                  <p>{displayProject.company}</p>
                </div>
                <div className="details">
                  <h4>SQUAD</h4>
                  <p>{displayProject.squad}</p>
                </div>
                <div className="details">
                  <h4>TIMEFRAME</h4>
                  <p>{displayProject.timeframe}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT --- UNDERSTAND */}
        <div className="containerPlain">
          <div className="process-header">
            <h3 className="processName">Discover</h3>
          </div>
          <div className="process-container">
            <div className="process-text">{displayProject.understand}</div>
          </div>
        </div>
        {displayProject.empathiseImage && (
          <div className="greyBackground">
            <div className="processImage">
              <img src={displayProject.empathiseImage} alt="Final Solution" />
            </div>
          </div>
        )}

        {/* PROJECT --- RESEARCH */}
        <div className="containerPlain">
          <div className="process-header">
            <h3 className="processName">Define</h3>
          </div>
          <div className="process-container">
            <div className="process-text">{displayProject.research}</div>
            <div className="process-image"></div>
          </div>
        </div>
        {displayProject.researchImage && (
          <div className="greyBackground">
            <div className="processImage">
              <img src={displayProject.researchImage} alt="Final Solution" />
            </div>
          </div>
        )}
        {/* PROJECT --- IDEATE */}
        <div className="containerPlain">
          <div className="process-header">
            <h3 className="processName">Ideate</h3>
          </div>
          <div className="process-container">
            <div className="process-text">{displayProject.ideate}</div>
            <div className="process-image"></div>
          </div>
        </div>
        {displayProject.ideateImage && (
          <div className="greyBackground">
            <div className="processImage">
              <img src={displayProject.ideateImage} alt="Final Solution" />
            </div>
          </div>
        )}
        {/* PROJECT --- PROTOTYPE */}
        <div className="containerPlain">
          <div className="process-header">
            <h3 className="processName">Prototype</h3>
          </div>
          <div className="process-container">
            <div className="process-text">{displayProject.prototype}</div>
            <div className="process-image"></div>
          </div>
        </div>
        {displayProject.prototypeImage && (
          <div className="greyBackground">
            <div className="processImage">
              <img src={displayProject.prototypeImage} alt="Final Solution" />
            </div>
          </div>
        )}
        {/* PROJECT --- VALIDATE */}
        <div className="containerPlain">
          <div className="process-header">
            <h3 className="processName">Deliver</h3>
          </div>
          <div className="process-container">
            <div className="process-text">{displayProject.validate}</div>
            <div className="process-image"></div>
          </div>
        </div>
        {/* PROJECT --- FINAL SOLUTION */}
        <div className="greyBackground">
          <div className="process-image">
            <img
              src={displayProject.finalSolutionImage}
              alt="Final_solution_image"
            />
          </div>
        </div>
        <div className="containerPlain">
          <div className="workitems">
            {projectData
              .filter((projectData) => projectData.id !== displayProject.id)
              .map((project, key) => {
                return (
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
                        {" "}
                        {project.projectName}
                      </h2>
                      <p> {project.short_description}</p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;