import React from "react";
import ReactDOM from "react-dom/client";

// JSX - to know more see README file

const title= (
  <h1  className="head">
    Namaste React using JSX 🚀
  </h1>
);

//React Functional Component

//Component Composition : Composing two components into one another
const HeadingComponent = () => (
  <div id="container">
     {title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
