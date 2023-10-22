// import AboutUs from './AboutUs';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Cards from './components/Cards';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");

      // How to update titles in a seconds
      // document.title = "Title:Dark mode enabled";
      // setInterval(() => {
      //   document.title = "Learn React";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "React is Amazing!!!";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    }
  }
  return (
    <>
    <div className="container">
    {/* <BrowserRouter> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Routes> */}
          {/* <Route path="/cards" element={<Cards imgSrc="https://www.w3schools.com/html/pic_trulli.jpg" desc="This is a paragraph. 1"/>}>
          </Route> */}
        {/* <Cards imgSrc="https://www.w3schools.com/html/pic_trulli.jpg" desc="This is a paragraph. 1"/> */}
        <TextForm showAlert={showAlert} heading="Enter text here:" mode={mode}/>
        {/* <Route path="/about" element={<AboutUs/>}>
        </Route> */}
        {/* <AboutUs/> */}
        {/* </Routes> 
      </BrowserRouter> */}
    </div>
    </>
  );
}

export default App;
