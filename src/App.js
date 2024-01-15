import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="QwikText - Text Editor" home="Home" about="About Us" />
      {/* <Navbar /> */}
      <div className="container">
        <TextForm heading="Enter the Text to Analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
