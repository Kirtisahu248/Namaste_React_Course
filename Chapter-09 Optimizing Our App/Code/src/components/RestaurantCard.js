import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating ,sla } =
    resData?.info;
  return (
    <div className="res-cards">
      <img
        className="res-logo"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="title">{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4 className="rating">{avgRating}⭐</h4>
      <h4 className="cost-for-two">{costForTwo}</h4>
      <h4 className="sla-string">{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
