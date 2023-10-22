import React, { useState } from 'react'

function TextForm(props) {

  const ClickToUppercase = () => {
    console.log("clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");

  }
  const ClickToLowercase = () => {
    console.log("clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");

  }
  const ClickToClearText = () => {
    setText("");
    props.showAlert("ClickToClearText Alert", "success");

  }
  const handleTextForm = (event) => {
    console.log("handleTextForm" + text);
    setText(event.target.value);
  }
  
  const [text, setText] = useState("");
  return (
    <>
      <div className="TextForm-inner">
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
          <h1 style={{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
          <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleTextForm} value={text} rows={4} cols={100} />
          <button className="TextForm-btn btn btn-primary mx-1" style={{backgroundColor: props.mode === 'green'?'white':'green'}} onClick={ClickToUppercase}>Click to Uppercase</button>
          <button className="TextForm-btn btn btn-primary mx-1" style={{backgroundColor: props.mode === 'green'?'white':'green'}} onClick={ClickToLowercase}>Click to Lowercase</button>
          <button className="TextForm-btn btn btn-primary mx-1" style={{backgroundColor: props.mode === 'green'?'white':'green'}} onClick={ClickToClearText}>Clear Text</button>
        </div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
          <p>Text Summary:</p>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{text.trim() === "" ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>
          <h2>Preview content:</h2>
          <p>{text.length>0?text:"Enter something in the above textbox"}</p>
        </div>
      </div>
    </>
  )
}

export default TextForm;
