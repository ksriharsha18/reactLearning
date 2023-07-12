import { useState, useEffect } from "react"

export default Header = () => {
    const[loginButton, setLoginButton] = useState("LogIn");

    return (
        <header>
            <div className="header">
                <figure className="logo">
                    <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo"/>
                </figure>
                <div className="navItems">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
                <button className="login"
                    onClick={() => {
                        setLoginButton(loginButton === "LogIn"? "LogOut" : "LogIn")
                    }}
                >
                    {loginButton}
                </button>
            </div>
        </header>
    )
}