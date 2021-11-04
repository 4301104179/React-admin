import {
    GET_PRODUCTS,
    TOGGLE_MODALS,
    FILTER_COURSE
} from './actionType'

export const getProducts = products => ({
    type: GET_PRODUCTS,
    payload: products
})

export const toggleModals = id => ({
    type: TOGGLE_MODALS,
    payload: id
})

// export const filterCourse = (payload) => ({
//     type: FILTER_COURSE,
//     payload
// })