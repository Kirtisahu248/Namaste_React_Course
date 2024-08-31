const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      costForTwo,
      avgRating,
    } = resData?.data;
    const{deliveryTime} = resData?.data?.sla;
    return (
      <div className="res-cards">
        <img
          className="res-logo"
          alt="res-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    );
  };

  export default RestaurantCard;