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

const RestaurantCard = (props) => {
  const {resName, cusinies} = props;
  return (
    <div className="res-cards">
      <img
        className="res-logo"
        alt="res-img"
        src="https://b.zmtcdn.com/data/pictures/chains/2/18363082/ed2b2e9f365e35979823c269989813e5_o2_featured_v2.jpg"
      />
      <h3>{resName}</h3>
      <h4>{cusinies}</h4>
      <h4>4.0⭐</h4>
      <h4>39 min</h4>
      <h4>Rs 250 for one</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-box"> Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cusinies="Briyani,Kebab,North Indian"
        />
        <RestaurantCard
          resName="KFC"
          cusinies="Burger, Chicken65, French Fries"
        />
      </div>
    </div>
  );
};
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
