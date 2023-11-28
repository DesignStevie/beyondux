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
      <div className="homeBG">
        <div className="homeHeader">
          <div className="headerContainer">
            <div className="headerName">Hello, I'm Steven.</div>
            <div className="headerRole">
              I’m a passionate UX/UI Designer who loves to craft beautiful yet
              meaningful experiences.
            </div>
          </div>
          <hr className="line" />
          <div className="headerAbout">
            With over two years in the industry designing new products and
            improving existing ones by crafting stunning experiences that are
            engaging, intuitive , and user-centric.
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
