import { useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import cartDetails from "../utils/CartContext";

const Cart = () => {
    const {cartDetail,setCartItems} = useContext(cartDetails)
    const [cartProd, setCartProd] = useState([]);
    useEffect(() => {
        cartDetail !== undefined && setCartProd(cartDetail)
    },[cartDetail])
    useEffect(() => {
        if(cartProd.length !== 0) {
            setCartItems(cartProd)
        } else {
            setCartItems()
        }
    },[cartProd])

    const count = {}
    const duplicate = {}
    const cartProdIndex = {}
    let totalPrice = 0

    if(cartDetail !== undefined) {
        cartDetail.map((cart,index,array) => {
            if(count[cart.id] === undefined) {
                count[cart.id] = 1
                cartProdIndex[cart.id] = index
            } else if(count[cart.id] !== undefined) {
                count[cart.id] = (count[cart.id] || 0) + 1
                cartProdIndex[cart.id] = index
            }
            totalPrice = totalPrice+(cart.price/100 || cart.defaultPrice/100)
        })
    }

    return(
        <>
            {cartDetail === undefined ? (
            <div className="max-w-6xl mx-auto mt-5">
                <div className="m-5">Cart Items: 0</div>
                <div className="flex flex-col justify-center items-center">
                    <h1>Your Cart is Empty</h1>
                    <h1 className="text-center m-5">Please! Continue Shopping</h1>
                    <Link to="/"><div className="bg-orange-500 px-1 h-[auto] w-[auto] rounded-md text-center"><h4 className="text-black">See Restaurants Near You</h4></div></Link>
                </div>
            </div>) : (
                <div className="max-w-6xl mx-auto mt-5">
                    <div className="m-5">
                        <span>Cart Items: {cartDetail.length}</span>
                        <button
                            className="btn-blue w-20 mx-8 rounded-[6px]"
                            onClick={() => setCartProd([])}
                        >
                            Clear Cart
                        </button>
                    </div>
                    <div className="flex justify-between">
                        <div className="border-2 h-[auto]">
                            {cartDetail.map((cart,index,array) => {
                                if(duplicate[cart.id] === undefined) {
                                    duplicate[cart.id] = 1
                                    return (
                                        <div
                                            key={cart.id}
                                        >
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
                                                            onClick={() => setCartProd(array.slice(0, cartProdIndex[cart.id]).concat(array.slice(cartProdIndex[cart.id]+1)))}
                                                        >
                                                            -
                                                        </button>
                                                            <div>{count[cart.id]}</div>
                                                        <button className="mx-3"
                                                            onClick={() => setCartProd(cartDetail.concat(cart))}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <div className="w-20 mx-5">₹{(count[cart.id])*(cart.price/100 || cart.defaultPrice/100)}</div>
                                                </div>
                                                <div className="items-center bg-gray-400 p-2">
                                                    <button
                                                        onClick={() => setCartProd(cartDetail.filter((arr) => {
                                                            return arr.id !== cart.id
                                                        }))}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                            <div className="flex justify-between cursor-pointer text-white bg-green-500  m-5 p-2 rounded-xl">
                                <span className="block max-w-1/2">Item Total</span>
                                <span className="block max-w-1/2">₹{totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="w-1/4 border-2 h-[200px] p-3">
                            <div>Bill Details</div>
                            <div>
                                <div className="flex justify-between my-5">
                                    <span>Item Total : </span>
                                    <span>₹{totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between my-5">
                                    <span>GST and Restaurant Charges:</span>
                                    <span>₹{Math.round(0.18 * totalPrice)}</span>
                                </div>
                                <div className="flex justify-between cursor-pointer text-white bg-green-500  my-5 p-2 rounded-xl">
                                    <span className="block max-w-1/2">To Pay</span>
                                    <span className="block max-w-1/2">₹{Math.round(totalPrice + (0.18*totalPrice))}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cart
