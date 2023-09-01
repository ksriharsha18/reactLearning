import userContext from "../utils/userContext"
import { useState,useContext } from "react"

export default FilterSearch = (props) => {
    const {loggedInUser, setUserName} = useContext(userContext)
    const [searchText, setSearchText] = useState("")
    let {resData, setSearchAction} = props
    console.log(resData)
    const searchResult = (restaurant) => {
        if(restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())) {
            return true
        } else if(restaurant.info.cuisines.join(",").toLowerCase().includes(searchText.toLowerCase())) {
            return true
        } else {
            return false
        }
    }
    return (
        <div className="searchFilterSection max-w-c flex justify-between items-center">
            <div className="searchBar flex px-12">
                <input type="text" className="search-box input border-black border"
                    placeholder="Search"
                    value = {searchText}
                    onChange = {e => {
                        return(
                            setSearchText(e.target.value)
                        )
                    }}
                />
                <button
                    className="btn btn-blue"
                    onClick={() => {
                        if(searchText.length !== 0) {
                            setSearchAction(
                                resData.filter((restaurant) => {
                                    return (
                                        searchResult(restaurant)
                                    )
                                })
                            )
                        } else {
                            setSearchAction(resData)
                        }
                    }}
                >
                    Search
                </button>
            </div>
            <div>
                <label>Add User :</label>
                <input type="text" className="border border-black p-1"
                    value={loggedInUser}
                    onChange={e => {
                        setUserName(e.target.value)
                    }}
                />
            </div>
            <div className="filterButtons flex justify-end px-24 my-2.5">
                <button className="filter btn bcg-green mx-1.5"
                    onClick={() => {
                        setSearchAction(resData.filter((restaurant) => {
                            return restaurant.info.avgRating >= 4.0
                        }))
                    }}
                >
                    rating
                </button>
                <button className="rateLTH btn bcg-green mx-1"
                    onClick={()=>{
                        setSearchAction([...resData].sort((a,b) =>parseInt(a.info.costForTwo.substring(1,4)) - parseInt(b.info.costForTwo.substring(1,4))))
                    }}
                >
                    Cost:Low To High
                </button>
                <button className="rateHTL btn bcg-green mx-1"
                    onClick={() => {
                        setSearchAction([...resData].sort((a,b) => {
                            return parseInt(b.info.costForTwo.substring(1,4)) - parseInt(a.info.costForTwo.substring(1,4))
                        }))
                    }}
                >
                    Cost:High To Low
                </button>
            </div>
        </div>
    )
}