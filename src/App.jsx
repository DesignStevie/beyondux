import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import projectData from "./Data/ProjectData";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:project"
          element={<Project projectData={projectData} />}
        />
      </Routes>
    </>
  );
}

export default App;
