import { useDispatch } from "react-redux"
import { addItem,removeItem, removeLineItem } from "../utils/cartSlice"

const ProductLineItem = (props) => {
    const dispatch = useDispatch()
    const { cartDetail, cartProdIndex, cart, setCartProd } = props

    const count = {}

    if(cartDetail !== undefined) {
        cartDetail.map((cart) => {
            if(count[cart.id] === undefined) {
                count[cart.id] = 1
            } else if(count[cart.id] !== undefined) {
                count[cart.id] = (count[cart.id] || 0) + 1
            }
        })
    }

    return (
        <div>
            <div
                className="flex justify-between content-baseline m-5 border-2 border-solid border-green-400"
            >
                <div className="flex justify-between items-center w-5/6">
                    <div className="vegNonveg h-[17px] w-[500px] flex items-center">
                        <span className={"inline-block relative w-[14px] h-4 border mx-2 border-solid "+(cart.itemAttribute.vegClassifier === "VEG" ? "border-green-900" : "border-red-700")}><span className={"absolute bottom-0.5 left-0.5 inline-block h-[10px] w-[10px] rounded-2xl bg-green-900 vegClassColour "+(cart.itemAttribute.vegClassifier === "VEG" ? "bg-green-900" : "bg-red-700")}></span></span>
                        <h6 className="ml-1 text-black font-normal">{cart.name}</h6>
                    </div>
                    <div className="flex border-2 border-green-700 border-solid mx-3">
                        <button className="mx-3"
                            onClick={() => dispatch(removeItem(cart))}
                        >
                            -
                        </button>
                            <div>{count[cart.id]}</div>
                        <button className="mx-3"
                            onClick={() => dispatch(addItem(cart))}
                        >
                            +
                        </button>
                    </div>
                    <div className="w-20 mx-5">₹{(count[cart.id])*(cart.price/100 || cart.defaultPrice/100)}</div>
                </div>
                <div className="items-center bg-gray-400 p-2">
                    <button
                        onClick={() => dispatch(removeLineItem(cart))}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductLineItem;