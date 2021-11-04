import { createSelector } from "reselect";

const selectCourse = state => state.course

export const selectCourseProducts = createSelector(
    [selectCourse],
    course => course ? course.products : null
)

export const selectCourseItem = createSelector(
    [selectCourseProducts],
    products =>  products.map(product =>  product.items) 
)

export const selectToggleModal = createSelector(
    [selectCourse],
    course => course.toggleModals
)

export const selectCourses = createSelector(
    [selectCourseItem],
    items => {
        const courseItems = items.map(item => item.courses)
        let course = [];
         for(var i = 0; i < courseItems.length; i++) {
             course.push(...courseItems[i])
         }
        return course
    }
)
