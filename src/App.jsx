import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Skillcard from "./components/Skillcard";
import Home from "./pages/Home";

import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Skill from "./pages/Skill";

function App() {
  return (
   
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/project" element={<Project/>} />    
        <Route path="/contact" element={<Contact/>} />    
      </Routes>
    </div>
    
  );
}

export default App;