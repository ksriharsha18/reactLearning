import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import cartDetails from "../utils/CartContext";
import ProductLineItems from "./ProductLineItems";
import { useSelector } from "react-redux";

const Cart = () => {
    // const {cartDetail,setCartItems} = useContext(cartDetails)
    // const [cartProd, setCartProd] = useState([]);
    // useEffect(() => {
    //     cartDetail !== undefined && setCartProd(cartDetail)
    // },[cartDetail])
    // useEffect(() => {
    //     if(cartProd.length !== 0) {
    //         setCartItems(cartProd)
    //     } else {
    //         setCartItems()
    //     }
    // },[cartProd])

    const cartItems = useSelector((store) => store.cart.items)

    return(
        <>
            {cartItems.length === 0 ? (
            <div className="max-w-6xl mx-auto mt-5">
                <div className="m-5">Cart Items: 0</div>
                <div className="flex flex-col justify-center items-center">
                    <h1>Your Cart is Empty</h1>
                    <h1 className="text-center m-5">Please! Fullfill Your Cravings</h1>
                    <Link to="/"><div className="bg-orange-500 px-1 h-[auto] w-[auto] rounded-md text-center"><h4 className="text-black">See Restaurants Near You</h4></div></Link>
                </div>
            </div>) : (
                <ProductLineItems />
            )}
        </>
    )
}

export default Cart
