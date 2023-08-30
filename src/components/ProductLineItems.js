import ProductLineItem from "./ProductLineItem";
import BillingDetails from "./BillingDetails";
import { clearCart } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ProductLineItems = (props) => {
    // const { cartDetail,setCartItems,cartProd,setCartProd } = props

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    // const count = {}
    // const cartProdIndex = {}

    // if(cartDetail !== undefined) {
    //     cartDetail.map((cart,index,array) => {
    //         if(count[cart.id] === undefined) {
    //             count[cart.id] = 1
    //             cartProdIndex[cart.id] = index
    //         } else if(count[cart.id] !== undefined) {
    //             count[cart.id] = (count[cart.id] || 0) + 1
    //             cartProdIndex[cart.id] = index
    //         }
    //         totalPrice = totalPrice+(cart.price/100 || cart.defaultPrice/100)
    //     })
    // }

    const duplicate = {}
    let totalPrice = 0

    cartItems.map((cart) => {
        totalPrice = totalPrice+(cart.price/100 || cart.defaultPrice/100)
    })

    return (
        <div className="max-w-6xl mx-auto mt-5">
            <div className="m-5">
                <span>Cart Items: {cartItems.length}</span>
                <button
                    className="btn-blue w-20 mx-8 rounded-[6px]"
                    onClick={() => dispatch(clearCart())}
                >
                    Clear Cart
                </button>
            </div>
            <div className="flex justify-between">
                <div className="border-2 h-[auto]">
                    {cartItems.map((cart,index,array) => {
                        if(duplicate[cart.id] === undefined) {
                            duplicate[cart.id] = 1
                            return (
                                <ProductLineItem
                                    key = {cart.id}
                                    cartDetail = {array}
                                    cart = {cart}
                                />
                            )
                        }
                    })}
                    <div className="flex justify-between cursor-pointer text-white bg-green-500  m-5 p-2 rounded-xl">
                        <span className="block max-w-1/2">Item Total</span>
                        <span className="block max-w-1/2">₹{totalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <BillingDetails
                    totalPrice={totalPrice}
                />
            </div>
        </div>
    )
}

export default ProductLineItems
