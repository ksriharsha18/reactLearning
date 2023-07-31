import { Link } from "react-router-dom";
import { RES_CARD_IMAGE } from "../../configData";
import { AiFillStar } from "react-icons/ai";
import { useContext } from "react";
import userContext from "../utils/userContext";

export default RestaurantCard = (props) => {
    const {loggedInUser, setUserName} = useContext(userContext)
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        id
    } = resData?.info
    return (
        <div className="res-Card max-w-1/4 basis-1/4 h-auto my-5 mx-10 p-1.5 border hover:border-black border-solid border-white">
            <Link className="menuPath" to={"/restaurant/"+id}>
                <figure>
                    <img src={RES_CARD_IMAGE + cloudinaryImageId} alt="res-logo"/>
                </figure>
                <h3 className="text-center">{name}</h3>
                <div className="cuisine text-center truncate">{cuisines.join(',')}</div>
                <div className="hotelFeedback flex justify-between">
                    <h5 className="rating flex justify-between items-center">
                        <span className="border border-solid border-black text-white rounded-full bg-green-800"><AiFillStar/></span>
                        <span>{avgRating}</span>
                    </h5>
                    <h5>{costForTwo}</h5>
                </div>
            </Link>
        </div>
    )
}

export const RetaurantNearMe = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="m-0">
                <label>
                    Near me
                </label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
