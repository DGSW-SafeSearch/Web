import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import "./util/style/index.css";
import { ThemeProvider } from "styled-components";
import { themeColor } from "./util/style/theme";
import { Provider } from "jotai";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={themeColor}>
    <Provider>
      <Main />
    </Provider>
  </ThemeProvider>
);
