import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Link } from "react-router-dom"


import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

import logo from "../../assets/images/logo-sm.png"
import logoLight from "../../assets/images/logo-light.png"
import logoDark from "../../assets/images/logo-dark.png"

import github from "../../assets/images/brands/github.png"
import bitbucket from "../../assets/images/brands/bitbucket.png"
import dribbble from "../../assets/images/brands/dribbble.png"
import dropbox from "../../assets/images/brands/dropbox.png"
import mail_chimp from "../../assets/images/brands/mail_chimp.png"
import slack from "../../assets/images/brands/slack.png"
import NotificationDropdown from '../CommonForBoth/TopBarDropDown/NotificationDropdown'
import ProfileMenu from '../CommonForBoth/TopBarDropDown/ProfileMenu'

import { withTranslation } from "react-i18next"

const Header = (props) => {
    const [isSearch, setSearch] = useState(false)

    const toggleFullscreen = () => {
        if (
            !document.fullscreenElement &&
            /* alternative standard method */ !document.mozFullScreenElement &&
            !document.webkitFullscreenElement
        ) {
            // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen()
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen()
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(
                    Element.ALLOW_KEYBOARD_INPUT
                )
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            }
        }
    }

    return (
        <React.Fragment>
            <div className="navbar-header">
                <div className="d-flex">
                    <div className="navbar-brand-box">
                        <Link to="/" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src={logo} alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src={logoDark} alt="" height="17" />
                            </span>
                        </Link>

                        <Link to="/" className="logo logo-light">
                            <span className="logo-sm">
                                <img src={logo} alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src={logoLight} alt="" height="19" />
                            </span>
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                        data-toggle="collapse"
                        onClick={() => {
                            props.toggleLeftmenu(!props.leftMenu)
                        }}
                        data-target="#topnav-menu-content"
                    >
                        <i className="fa fa-fw fa-bars" />
                    </button>

                    <form className="app-search d-none d-lg-block">
                        <div className="position-relative">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                            />
                            <span className="uil-search"></span>
                        </div>
                    </form>
                </div>

                <div className="d-flex">
                    <div className="dropdown d-inline-block d-lg-none ms-2">
                        <button
                            type="button"
                            className="btn header-item noti-icon waves-effect"
                            id="page-header-search-dropdown"
                            onClick={() => setSearch(!isSearch)}
                        >
                            <i className="uil-search"></i>
                        </button>
                        <div
                            className={
                                isSearch
                                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show"
                                    : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                            }
                            aria-labelledby="page-header-search-dropdown"
                        >
                            <form className="p-3">
                                <div className="form-group m-0">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={props.t("Search") + "..."}
                                            aria-label="Recipient's username"
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit">
                                                <i className="mdi mdi-magnify" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="dropdown d-none d-lg-inline-block ms-1">
                        <button
                            type="button"
                            className="btn header-item noti-icon waves-effect"
                            onClick={() => {
                                toggleFullscreen()
                            }}
                            data-toggle="fullscreen"
                        >
                            <i className="uil-minus-path"></i>
                        </button>
                    </div>

                    <NotificationDropdown />
                    
                    <ProfileMenu />
                </div>

            </div>
        </React.Fragment>
    )
}

export default (withTranslation()(Header))
