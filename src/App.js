import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="QwikText - Text Editor"
        home="Home"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar /> */}
      <div className="container">
        <TextForm heading="Enter the Text to Analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
