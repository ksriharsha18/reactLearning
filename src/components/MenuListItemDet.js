// import { useState,useEffect,useContext } from "react"
import { ITEM_CARD_IMAGE } from "../../configData"
// import cartDetails from "../utils/CartContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";

export default MenuListItemDet = (props) => {
    const { card, index, totalLength } = props
    const { info } = card?.card
    // const [cartProd, setCartProd] = useState([]);
    // const {cartDetail,setCartItems} = useContext(cartDetails)
    // useEffect(() => {
    //     cartDetail !== undefined && setCartProd(cartDetail)
    // },[cartDetail])
    // useEffect(() => {
    //     if(cartProd.length !== 0) {
    //         setCartItems(cartProd)
    //     }
    // },[cartProd])

    const dispatch = useDispatch();

    const addMenuItem = (info) => {
        console.log(info)
        dispatch(addItem(info))
    }

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div>
            <div className="itemDetailContainer pb-3.5 pt-5">
                <div className="itemDetails flex justify-between items-start">
                    <div className="itemInfo">
                        <div className="vegNonveg h-[17px]">
                            <div className={"relative w-[14px] h-4 border border-solid "+(info.itemAttribute.vegClassifier === "VEG" ? "border-green-900" : "border-red-700")}><span className={"absolute bottom-0.5 left-0.5 inline-block h-[10px] w-[10px] rounded-2xl bg-green-900 vegClassColour "+(info.itemAttribute.vegClassifier === "VEG" ? "bg-green-900" : "bg-red-700")}></span></div>
                        </div>
                        <h3>{info.name}</h3>
                        <div className="itemPriceContainer mr-2 font-normal text-gray-700 text-base">
                            <span className="itemPrice">
                                <span className="ruppee">₹{info.price/100 || info.defaultPrice/100}</span>
                            </span>
                        </div>
                        <div className="infoDescription mt-3.5 leading-5 text-gray-800 -tracking-[0.3px]">{info.description}</div>
                    </div>
                    <div className="imageDescription relative ml-4 min-w-[118px] h-[120px]">
                        {info.imageId === undefined ? ("") :
                            <figure className="itemFigure absolute m-0 h-24 w-[118px]">
                                <img className="w-full h-full absolute rounded-md top-0 right-0" alt={info.name} src={ ITEM_CARD_IMAGE + info.imageId }/>
                            </figure>
                        }
                        <div className="addToCart absolute bottom-2 left-[10%]">
                            <div
                                className="addButton relative w-24 h-9 bg-white border border-solid border-gray-200 rounded-md cursor-pointer"
                                    // onClick={() => setCartProd(cartProd.concat(info))}
                                    onClick={() => addMenuItem(info)}
                                >
                                <span className="addButtonText absolute text-sm font-semibold leading-8 text-green-500 left-[35%] top-[5%]">ADD</span>
                            {(Object.keys(info.variants).length !== 0 || Object.keys(info.variantsV2).length !== 0 || info.addons !== undefined) ? (
                                <>
                                    <div className="addSign absolute right-0.5 text-sm font-extralight text-green-700">+</div>
                                    <div className="customizable absolute right-0.5 text-xs font-medium text-center leading-3 top-[35px] w-full text-gray-300">customizable</div>
                                </>
                            ) : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {(index === totalLength-1) ? "" : <div className="itemDivider border border-solid border-red-50 h-[0.5px] mt-1.5 mb-5 mx-0"></div>}
        </div>
    )
}
