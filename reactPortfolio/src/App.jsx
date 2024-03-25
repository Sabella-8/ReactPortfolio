import React, { useState } from "react";
import Insta from "./imagesO.png";
import Twits from "./imagesT.png";
import Git from "./github.png";
import Link from "./download.png";
import Face from "./images.png";

import "./App.css";
import Header from "./HeaderPart/Header";
import BodyOne from "./BodyOne/BodyOne";
import Footer from "./Footer/Footer";
import Project from "./Project/Project";
import Resume from "./Resume/Resume";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen ? null : (
        <Routes>
          <Route path="/" element={<BodyOne />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      )}
      <Footer Insta={Insta} Twits={Twits} Git={Git} Link={Link} Face={Face} />
    </div>
  );
}

export default App;
