import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  //State Variable
  const [listOfRes, setlistOfRes] = useState([]); //original data
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //copy of original data
  const [searchText, setSearchText] = useState("");

  //Whenever State variables update , react trigers the recoincilation cycle (re-renders the component)
  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1938475&lng=81.3509416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //Optional chaining
    console.log(json);
    const resData =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setlistOfRes(resData);
    setFilteredRestaurant(resData);
  };

  //Conditional rendering => a rendering on the basis of condition is known as condition rendering

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
              // -------------------------Filtering the data on serach---------------------------

              const filteredRes = listOfRes.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter"
          onClick={() => {
            //fliter out restaurant according to ratings
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
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
