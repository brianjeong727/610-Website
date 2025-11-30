import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import About from "./components/About";
import ReflectiveEssay from "./components/ReflectiveEssay";
import AIUse from "./components/AIUse";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Project1 />
      <Project2 />
      <About />
      <ReflectiveEssay />
      <AIUse />
    </>
  );
}

export default App;
