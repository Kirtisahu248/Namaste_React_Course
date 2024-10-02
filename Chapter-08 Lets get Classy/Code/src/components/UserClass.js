 import React from "react";

class UserClass extends React.Component {

constructor(props){
    super(props);
    
    this.state ={
        count: 0,
    }
    console.log("Child Constructor");
}
componentDidMount(){
    console.log("Child Component Did Mount");
}
 render (){
     const {name,email} = this.props;
     const {count} = this.state;
     console.log("Child Render");

    return (
        <div className="userCard">
            <h1 className="cnt">Count:{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:count + 1,
                })
            }}>Increment</button>
          <h2>Name:{name}</h2>
          <h3>Email Id:{email}</h3>
          <h3>Contact: @kirti21</h3>
        </div>
      );
 }
}

export default UserClass;