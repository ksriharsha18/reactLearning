import { useState } from "react"

export default FilterSearch = (props) => {
    const [searchText, setSearchText] = useState("")
    let {resData, searchAction, setSearchAction, setResData} = props
    return (
        <div className="searchFilterSection">
            <div className="searchBar">
                <input type="text" className="search-box"
                    value = {searchText}
                    onChange = {e => {
                        return(
                            setSearchText(e.target.value)
                        )
                    }}
                />
                <button
                    onClick={() => {
                        if(searchText.length !== 0) {
                            setSearchAction(
                                resData.filter((restaurant) => {
                                    return (
                                        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
                                    )
                                })
                            )
                        } else {
                            setSearchAction(resData)
                        }
                    }}
                >Search</button>
            </div>
            <div className="filterButtons">
                <button className="filter"
                    onClick={() => {
                        setSearchAction(resData.filter((restaurant) => {
                            return restaurant.type === "restaurant" && restaurant.data.avgRating >= 4.0
                        }))
                    }}
                >
                    rating
                </button>
                <button className="rateLTH"
                    onClick={()=>{
                        setSearchAction([...resData].sort((a,b) =>a.data.costForTwo - b.data.costForTwo))
                    }}
                >
                    Cost:Low To High
                </button>
                <button className="rateHTL"
                    onClick={() => {
                        setSearchAction([...resData].sort((a,b) => {
                            return b.data.costForTwo - a.data.costForTwo
                        }))
                    }}
                >
                    Cost:High To Low
                </button>
            </div>
        </div>
    )
}