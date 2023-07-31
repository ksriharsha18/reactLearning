import Shimmer from "./Shimmer";
import RestaurantMenuList from "./RestaurantMenuList";
import useRestaurantData from "../utils/useRestaurantData";
import { lazy, useState } from "react"
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const RestaurantMenu = () => {
    const[ vegClassifier, setVegClassifier ] = useState(false)
    const[ showMore, setShowMore ] = useState(null)
    const { resId } = useParams();

    const menuInfo = useRestaurantData(resId)

    if(menuInfo.length === 0) {
        return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage, areaName, sla, avgRatingString, totalRatingsString, itemAttribute} = menuInfo?.cards[0]?.card?.card?.info
    const itemCards = menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    let filteredRestaurantlist = itemCards.filter((itemcard) => {
        if(itemcard.card.card.title !== undefined && itemcard.card.card.itemCards !==undefined) {
            return true
        } else if(itemcard.card.card.title !== undefined && itemcard.card.card.categories !==undefined)
            return true
    })

    const vegOnlyFunctionality = () => {
        let cssAttr = document.getElementById("buttonStructureOne")
        let togCssAttr = document.getElementById("buttonStructureTwo")
        cssAttr.classList.toggle('bg-green-900')
        togCssAttr.classList.toggle('bg-green-400')
        togCssAttr.classList.toggle('translate-x-5')
        setVegClassifier(!vegClassifier)
    }

    return (
        <section>
            <div className="resMenu-Conatainer max-w-screen-md my-0 mx-auto">
                <div className="restaurantInfoBlock mx-4">
                    <div className="restaurantInformation flex justify-between items-center pt-4 mb-5">
                        <div className="nameCuisine">
                            <h4 className="resName text-black mb-2">{name}</h4>
                            <h6 className="resCuisines overflow-hidden text-ellipsis mb-1 whitespace-nowrap h-[0.93rem]">{cuisines.join(',')}</h6>
                            <h6 className="resCuisines overflow-hidden text-ellipsis mb-1 whitespace-nowrap h-[0.93rem]">{areaName},{sla.lastMileTravelString}</h6>
                        </div>
                        <button className="bg-white border border-solid border-gray-300 rounded-md p-2 text-center cursor-pointer max-w-[100px] h-auto shadow-rxl">
                            <h5 className="rating flex justify-center items-center text-green-900 font-bold pb-2.5 mb-2 border-b-2 mt-0 border-b-gray-200"><AiFillStar/> <span>{avgRatingString}</span></h5>
                            <h6 className="totalRating font-semibold text-xs m-0">{totalRatingsString}</h6>
                        </button>
                    </div>
                    <hr className="border_between mb-5 border-dashed"/>
                    <span className="avgTime inline-block mr-6 font-bold text-gray-700 text-sm">{sla.slaString}</span><span className="avgTime inline-block mr-6 font-bold text-gray-700 text-s">{costForTwoMessage}</span>
                </div>
                <div className="vegetarianflag mt-6 mb-0 mx-4">
                    <span className="vegOnly text-base font-semibold text-gray-700">VEG ONLY</span>
                    <button className="vegButton ml-3 p-0 cursor-pointer active:text-green-700"
                        onClick={vegOnlyFunctionality}
                    >
                        <span className="btnStrucOne inline-block relative w-9 h-4 bg-gray-300 rounded-sm transition" id="buttonStructureOne">
                            <span className="btnStrucTwo absolute left-0 top-0 w-[15px] h-[15px] bg-white border-2 border-solid border-gray-300 rounded-sm will-change-transform transition-all"  id="buttonStructureTwo">
                                <span className="btnStrucThree opacity-0 transition-opacity"  id="buttonStructureThree">
                                    <span className="btnStrucFour block absolute bg-green-700 w-2 h-2 rounded-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"  id="buttonStructureFour"></span>
                                </span>
                            </span>
                        </span>
                    </button>
                    <div className="vegBorderBelow h-[0.5px] my-6 mx-auto border-b-2 border-solid border-b-red-100"></div>
                </div>
                {filteredRestaurantlist.map((filteredRestaurant, index) => {
                        return (
                            <RestaurantMenuList
                                key = {filteredRestaurant.card.card.title}
                                filteredRestaurant = {filteredRestaurant}
                                index = {index}
                                showMore = {showMore === index ? true : false}
                                setShowMore = {(args) => setShowMore(args !== undefined ? args : index)}
                                vegClassifier = {vegClassifier}
                                totalLength = {filteredRestaurantlist.length}
                            />
                        )
                })}
            </div>
        </section>
    )
}

export default RestaurantMenu
