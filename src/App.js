import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TextArea from "./components/TextArea";
import About from "./components/About";
import Contact from "./components/Contact";
import UseCases from "./components/UseCases";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.classList.add('dark-mode');
      showAlert("Dark Mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.classList.remove('dark-mode');
      showAlert("Dark Mode has been disabled.", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar title="TextMaster" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} mode={mode} />
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <TextArea
                showAlert={showAlert}
                heading="TextMaster : A Text-Based Utility"
                mode={mode}
              />
            </Route>
            <Route exact path="/use-cases">
              <UseCases mode={mode} />
            </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/contact">
              <Contact mode={mode} />
            </Route>
          </Switch>
        </div>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
