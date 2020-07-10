import React from "react";
import ReactDOM from "react-dom";

import CodeInput from "./CodeInput";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CodeInput length={5} />
  </React.StrictMode>,
  rootElement
);
