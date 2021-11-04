import React from 'react'

import { Switch, BrowserRouter as Router } from "react-router-dom"

import Authmiddleware from './routes/middlewares/Authmiddleware';

import { userRoutes } from './routes/allRoutes';

import Layout from './components/HorizontalLayout/index'
import Footer from './components/HorizontalLayout/Footer';
import Header from './components/HorizontalLayout/Header';
import Dashboard from './pages/Dashboard';

const App = () => {

    return (
        <React.Fragment>
            <Router>
                <Switch>
                    {userRoutes.map((route, idx) => {
                        console.log(route)
                        return (
                            <Authmiddleware
                                layout={Layout}
                                component={route.component}
                                key={idx}
                                path={route.path}
                                isAuthProtected={true}
                                exact
                            />

                        )
                    })}
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App
