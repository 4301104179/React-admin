import React, { useState, useEffect, useCallback } from 'react'
import {
    Row,
    Col,
    Container,
    Input,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    ButtonDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    CardImg,
    Label,
    Collapse,
    ListGroup,
    ListGroupItem,
    Pagination,
    PaginationLink,
    PaginationItem
} from 'reactstrap'
import Breadcrumbs from '../../components/Common/Breadcumb'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import pic3 from '../../assets/images/courses/pic3.jpg'
import { getProducts, toggleModals } from './redux/action'
import { filterCourse } from './redux/utils'
import { createStructuredSelector } from 'reselect'
import { selectCourses, selectToggleModal } from './redux/selector'
import { isEmpty, map } from "lodash"
import axios from 'axios';
import Editcourse from './editCourse'
import DeleteCourse from './deleteCourse'

const api = axios.create({
    baseURL: `http://localhost:3000/Courses/`
})

let addArray = new Set()
const Course = ({ courseitems, getCourse, setModals, modals }) => {
    console.log(courseitems, "vodayaaa")



    const courseCategory =
        [
            "Bussiness",
            "3D Modeling",
            "UI UX Design",
            "Mobile Development",
            "Software Development"
        ]
    const level =
        [

            "Beginner",
            "Intermediate",
            "Advance",
            "Pro",

        ]
    const coursePrice =
        [
            "Paid Course",
            "Free Course",
        ]


    const [isOpenCourse, setIsopenCourse] = useState(true)

    const [isOpenLevel, setIsopenLevel] = useState(true)

    const [isOpenCoursePrice, setIsopenCoursePrice] = useState(true)

    const [coursedFilter, setFilterCourse] = useState([])

    const [isOpenDropdown, setIsOpenDropdown] = useState([])

    const [courseData, setCourseData] = useState([])
    console.log('vo day test', courseData)

    const [check, setCheck] = useState(
        new Array(courseCategory.length).fill(false)
    )

    const [checkedLevel, setCheckedLevel] = useState(
        new Array(level.length).fill(false)
    )

    const [arrayChecked, setArrayChecked] = useState([])

    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)

    const [modalDelete, setModalDelete] = useState([])
    console.log('vo test check', check)
    const toggleOpenCourse = () => {
        setIsopenCourse(!isOpenCourse)
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = coursedFilter.slice(indexOfFirstPost, indexOfLastPost)

    console.log('paginate', indexOfFirstPost, indexOfLastPost, currentPosts, postsPerPage, currentIndex)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(coursedFilter.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const getData = async () => {
        const getCourseData = await api.get('/')
        const courses = await getCourseData.data
        setCourseData(courses)
        console.log('vo test đầu', courses)
        getCourse(courses)
    }

    const modal_Delete = id => {
        console.log('choosed', id)
        const myset = new Set(modalDelete)
        if (myset.has(id)) {
            const result = modalDelete.filter(md => md.id == !id)
            setModalDelete(result)
        }
        else {
            setModalDelete([...modalDelete, id])
        }
    }


    // useEffect(async () => {
    //     const getCourseData = await fetch('http://localhost:3000/Courses')
    //     const courses = await getCourseData.json()
    //     console.log('vo test đầu', getCourseData, courses)
    //     getCourse(courses)
    // }, [])

    useEffect(() => {
        getData()
    }, [])



    useEffect(() => {
        console.log('vo test sau')
        if (!isEmpty(courseitems)) setFilterCourse(courseitems)
    }, [courseitems])

    const updateCourse = useCallback(async (course, item) => {
        const filter = courseData.find(cd => cd.category === item.type)
        console.log("vo update ko", course, item, filter)
         const update = await api.patch(`/${filter.id}`, {
             items: { courses: course }
         })
         getData()
    }, [courseData])

    const handleNextButton = () => {
        if (currentPage + 1 > (Math.ceil(coursedFilter.length / postsPerPage))) {
            return
        }
        else {
            setCurrentPage(currentPage + 1)
        }
    }

    const handleBackButton = () => {
        if (currentPage - 1 < 1) {
            return
        }
        setCurrentPage(currentPage - 1)
    }

    const toggleOpenLevel = () => setIsopenLevel(!isOpenLevel)

    const toggleOpenCoursePrice = () => setIsopenCoursePrice(!isOpenCoursePrice)

    const toggleOpenDropdown = (position) => {
        // console.log('vo day toggle', isOpenDropdown, position)
        // let find = isOpenDropdown.indexOf(position)
        // console.log('vo test find', find, isOpenDropdown.includes(position))
        // if (find > -1) {
        //     isOpenDropdown.splice(find, 1)
        // } else {
        //     isOpenDropdown.push(position)
        // }
        // setIsOpenD   ropdown(isOpenDropdown)
        const mySet = new Set(isOpenDropdown)
        console.log('vo test mySet', mySet)
        if (mySet.has(position)) {
            const result = isOpenDropdown.filter(d => d !== position)
            setIsOpenDropdown(result)
        } else {
            setIsOpenDropdown([...isOpenDropdown, position])
        }
    }



    const handleChecked = (position) => {
        const updateCheckedState = check.map((item, index) =>
            index === position ? !item : item
        )
        setCheck(updateCheckedState)
        // const newList = updateCheckedState.reduce(
        //     (newArr, currentState, index) => {
        //         if (currentState === true) {
        //             return [...newArr, courseCategory[index]]
        //         }
        //         return newArr
        //     },
        //     []
        // );
        updateCheckedState.forEach((check, index) => {
            if (check === true) {
                addArray.add(courseCategory[index])
            }
            else {
                addArray.delete(courseCategory[index])
            }
        })

        setFilterCourse(filterCourse(courseitems, addArray))
    }

    const handleLevelChecked = (idx) => {
        const updateCheckedState = checkedLevel.map((item, index) =>
            index === idx ? !item : item
        )
        setCheckedLevel(updateCheckedState)
        // const newList = updateCheckedState.reduce(
        //     (prev, currVa, currIdx) => {
        //         if (currVa === true) {
        //             return [...prev, level[currIdx]]
        //         }
        //         return prev
        //     }, [])
        updateCheckedState.forEach((check, index) => {
            if (check === true) {
                addArray.add(level[index])
            }
            else {
                addArray.delete(level[index])
            }
        })
        setFilterCourse(filterCourse(courseitems, addArray))
    }

    const handleModal = useCallback((index) => setModals(index), [])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="Minible" breadcrumbItem="All courses" />
                    <Row className="mb-3">
                        <Col md={3} sm={12}>
                            <span className="fw-bold fs-5">
                                <i className="fa fa-filter text-danger me-2"></i>
                                Filter Category
                            </span>
                        </Col>

                        <Col md={7} sm={8}>
                            <div className="fw-bold fs-5">
                                10 Courses are found
                            </div>
                        </Col>

                        <Col md={2} sm={4}>
                            <div className="d-flex align-items-center ">
                                <span className="me-2 fw-bold fs-5"> Order By: </span>
                                <div className="w-xs">
                                    <Input type="select" className="form-select">
                                        <option>None</option>
                                        <option>Price</option>
                                        <option>Date</option>
                                    </Input>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3} sm={12}>
                            <Card >
                                <div className="p-4">
                                    <h5 className="mb-0">
                                        <Link to="#" onClick={toggleOpenCourse} className="text-dark d-block" >Course Category <i className="mdi mdi-chevron-down float-end accor-down-icon"></i></Link>
                                    </h5>
                                    <div>
                                        <Collapse isOpen={isOpenCourse}>
                                            <div className="mt-4">
                                                {courseCategory.map((course, index) => (
                                                    <div className="form-check">
                                                        <Input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            checked={check[index]}
                                                            onChange={() => handleChecked(index)} />
                                                        <Label >
                                                            {course}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h5 className="mb-0">
                                        <Link to="#" onClick={toggleOpenLevel} className="text-dark d-block" >Level <i className="mdi mdi-chevron-down float-end accor-down-icon"></i></Link>
                                    </h5>
                                    <div>
                                        <Collapse isOpen={isOpenLevel}>
                                            <div className="mt-4">
                                                {level.map((lev, index) => (
                                                    <div className="form-check">
                                                        <Input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            checked={checkedLevel[index]}
                                                            onChange={() => handleLevelChecked(index)}
                                                        />

                                                        <Label>
                                                            {lev}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h5 className="mb-0">
                                        <Link to="#" onClick={toggleOpenCoursePrice} className="text-dark d-block" >Course Price <i className="mdi mdi-chevron-down float-end accor-down-icon"></i></Link>
                                    </h5>
                                    <div>
                                        <Collapse isOpen={isOpenCoursePrice}>
                                            <div className="mt-4">
                                                {coursePrice.map((cp, index) => (
                                                    <div className="form-check">
                                                        <Input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                        />

                                                        <Label>
                                                            {cp}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>

                            </Card>
                        </Col>

                        <Col md={9}>
                            <Row>
                                {!isEmpty(coursedFilter) &&
                                    currentPosts.map((cours, index) => (
                                        <Col md={4} sm={12} key={index}>
                                            <Card>
                                                <CardImg top width="100%" src={cours.image} alt="Card image course" />
                                                <CardBody>
                                                    <h4 className="text-truncate" data-toggle="tooltip" title={cours.title}>
                                                        {cours.title}
                                                    </h4>
                                                    <div className="mt-3">
                                                        <span className="p-2 border rounded fw-bold">
                                                            <strong> 3.5/5 </strong>
                                                            <a href="#" className="active"> <i className="mdi mdi-star"></i> </a>
                                                        </span>

                                                        <span className="border rounded p-2 ms-2">
                                                            <a href="#" className="ml-auto"> <i className="fa fa-shopping-cart"></i> </a>
                                                        </span>

                                                        <ListGroup className="mt-3">
                                                            <ListGroupItem className="text-muted border-top-0 border-end-0 border-start-0 px-2 d-flex justify-content-between">
                                                                Type
                                                                <strong> {cours.type} </strong>
                                                            </ListGroupItem>

                                                            <ListGroupItem className="text-muted border-top-0 border-end-0 border-start-0 px-2 d-flex justify-content-between">
                                                                Duration:
                                                                <strong> {cours.duration} </strong>
                                                            </ListGroupItem>

                                                            <ListGroupItem className="text-muted border-top-0 border-end-0 border-start-0 px-2 d-flex justify-content-between">
                                                                <i className="mdi mdi-book"></i>
                                                                <strong> {cours.lesson} </strong>
                                                            </ListGroupItem>

                                                            <ListGroupItem className="text-muted border-top-0 border-bottom-0 border-end-0 border-start-0 px-2 d-flex justify-content-between">
                                                                <i className="mdi mdi-human-male-female"></i>
                                                                <strong> {cours.student} </strong>
                                                            </ListGroupItem>
                                                        </ListGroup>
                                                    </div>

                                                    <Dropdown isOpen={isOpenDropdown.includes(index)} toggle={() => toggleOpenDropdown(index)}>
                                                        <DropdownToggle caret className="rounded-pill bg-transparent border-purple w-50 text-dark">
                                                            <strong className="text-dark text-uppercase"> ACTION </strong>
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem onClick={() => handleModal(index)}> Edit </DropdownItem>
                                                            <DropdownItem onClick={() => modal_Delete(index)}> Delete </DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                    <Editcourse
                                                        modals={modals.includes(index)}
                                                        setModals={handleModal}
                                                        updateCourse={updateCourse}
                                                        index={modals}
                                                        cours={cours}
                                                        coursedFilter={coursedFilter}
                                                    />

                                                    <DeleteCourse
                                                        modals={modalDelete.includes(index)}
                                                        setModalDelete={() => modal_Delete(index)}
                                                    />
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    ))}
                            </Row>

                            <Pagination>
                                <PaginationItem>
                                    <PaginationLink
                                        first
                                        href="#"
                                    />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        previous
                                        onClick={handleBackButton}
                                    />
                                </PaginationItem>
                                {pageNumbers.map(number => (
                                    <PaginationItem key={number}>
                                        <PaginationLink onClick={() => paginate(number)} href="#">
                                            {number}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        next
                                        onClick={handleNextButton}
                                    />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        last
                                    />
                                </PaginationItem>
                            </Pagination>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>

    )
}

const mapStateToProps = createStructuredSelector({
    courseitems: selectCourses,
    modals: selectToggleModal
})

const mapDispatchToProps = dispatch => ({
    getCourse: course => dispatch(getProducts(course)),
    setModals: index => dispatch(toggleModals(index))
    // filterCourse: (list) => dispatch(filterCourse(list))
})


export default connect(mapStateToProps, mapDispatchToProps)(Course)
