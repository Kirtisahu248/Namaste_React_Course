import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNamereact] = useState("LogIn");
  return (
    <div className="header">
      <div className="logo -container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link className="link" to="/" > Home </Link></li>
          <li> <Link className="link" to="/about"> About Us </Link></li>
          <li> <Link className="link" to="/contact">Contact Us</Link> </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "LogIn"
                ? setbtnNamereact("LogOut")
                : setbtnNamereact("LogIn");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
