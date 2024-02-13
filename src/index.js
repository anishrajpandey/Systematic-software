import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import About from "./About";
import Career from "./Career";
import CoCreate from "./CoCreate";
import Contact from "./Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route Component={App} exact path="/" />

        <Route Component={About} path="/services" />

        <Route Component={Career} path="/career" />

        <Route Component={About} path="/about" />

        <Route Component={CoCreate} path="/cocreate" />

        <Route Component={Contact} path="/contact" />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// services
// career and internshios
// about us
// cocreate with us
// contact us
