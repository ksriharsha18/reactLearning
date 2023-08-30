import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
// import cartDetails from "../utils/CartContext";
import { useSelector } from "react-redux";

export default Header = () => {
    const[loginButton, setLoginButton] = useState("LogIn");

    const userLoggedIn = useContext(userContext)
    // const {cartDetail,setCartItems} = useContext(cartDetails)

    const cartItems = useSelector((store) => (store.cart.items))

    return (
        <header>
            <div className="header flex items-center justify-between border border-solid border-orange-400">
                <figure className="logo h-28 w-40 m-0">
                    <Link to="/">
                        <img className="max-h-full max-w-full" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo"/>
                    </Link>
                </figure>
                <nav className="navItems">
                    <ul className="flex">
                        <li className="m-2.5 p-2.5">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="m-2.5 p-2.5">
                            <Link to="/About">About Us</Link>
                        </li>
                        <li className="m-2.5 p-2.5">Contact</li>
                        <li className="m-2.5 p-2.5">
                            <Link to="/cart">Cart {cartItems.length !== 0 && cartItems.length}</Link>
                        </li>
                        <li className="m-2.5 p-2.5">
                            <Link to="/InstaMart">InstaMart</Link>
                        </li>
                    </ul>
                </nav>
                <button className="login btn btn-blue w-28 mx-3"
                    onClick={() => {
                        setLoginButton(loginButton === "LogIn"? "LogOut" : "LogIn")
                    }}
                >
                    {loginButton === "LogIn"? userLoggedIn.loggedInUser : "LogIn"}
                </button>
            </div>
        </header>
    )
}