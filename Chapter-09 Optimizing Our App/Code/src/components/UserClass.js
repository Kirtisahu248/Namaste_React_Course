import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "Bhilai",
      },
    };
    // console.log(this.props.name+"Child Constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name+"Child Component Did Mount");
    //api call
    const data = await fetch("https://api.github.com/users/Kirtisahu248");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }

  render() {
    const { name, login, avatar_url } = this.state.userInfo;
    return (
      <div className="userCard">
        <img src={avatar_url}/>
        <h2>Name:{name}</h2>
        <h3> LoginId:{login}</h3>
        <h3>Contact: @kirti21</h3>
      </div>
    );
  }
}

export default UserClass;

/**
 * ------- MOUNTING PHASE ----------
 * 
 * Constructor (dummy)
 * Render (Dummy)
 *     <HTML Dummy> (for some milliSeconds)
 * Component Did Mount
 *     <API Call>
 *     <this.setState>  --> State Variable is updated 
 * 
 * -------- UPDATE PHASE --------
 * 
 *   Render (API Call)
 *  <HTML (new API Data)>
 *   Component Did Update 
 * 
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */