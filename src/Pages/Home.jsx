import React from "react";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import ProjectItems from "../Components/ProjectItem/ProjectItems";
import Nav from "../Components/Nav/Nav";

function Home() {
  return (
    <>
      {/* NAV */}

      <Nav />

      {/* HOME --- HEADER*/}
      <div className="homeHeader">
        <div className="homeHeadingText">
          <div className="headerContainer">
            <div className="headerName">Hi. I'm Steven.</div>
            <div className="headerRole">I'm a UX/UI Designer.</div>
          </div>
          <div className="headerAbout">I'm passionate about crafting beautiful experiences that are engaging, intuitive, and user-centric.</div>
        </div>
      </div>

      {/* HOME --- PROJECTS */}

      <ProjectItems />

      {/* HOME --- ABOUT ME */}
      {/* <div className="colouredBackground">
        <div className="containerPlain">
          <div className="sectionHeading">
            <h2>Me and my career</h2>
          </div>
          <div className="aboutMeContainer">
            <div className="paragraphContent">
              <p>
                I am a UX/UI designer with a passion for creating engaging and
                intuitive digital experiences as well as pursuing a side passion
                for front end development.
              </p>
              <p>
                Over the past 2 years, I’ve honed my skills in facilitating
                design sprint workshops, user research, information
                architecture, wireframing, prototyping, and visual design, using
                tools such as Figma, Adobe Creative Suite, and VS Code.
              </p>
              <p>
                When im not designing, you can find me creating digital art,
                designing tattoos, playing online games, getting out and
                exploring new parts of New Zealand, and many more fun
                activities. These experiences have taught me to be curious,
                creative, and adaptive, traits that I bring to my work as a
                UX/UI designer.
              </p>
            </div>
            <img className="profileImage" src={MyImage} alt="face" />
          </div>
          <svg
            className="aboutDots"
            width="240"
            height="144"
            viewBox="0 0 240 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 16 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 144 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 80 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 208 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 48 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 176 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 112 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 240 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 16 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 144 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 80 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 208 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 48 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 176 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 112 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 240 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 16 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 144 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 80 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 208 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 48 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 176 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 112 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 240 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 16 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 144 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 80 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 208 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 48 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 176 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 112 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 240 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 16 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 144 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 80 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 208 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 48 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 176 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 112 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 240 64)"
              fill="white"
              fillOpacity="0.25"
            />
          </svg>
        </div>
        <img
          className="aboutBackgroundImage"
          src={aboutBackgroundImage}
          alt="face"
        />
      </div> */}

      <Footer />
    </>
  );
}

export default Home;
