import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import { AuthContextProvider } from "./contexts/AuthContextProvider";
import App from "./App";

// if (process.env.NODE_ENV === "production") {
//   disableReactDevTools();
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
