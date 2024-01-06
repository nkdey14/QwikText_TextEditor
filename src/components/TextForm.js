import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked");
    let ucText = text.toUpperCase();
    setText(ucText);
  };

  const handleLwClick = () => {
    // console.log("LowerCase was clicked");
    let lcText = text.toLowerCase();
    setText(lcText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          onChange={handleOnChange}
          value={text}
          rows="10"
        ></textarea>
      </div>
      <div className="container my-2 mx-2">
        <button className="btn btn-primary" onClick={handleUpClick} mx-2>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary" onClick={handleLwClick} mx-2>
          Convert to LowerCase
        </button>
      </div>
    </div>
  );
}
