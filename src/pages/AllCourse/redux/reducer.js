import { toggleModals } from './action'
import {
    GET_PRODUCTS,
    TOGGLE_MODALS,
    FILTER_COURSE
} from './actionType'
// import { filterCourse } from './utils'

const initialState = {
    products: [],
    toggleModals: []
}
console.log('theo dõi product', initialState.products)
export const courseReducer = (state = initialState, action) => {
        switch (action.type) {
            case GET_PRODUCTS:
                return {
                    ...state,
                    products: action.payload
                }
            case TOGGLE_MODALS: 
            console.log('có toggle day ko', state.toggleModals)
            const mySet = new Set(state.toggleModals)
            if(mySet.has(action.payload)){
                return {
                    ...state,
                    toggleModals: state.toggleModals.filter(tg => tg !== action.payload)
                }
            } else {
                return {
                    ...state,
                    toggleModals: [...state.toggleModals, action.payload]
                }
            }
            default:
                return state;              
        }  
}