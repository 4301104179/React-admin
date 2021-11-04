import React, {useEffect} from 'react'
import {
    Container,
    Row,
    Col,
    Input,
    Card,
    Form,
    Media,
    Collapse,
    Label,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Button,
    CardImg
} from "reactstrap"
import { connect } from "react-redux"

import homebanner from '../../assets/images/users/home_banner.jpg'
import reactLogo from '../../assets/images/brands/react.svg'
import vueLogo from '../../assets/images/brands/vuejs.svg'
import angularLogo from '../../assets/images/brands/angular.svg'
import javascriptLogo from '../../assets/images/brands/javascript.svg'
import iconEngineer from '../../assets/iconEngineer.svg'

const HomePage = () => {
  

    return (
        <React.Fragment>
            <div className="home-banner text-white mb-4" style={{ backgroundImage: `url(${homebanner})` }}>
                <Container fluid className="page_container">
                    <h1 className="text-h1 fw-bolder"> Everything you need to LEARN </h1>
                    <p className="fw-bolder h4 text-white mb-5"> Get your first Job as a UI/UX Designer </p>

                    <div className="d-flex justify-content-center bton">
                        <a className="btn btn-light btn-lg me-2"> Browser Lessons </a>
                        <a className="btn btn-success btn-lg "> Subscribe </a>
                    </div>
                </Container>
            </div>

            <Container fluid className="page_container">
                <h2 className="fw-bolder text-center m-4 p-4" > Recent Course </h2>


                <Row>
                    <Col xl={3} sm={6}>
                        <Card className="bx-fade-up">
                            <CardHeader className="card-header-large bg-dark d-flex justify-content-center">
                                <CardTitle className="d-flex flex-column align-items-center justify-content-center">
                                    <span>
                                        <img src={reactLogo} />
                                    </span>
                                    <span className="text-secondary">
                                        React
                                    </span>
                                    <span className="text-white">
                                        Learn the Basics
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">
                                    <a href="#" className="active"> <i className="mdi mdi-star"></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <strong> 5.0 </strong>
                                    <br />
                                    <small className="text-muted"> (339 ratings) </small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <h4 className="m-0"> $49 </h4>
                                        <a href="#" className="btn btn-primary ml-auto"> <i className="fa fa-shopping-cart"></i> </a>
                                    </div>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={3} sm={6}>
                        <Card>
                            <CardHeader className="card-header-large bg-dark d-flex justify-content-center">
                                <CardTitle className="d-flex flex-column align-items-center justify-content-center">
                                    <span>
                                        <img src={vueLogo} />
                                    </span>
                                    <span className="text-secondary">
                                        Vue.js
                                    </span>
                                    <span className="text-white">
                                        Quick Tips
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">
                                    <a href="#" className="active"> <i className="mdi mdi-star"></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <strong> 5.0 </strong>
                                    <br />
                                    <small className="text-muted"> (339 ratings) </small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <h4 className="m-0"> $49 </h4>
                                        <a href="#" className="btn btn-primary ml-auto"> <i className="fa fa-shopping-cart"></i> </a>
                                    </div>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={3} sm={6}>
                        <Card>
                            <CardHeader className="card-header-large bg-dark d-flex justify-content-center">
                                <CardTitle className="d-flex flex-column align-items-center justify-content-center">
                                    <span>
                                        <img src={angularLogo} />
                                    </span>
                                    <span className="text-secondary">
                                        Angular
                                    </span>
                                    <span className="text-white">
                                        Back to Basics
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">
                                    <a href="#" className="active"> <i className="mdi mdi-star"></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <strong> 5.0 </strong>
                                    <br />
                                    <small className="text-muted"> (339 ratings) </small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <h4 className="m-0"> $49 </h4>
                                        <a href="#" className="btn btn-primary ml-auto"> <i className="fa fa-shopping-cart"></i> </a>
                                    </div>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={3} sm={6}>
                        <Card>
                            <CardHeader className="card-header-large bg-dark d-flex justify-content-center">
                                <CardTitle className="d-flex flex-column align-items-center justify-content-center">
                                    <span>
                                        <img src={javascriptLogo} />
                                    </span>
                                    <span className="text-secondary">
                                        React
                                    </span>
                                    <span className="text-white">
                                        Learn the Basics
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">
                                    <a href="#" className="active"> <i className="mdi mdi-star"></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <a href="#" className="active"> <i className="mdi mdi-star "></i> </a>
                                    <strong> 5.0 </strong>
                                    <br />
                                    <small className="text-muted"> (339 ratings) </small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <h4 className="m-0"> $49 </h4>
                                        <a href="#" className="btn btn-primary ml-auto"> <i className="fa fa-shopping-cart"></i> </a>
                                    </div>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>



                <div className="m-4 p-4">
                    <h2 className="fw-bolder text-center"> Features & Highlights </h2>
                    <p className="lead text-center text-muted"> What makes LEMA an awesome template </p>
                </div>

                <Row className="mb-5">
                    <Col md={6} className="d-flex align-items-center flex-row-reverse">
                        <div className="avatar avatar-md ms-3">
                            <span className="bg-primary border avatar-title rounded-circle text-center">
                                <strong className="fs-4">BS</strong>
                            </span>
                        </div>
                        <div className="text-end">
                             <strong  className="fs-5"> Twitter Bootstrap 4.4.1 </strong>
                             <p className="m-0 fs-5"> Built on top of the latest BS framework </p>
                        </div>
                    </Col>

                    <Col md={6} className="d-flex align-items-center">
                         <div className="avatar avatar-md ms-3"> 
                              <span className="bg-primary border avatar-title rounded-circle ">
                                  <iconEngineer />
                              </span>
                         </div>
                         <div className="text-start">
                             <strong className="fs-5"> JEDI Instructors </strong>
                             <p className="m-0 fs-5"> Learn from top-class instructors </p>
                         </div>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col md={6} className="d-flex align-items-center flex-row-reverse">
                        <div className="avatar avatar-md ms-3">
                            <span className="bg-primary border avatar-title rounded-circle text-center">
                                <strong className="fs-4">BS</strong>
                            </span>
                        </div>
                        <div className="text-end">
                             <strong  className="fs-5"> Twitter Bootstrap 4.4.1 </strong>
                             <p className="m-0 fs-5"> Built on top of the latest BS framework </p>
                        </div>
                    </Col>

                    <Col md={6} className="d-flex align-items-center">
                         <div className="avatar avatar-md ms-3"> 
                              <span className="bg-primary border avatar-title rounded-circle ">
                                  <iconEngineer />
                              </span>
                         </div>
                         <div className="text-start">
                             <strong className="fs-5"> JEDI Instructors </strong>
                             <p className="m-0 fs-5"> Learn from top-class instructors </p>
                         </div>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col md={6} className="d-flex align-items-center flex-row-reverse">
                        <div className="avatar avatar-md ms-3">
                            <span className="bg-primary border avatar-title rounded-circle text-center">
                                <strong className="fs-4">BS</strong>
                            </span>
                        </div>
                        <div className="text-end">
                             <strong  className="fs-5"> Twitter Bootstrap 4.4.1 </strong>
                             <p className="m-0 fs-5"> Built on top of the latest BS framework </p>
                        </div>
                    </Col>

                    <Col md={6} className="d-flex align-items-center">
                         <div className="avatar avatar-md ms-3"> 
                              <span className="bg-primary border avatar-title rounded-circle ">
                                  <iconEngineer />
                              </span>
                         </div>
                         <div className="text-start">
                             <strong className="fs-5"> JEDI Instructors </strong>
                             <p className="m-0 fs-5"> Learn from top-class instructors </p>
                         </div>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col md={6} className="d-flex align-items-center flex-row-reverse">
                        <div className="avatar avatar-md ms-3">
                            <span className="bg-primary border avatar-title rounded-circle text-center">
                                <strong className="fs-4">BS</strong>
                            </span>
                        </div>
                        <div className="text-end">
                             <strong  className="fs-5"> Twitter Bootstrap 4.4.1 </strong>
                             <p className="m-0 fs-5"> Built on top of the latest BS framework </p>
                        </div>
                    </Col>

                    <Col md={6} className="d-flex align-items-center">
                         <div className="avatar avatar-md ms-3"> 
                              <span className="bg-primary border avatar-title rounded-circle ">
                                  <iconEngineer />
                              </span>
                         </div>
                         <div className="text-start">
                             <strong className="fs-5"> JEDI Instructors </strong>
                             <p className="m-0 fs-5"> Learn from top-class instructors </p>
                         </div>
                    </Col>
                </Row>
                

                <div className="text-center fw-bolder m-4 p-4 ">
                    <a href="#" className="btn btn-light btn-lg"> View all </a>
                </div>

                <CardBody className="mb-4 bg-soft-primary">
                    <Row className="p-4">
                        <Col md={{ size: 6, offset: 3 }}>
                            <div className="mb-4">
                                <h4 className="text-center text-primary fw-bold"> Sign up and get new UI releases </h4>
                                <p className="text-center text-muted"> No spam. Only releases, updates and discounts </p>
                            </div>
                            <div className="d-flex">
                                <input type="text" className="form-control" placeholder="Your email address"/>
                                <a href="#" className="btn btn-secondary ms-3"> SUBCRIBE </a>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Container>
        </React.Fragment>
    )
}


export default HomePage
