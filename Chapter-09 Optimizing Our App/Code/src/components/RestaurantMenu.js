import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
  const {resId} = useParams();
 const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info || {};
  console.log(restaurantInfo);
  const { name, cuisines, costForTwoMessage, avgRating } = restaurantInfo ;
    

  const {itemCards}  =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card || [];

  console.log(itemCards);

  return (
    <div className="menu">
      <h1> {name} </h1>
      <div className="resName">
        <ul>
          <li>
            {avgRating + "⭐"} - {costForTwoMessage}
          </li>
          <li>{cuisines.join(", ")}</li>
        </ul>
      </div>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
