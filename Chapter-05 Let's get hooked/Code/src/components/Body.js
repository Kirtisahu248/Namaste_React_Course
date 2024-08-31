import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <div className="body">
        <div className="search-box"> Search</div>
        <div className="res-container">
          {resList.map((restaurant) => (
            
            <RestaurantCard key = {restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;