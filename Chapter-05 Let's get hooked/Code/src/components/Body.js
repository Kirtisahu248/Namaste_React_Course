import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  let listOfRes = [
    {
      data: {
        id: "728502",
        name: "Indian Coffee House",
        cloudinaryImageId: "b573f6a00571c79f8d92ff855351dc01",
        costForTwo: "₹200 for two",
        cuisines: [
          "South Indian",
          "North Indian",
          "Mughlai",
          "Fast Food",
          "Beverages",
        ],
        avgRating: 4.2,
        deliveryTime: 33,
      },
    },
    {
      data: {
        id: "728503",
        name: "Hari Raj",
        cloudinaryImageId: "b573f6a00571c79f8d92ff855351dc01",
        costForTwo: "₹200 for two",
        cuisines: [
          "South Indian",
          "North Indian",
          "Mughlai",
          "Fast Food",
          "Beverages",
        ],
        avgRating: 3.8,
        deliveryTime: 33,
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="filter"
          onClick={() => {
            //fliter out restaurant according to ratings
           listOfRes = listOfRes.filter((res) => res.data.avgRating > 4);
           console.log(listOfRes);
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
