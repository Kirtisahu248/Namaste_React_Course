import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="filter"
          onClick={() => {
            //fliter out restaurant according to ratings
            filteredList = listOfRes.filter((res) => res.data.avgRating > 4);
            setlistOfRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
