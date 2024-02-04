import React from "react";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import ProjectItems from "../Components/ProjectItem/ProjectItems";
import Nav from "../Components/Nav/Nav";
import homePageImage from "../Images/homePageImage.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      {/* NAV */}

      <Nav />

      {/* HOME --- HEADER*/}
      <div className="homeBG">
        <div className="homeContainer">
          <div className="homeHeader">
            <div className="headerContainer">
              <div className="headerHello">Hello, I'm</div>
              <div className="headerName">Steven Odendaal</div>
              <hr className="line" />
              <div className="headerAbout">
                With more than two years of experience as a UX/UI designer, my expertise lies in creating captivating,
                user-friendly, and intuitively designed experiences that prioritize the user at the center.
              </div>
              <NavLink className="buttonAboutMe" to="/aboutme">
                <button className="roundButton buttonSecondary">
                  Read more
                </button>
              </NavLink>
            </div>
          </div>
          <div className="imageContainer">
            <div className="homeImage">
              <img src={homePageImage} alt="BGImage" />
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
