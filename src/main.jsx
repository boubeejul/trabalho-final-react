import React from "react";
import ReactDOM from "react-dom/client";
import { AllRoutes } from "./Routes/AllRoutes";
import { GlobalStyle } from "./global/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AllRoutes />
    <GlobalStyle />
  </>
);
