import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import Footer from "../../components/HorizontalLayout/Footer"

const Authmiddleware = ({
    component: Component,
    layout: Layout,
    ...rest }) => {
    console.log('có đây ko', rest, Component)
    return (
        <Route
            {...rest}
            render={props => {
                console.log('props này sao', props)
                return (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                )
            }}
        />
    )
}



export default Authmiddleware
