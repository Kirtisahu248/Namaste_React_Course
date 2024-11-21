import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor (props){
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount");
    }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h2>About Us</h2>
        <h3>This is Namaste React course</h3>
        <UserClass name={"First Class"} email={"XYZ@gmail.com"} />
      </div>
    );
  }
}
/*
   - Parent Constructor
   - Parent Render
   
      -First Child constructor
      -First Child render
      
      
      -Second Child constructor
      -Second Child render
      
      < DOM Updated - in SINGLE BATCH >

      -First Child ComponentDidMount is called
      -Second Child ComponentDidMount is called

    -Parent ComponentDidMount is called
    */

export default About;
