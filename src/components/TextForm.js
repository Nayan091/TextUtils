import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    // console.log("Uppercase is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLowClick = () => {
    // console.log("Lowercase is clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    // console.log("Clear is clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text copied to clipboard!", "success");
  }

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  const handleOnChange = (event) => {
    // console.log("Uppercase is clicked")
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("nayan");

  return (
    <>
      <div className="container" style={{color: props.mode === 'light' ? '#000000' : '#ffffff'}}>
        <h2>{props.heading} </h2>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="11"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'light' ? '#ffffff' : '#343a40', color: props.mode === 'light' ? '#000000' : '#ffffff' }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={copyText}>
          copy Text
        </button>
        <button className="btn btn-primary" onClick={removeExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2" style={{color: props.mode === 'light' ? '#000000' : '#ffffff'}}>
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{ 0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox to preview"}</p>
      </div>
    </>
  );
}