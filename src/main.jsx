import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "../context/AuthContext.jsx";
import { CustomProvider } from "rsuite";
import { RecoilRoot } from "recoil"; // Import RecoilRoot

import "rsuite/dist/rsuite.min.css";
import "./index.css";
import Sidebar from "../components/myspace/Sidebar.jsx";
import { SocketContextProvider } from "../context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <RecoilRoot>
          {/* <CustomProvider> */}
          <SocketContextProvider>
            <App />
          </SocketContextProvider>
          {/* </CustomProvider> */}
        </RecoilRoot>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
