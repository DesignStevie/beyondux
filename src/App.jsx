import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import projectData from "./Data/ProjectData";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route
          path="/:project"
          element={<Project projectData={projectData} />}
        />
      </Routes>
    </>
  );
}

export default App;
