'use strict'

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Shimmer from "./components/Shimmer";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import userContext from "./utils/userContext";
import cartDetails from "./utils/CartContext";

const InstaMart = lazy(() => import("./components/InstaMart"))


const AppLayout = () => {
    const [ userName,setUserName ] = useState()
    const [cartItems,setCartItems] = useState()
    const {cartDetail} = useContext(cartDetails)
    useEffect(() => {
        setCartItems()
    },[])

    useEffect(() => {
        const customer = {
            name : "K S S Sri Harsha"
        }
        setUserName(customer.name)
    },[])

    return (
        <Provider store={appStore}>
            <cartDetails.Provider value={{cartDetail:cartItems, setCartItems}}>
                <userContext.Provider value={{loggedInUser: userName, setUserName}}>
                    <div className="app">
                        <Header />
                        <Outlet />
                    </div>
                </userContext.Provider>
            </cartDetails.Provider>
        </Provider>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/About",
                element: <About
                    name = {"Harsha"}
                    location = {"Banglore"}
                />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/InstaMart",
                element: <Suspense fallback = {<Shimmer />}>
                            <InstaMart />
                        </Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <ErrorPage />
    }
])

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<RouterProvider router = {router} />);
