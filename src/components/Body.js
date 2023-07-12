import RestaurantCard from "./RestaurantCard"
import { SWIGGY_RESTRO_CARDS } from "../../configData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import FilterSearch from "./FilterSearch";

export default Body = () => {
    const [resData, setResData] = useState([]);
    const [searchAction, setSearchAction] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        var data = await fetch(SWIGGY_RESTRO_CARDS)
        var json = await data.json();
        setResData(json?.data?.cards[2]?.data?.data?.cards)
        setSearchAction(json?.data?.cards[2]?.data?.data?.cards)
    }

    return (resData?.length === 0 ? (<Shimmer />) :
        <section>
            <div className="container">
                <div className="body">
                    <FilterSearch
                        resData = {resData}
                        searchAction = {searchAction}
                        setResData = {setResData}
                        setSearchAction = {setSearchAction}
                    />
                    <div className="restaurant-container">
                        {/* RestaurentTiles */}
                        {searchAction.map((restaurant) => {
                            return (
                                <RestaurantCard
                                    key = {restaurant.data.id}
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