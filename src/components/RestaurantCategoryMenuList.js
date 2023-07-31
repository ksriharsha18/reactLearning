import { useState } from "react"
import MenuListItemDet from "./MenuListItemDet"
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

const RestaurantCategoryMenuList = (props) => {
    const [ showMore,setShowMore ] = useState(false)
    const collapsible = () => {
        setShowMore(!showMore);
    }

    const { card,vegOnly } = props

    return (
        <>
            <button
                className="flex justify-between items-center text-left cursor-pointer p-0 pr-4 text-xl w-full"
                onClick={collapsible}
            >
                {<h3>{card.title+"(" + card.itemCards.length +")"}</h3>}
                {showMore ? <BsFillCaretUpFill /> : <BsFillCaretDownFill/>}
            </button>
            {showMore && card.itemCards.map((itemCard, index) => {
                return (
                    <MenuListItemDet
                        key = {itemCard.card.info.id}
                        card = {itemCard}
                        index = {index}
                        totalLength = {vegOnly.length}
                    />
                )
            })}

        </>
    )
}

export default RestaurantCategoryMenuList
