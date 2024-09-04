import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1938475&lng=81.3509416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //Optional chaining
    setlistOfRes(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional rendering => a rendering on the basis of condition is known as condition rendering

  return listOfRes.length === 0 ? (
    <div className="shimmer-container">{Array(15).fill(<Shimmer />)}</div>
  ) : (
    <div className="body">
      <div className="filter-btn">
        <button
          className="filter"
          onClick={() => {
            //fliter out restaurant according to ratings
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
