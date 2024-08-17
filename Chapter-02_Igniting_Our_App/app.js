
/* nested Element  example 
*  <div id:"parent">
*    <div id:"child">
*       <h1>I am an h1 tag</h1>
*       <h2>I am an h2 tag</h2>  // sibling
*      </div>
*
*      <div id:"child2">
*       <h1>I am an h1 tag</h1>
*       <h2>I am an h2 tag</h2>  // sibling
*      </div>
*  </div>
*   ReactElement(Object) => HTML(browser understand)
*/

//Lets create nested element in react
const parent = React.createElement
    ( "div",
      { id: "parent" },
      [React.createElement("div", { id: "child" },[ 
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
        ]),
        React.createElement("div", { id: "child2" },[ 
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
            ])
        ]
    );
//const heading = React.createElement
    //what is heading here? ->Basically it is an object (i.e. the object is  a react element of type 'h1')
    /*("h1",
        { id: "heading", xyz: "acb" },
        "Hello World From React!");  // this argument is called children
     */

console.log(parent); // it will return object 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // this render method is converting the obejct into the 'h1'tag