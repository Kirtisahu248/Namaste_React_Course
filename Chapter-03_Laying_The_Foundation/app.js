import React from "react";
import ReactDOM from "react-dom/client";

//JSX - its like HTML Syntax
const jsxheading = <h1 id="heading">Namaste React🚀</h1>;
console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);