import { useState,useEffect } from "react"
import { SWIGGY_RESTRO_MENU } from "../../configData";

const useRestaurantData = (resId) => {
    const[ menuInfo,setMenuInfo ] = useState([]);

    try {
        useEffect(() => {
            fetchMenuData()
        }, []);

        const fetchMenuData = async () => {
            const data = await fetch(SWIGGY_RESTRO_MENU + resId);
            const json = await data.json();
            setMenuInfo(json.data);
        }
    } catch(error) {
        console.log(error.message);
    }

    return menuInfo
}

export default useRestaurantData
