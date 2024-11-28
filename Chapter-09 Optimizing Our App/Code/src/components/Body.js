import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useRestaurantData from "../utils/useRestaurantData";
import useFilteredRestaurants from "../utils/useFilteredRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //State Variable

  const [searchText, setSearchText] = useState("");

  // Fetch restaurant data using custom hook
  const listOfRes = useRestaurantData();

  // Manage filtered restaurants using custom hook
  const { 
    filteredRestaurants, 
    filterByName, 
    filterTopRated,
    } = useFilteredRestaurants(listOfRes);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
      return(
    <h1>Looks like you are offline!! Check your internet connection</h1>
      )
  return listOfRes.length === 0 ? (
    <div className="shimmer-container">{Array(15).fill(<Shimmer />)}</div>
  ) : (
    <div className="body">
      <div className="filter-btn">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              filterByName(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter"
          onClick={() => {
            filterTopRated
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {(filteredRestaurants.length > 0 ? filteredRestaurants : listOfRes).map((restaurant) => (
          <Link
            className="link"
            key={restaurant.info.id}
            to={"/city/bhilai/" + restaurant?.info.id}
          >
            <RestaurantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
