import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
}

body::-webkit-scrollbar {
  width: 12px;               /* ширина scrollbar */
}
body::-webkit-scrollbar-track {
  background: #fff;        /* цвет дорожки */
}
body::-webkit-scrollbar-thumb {
  background-color: #699BF7;    /* цвет плашки */
  border-radius: 20px;       /* закругления плашки */
  border: 3px solid #fff;  /* padding вокруг плашки */
}

a, u {
  color: rgba(0, 0, 0);
  text-decoration: none;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </>
);
