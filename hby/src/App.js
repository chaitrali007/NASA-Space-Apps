import './App.css';
import Home from './Home';
import Carousel from "./Carousel";
import Know from "./KM";
import Navbar from './Navbar';


import React from "react";
// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsPage from './ProjectsPage';
import ProjectDetail from './ProjectDetail';
import CPP from './CCP';

// pages

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/know" element={<Know />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/project" element={<ProjectDetail />}></Route>
        <Route path="/cpp" element={<CPP />}></Route>

        {/* <Route path="/people">
          <People />
        </Route> */}
        {/* <Route path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error />
        </Route> */}
      </Routes>
    </Router>
  );
};

export default App;