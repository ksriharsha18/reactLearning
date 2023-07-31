import MenuListItemDet from "./MenuListItemDet"
import RestaurantCategoryMenuList from "./RestaurantCategoryMenuList";
import { useState } from "react"
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

export default RestaurantMenuList = (props) => {
    const [ isActive,setIsActive ] = useState(false)
    const {filteredRestaurant, index, totalLength, vegClassifier, showMore, setShowMore} = props
    const { title,itemCards,categories } = filteredRestaurant?.card?.card
    const collapsibleOpen = () => {
        if(!showMore) {
            setShowMore();
        } else {
            setShowMore(null)
        }
    }

    let vegOnly
    let categoryItemCards

    if(categories !== undefined) {
        categoryItemCards = categories.map((categoryItem) => {
            return categoryItem
        })
    }

    if(!vegClassifier && itemCards !== undefined) {
        vegOnly = itemCards.map((card) => {
            return card
        })
    } else if(vegClassifier && itemCards !== undefined) {
        vegOnly = itemCards.filter((card) => {
            return card.card.info.itemAttribute.vegClassifier === "VEG"
        })
    } else if(!vegClassifier && categoryItemCards !== undefined) {
        vegOnly = categoryItemCards.map((card) => {
            return card
        })
    } else if(vegClassifier && categoryItemCards !== undefined) {
        vegOnly = categoryItemCards.map((card) => {
            return (
                card.itemCards.filter((itemCard) => {
                    return (
                        itemCard.card.info.itemAttribute.vegClassifier === "VEG"
                    )
                })
            )
        })
    }

    if(vegOnly.length !== 0) {
        if(categoryItemCards === undefined) {
            return (
                <>
                    <div>
                        <div className="menuList">
                            <div className= {title + " MenuContainer relative mt-6 mr-2 mb-4 ml-4"}>
                                <button
                                    className="flex justify-between items-center text-left cursor-pointer p-0 pr-4 text-xl w-full"
                                    onClick={collapsibleOpen}
                                >
                                    <h3>{title+"(" + vegOnly.length +")"}</h3>
                                    {showMore ? <BsFillCaretUpFill /> : <BsFillCaretDownFill/>}
                                </button>
                                {showMore && <div id={title + "Details"}>
                                    {vegOnly.map((card, index) => {
                                        return (
                                            <MenuListItemDet
                                                key = {card.card.info.id}
                                                card = {card}
                                                index = {index}
                                                totalLength = {vegOnly.length}
                                            />
                                        )
                                    })}
                                </div>}
                            </div>
                        </div>
                        {(index === totalLength-1) ? "" : <div className="categoryBorder h-4 border-b-[16px] border-solid border-blue-50"></div>}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div>
                        <div className="menuList">
                            <h3 className="pr-4 ml-4">{title}</h3>
                            <div className= {title + " MenuContainer relative mt-6 mr-2 mb-4 ml-4"}>
                                {categoryItemCards.map((card) => {
                                    return(
                                        <RestaurantCategoryMenuList
                                            key={card.title}
                                            card={card}
                                            vegOnly={vegOnly}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        {(index === totalLength-1) ? "" : <div className="categoryBorder h-4 border-b-[16px] border-solid border-blue-50"></div>}
                    </div>
                </>
            )
        }
    }
}