// Using useState hook, that helps us to use features of Class without using class component
import React, { useState } from "react";

export default function TextForm(props) {
  // Converts Text to UpperCase
  const handleUpClick = () => {
    // console.log("Upper case was clicked");
    let ucText = text.toUpperCase();
    setText(ucText);
  };

  // Converts Text to LowerCase
  const handleLwClick = () => {
    // console.log("LowerCase was clicked");
    let lcText = text.toLowerCase();
    setText(lcText);
  };

  // Copies Text
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  // Removed Extra Spaces
  const handleSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // Clears Text
  const handleClearText = () => {
    let clrText = "";
    setText(clrText);
  };

  // Handling Event
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h3
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {props.heading}
        </h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "light" ? "white" : "#042743",
            }}
            id="myBox"
            onChange={handleOnChange}
            value={text}
            rows="10"
          ></textarea>
        </div>
      </div>
      <div className="container my-2 mx-2">
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLwClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpacesClick}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Text Summary</h3>
        <p>
          <strong>
            {" "}
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </strong>{" "}
          words and <strong>{text.length}</strong> characters
        </p>
        <p>
          <strong>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
          </strong>
          Minutes Spent
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "No Text To Preview"}</p>
      </div>
      <br></br>
    </>
  );
}
