import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1938475&lng=81.3509416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
   
    const json = await data.json();
    setlistOfRes(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="filter"
          onClick={() => {
            //fliter out restaurant according to ratings
            const filteredList = listOfRes.filter((res) => res.data.avgRating > 4);
            setlistOfRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
