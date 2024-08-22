import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object =>HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);

//JSX - JSX is a javascript syntax (HTML -Like or XML-Like syntax)

//JSX => create.ReactElement => ReactElement (JS Object) => HTMLElement(render)

//JSX code is transpiled before it reaches the JS Engine (Transpiling is done by "Parcel"{It uses one of its package for transpiling} i.e BABLE)
const jsxheading = <h1 id ="heading">"Namaste React using JSX 🚀"</h1> 

console.log(jsxheading);
// the console.log(heading) & console.log(jsxheading) is one of the samething both are JavaScripts objects 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
