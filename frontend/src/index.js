import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
}
`;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global/>
    <App />
  </>
);
