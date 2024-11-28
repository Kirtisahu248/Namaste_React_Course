import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

useRestaurantData = () =>{
    const [listOfRes, setlistOfRes] = useState([]); //original data
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
        
      };
    return listOfRes;
}

export default useRestaurantData;