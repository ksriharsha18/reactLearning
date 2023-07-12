import { RES_CARD_IMAGE } from "../../configData";

export default RestaurantCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData?.data
    return (
        <div className="res-Card">
            <figure>
                <img src={RES_CARD_IMAGE + cloudinaryImageId} alt="res-logo"/>
            </figure>
            <h3>{name}</h3>
            <div className="cuisine">{cuisines.join(',')}</div>
            <div className="hotelFeedback">
                <h5 className="rating"><i className="fa fa-star" aria-hidden="true"></i> {avgRating}</h5>
                <h5>₹{costForTwo/100} For Two</h5>
            </div>
        </div>
    )
}