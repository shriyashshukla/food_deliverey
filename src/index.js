import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initalState";
import reducer from "./context/reducer";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <Router>
     <ParallaxProvider>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    </ParallaxProvider>
  </Router>,
  document.getElementById("root")
);
