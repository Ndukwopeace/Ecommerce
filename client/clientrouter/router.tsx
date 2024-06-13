import React from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "../src/App"
import ProductPage from "../src/Components/Pages/productpage/ProductPage"
import HomePage from "../src/Components/Pages/homepage/HomePage"
import LoginPage from "../src/Components/Pages/loginpage/LoginPage"
import ProductDetail from "../src/Components/Pages/productpage/ProductDetail"

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/products',
                element: <ProductPage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/detail/:id',
                element: <ProductDetail/>
            },
        ]
    }
])


export default router