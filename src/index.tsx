import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { ErrorBoundary } from "./components/ErrorBoundary";
import { Routes } from "./components/Routes";
import * as serviceWorker from "./serviceWorker";

import { appTheme } from "./config/style-config";

import "./index.scss";

const theme = createMuiTheme(appTheme);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </MuiThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
