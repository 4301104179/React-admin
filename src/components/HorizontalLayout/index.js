import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import Navbar from '../HorizontalLayout/Navbar'

import Footer from './Footer'
import Header from './Header'


class Layout extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                {/* <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <i className="uil-shutter-alt spin-icon"></i>
                        </div>
                    </div>
                </div> */}
                <div id="layout-wrapper">
                    <header id="page-topbar">
                        <Header theme="light"/>
                        <Navbar />
                    </header>
                    <div className="main-content">{this.props.children}</div>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default Layout