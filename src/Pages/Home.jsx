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
                With over two years experience as a UX/UI designer building new
                products and improving existing ones by crafting stunning
                experiences that are engaging, intuitive , and user-centric.
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
