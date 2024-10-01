import {useState} from "react";

const User = (props) => {
    const [count,setCount] = useState(0);
  return (
    <div className="userCard">
        <h1>Count:{count}</h1>
        <button onClick={()=>{
            setCount (count + 1);
        }}>Increment</button>
      <h2>Name:{props.name}</h2>
      <h3>Email Id:{props.email}</h3>
      <h3>Contact: @kirti21</h3>
    </div>
  );
};
export default User;
