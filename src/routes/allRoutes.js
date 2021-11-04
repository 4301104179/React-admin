import React from "react"
import { Redirect } from "react-router-dom"

import Dashboard from "../pages/Dashboard/index"
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceAddProduct"
import HomePage from "../pages/Homepage/HomePage"
import Course from "../pages/AllCourse"

const userRoutes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/", exact: true, component: () => <Redirect to="/homepage" /> },
    { path: "/ecommerce-add-product", component: EcommerceAddProduct },
    { path: "/homepage", component: HomePage },
    { path: '/courses', component: Course }
]

export { userRoutes }