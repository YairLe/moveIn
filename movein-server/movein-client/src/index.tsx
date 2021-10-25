import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom";
//@ts-ignore
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RequirementsProvider } from "./context/RequirementsContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <RequirementsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RequirementsProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

serviceWorkerRegistration.register();
