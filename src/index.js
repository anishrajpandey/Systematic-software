import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import CoCreate from "./pages/CoCreate/CoCreate";
import Contact from "./pages/Contact/Contact";
import Career from "./pages/Career/Career";
import Services from "./pages/Services/Services";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route Component={App} exact path="/" />

        <Route Component={Services} path="/services" />

        <Route Component={Career} path="/career" />

        <Route Component={About} path="/about" />

        <Route Component={CoCreate} path="/cocreate" />

        <Route Component={Contact} path="/contact" />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

// services
// career and internshios
// about us
// cocreate with us
// contact us
