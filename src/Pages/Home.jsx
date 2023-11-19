import React from "react";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import ProjectItems from "../Components/ProjectItem/ProjectItems";
import Nav from "../Components/Nav/Nav";
import homeBG from "../Images/homeBG.png";

function Home() {
  return (
    <>
      {/* NAV */}

      <Nav />

      {/* HOME --- HEADER*/}
      <div className="homeBG">
        <img src={homeBG} />
        <div className="homeHeader">
          <div className="homeHeadingText">
            <div className="headerContainer">
              <div className="headerName">Hey, I'm Steven.</div>
              <div className="headerRole">I'm a UX/UI Designer.</div>
            </div>
            <div className="headerAbout">
              I'm passionate about crafting beautiful experiences that are
              engaging, intuitive, and user-centric.
            </div>
          </div>
        </div>
      </div>

      {/* HOME --- PROJECTS */}

      <ProjectItems />
      <Footer />
    </>
  );
}

export default Home;
