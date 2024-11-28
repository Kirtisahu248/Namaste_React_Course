import { useState } from "react";

const useFilteredRestaurants = (listOfRes) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Function to filter restaurants by name
  const filterByName = (searchText) => {
    const filtered = listOfRes.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  // Function to filter top-rated restaurants
  const filterTopRated = () => {
    const filtered = listOfRes.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurants(filtered);
  };

  return {
    filteredRestaurants,
    filterByName,
    filterTopRated,
  };
};

export default useFilteredRestaurants;
