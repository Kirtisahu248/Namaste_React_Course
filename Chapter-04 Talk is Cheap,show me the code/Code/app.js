import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Components the app will have are:
 * Major 3 : Header , Body & Fotter
 *
 * Header
 *  -Logo
 *  - NavItems: Home,AboutUs etc.
 * Body
 *  -Search Box
 *  -RestaurantContainer
 *       -RestaurantCard
 * Fotter
 * -Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo -container">
        <img
          className="logo"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-1536x1536.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Applayout = () => {
  return <div className="app">
    <Header />
    </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
