import { combineReducers } from "redux"
import { exponentialReducer } from "./reducers/exponentialReducer"

export const rootReducer = combineReducers({
    exponentialReducer
})