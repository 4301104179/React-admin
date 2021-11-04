import { combineReducers } from "redux";
import { courseReducer } from "../pages/AllCourse/redux/reducer";

const rootReducer = combineReducers({
    course: courseReducer
})

export default rootReducer