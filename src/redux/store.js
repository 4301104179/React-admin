import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
)

export default store