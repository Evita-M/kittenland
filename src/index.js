import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.scss";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { StorageProvider } from "./context/StorageContext";

ReactDOM.render(
  <React.Fragment>
    <StorageProvider>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </StorageProvider>
  </React.Fragment>,
  document.getElementById("root")
);
