import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor (props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h2>About Us</h2>
        <h3>This is Namaste React course</h3>
        <UserClass name={"Kirti Sahu Class"} email={"XYZ@gmail.com"} />
      </div>
    );
  }
}

export default About;
