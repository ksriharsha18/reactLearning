import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { SWIGGY_RESTRO_CARDS_LATEST } from "../../configData";
import useOnline from "../utils/useOnline";
import FilterSearch from "./FilterSearch";

export default Body = () => {
    const resData = useRestaurant(SWIGGY_RESTRO_CARDS_LATEST)
    const [searchAction, setSearchAction] = useState([])

    useEffect(() => {
        setSearchAction(resData)
    }, [resData])

    const isOnline = useOnline()

    if(!isOnline) {
        return <h1>offline! Please check your internet connection</h1>
    }

    return (resData?.length === 0 ? (<Shimmer />) :
        <section>
            <div className="container max-w-c my-3 mx-auto">
                <div className="body">
                    <FilterSearch
                        resData = {resData}
                        setSearchAction = {setSearchAction}
                    />
                    <div className="restaurant-container flex justify-start flex-wrap">
                        {/* RestaurentTiles */}
                        {searchAction.map((restaurant) => {
                            return (
                                <RestaurantCard
                                    key = {restaurant.info.id}
                                    resData = {restaurant}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}