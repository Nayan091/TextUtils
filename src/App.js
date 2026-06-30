// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import Menu from './components/Menu';
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btnText, setBtnText] = useState("Enable DARK Mode");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setBtnText("Enable light Mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      setBtnText("Enable dark Mode");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          about="about textuitls"
          mode={Mode}
          toggleMode={toggleMode}
          btnText={btnText}
        ></Navbar>
        <Alert alert={alert} />
        {/* <div className="container"> */}

          {/* <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
              path="/"
              element={ */}
                <TextForm
                  heading="Enter text to analyse"
                  mode={Mode}
                  showAlert={showAlert}
                />
              {/* }
            />
          </Routes> */}

          {/* <About /> */}
        {/* </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;
