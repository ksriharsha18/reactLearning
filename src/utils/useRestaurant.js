import { useState, useEffect } from "react"

const useRestaurant = (url) => {
    const [resData, setResData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        var data = await fetch(url)
        var json = await data.json();
        setResData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return resData

}

export default useRestaurant
