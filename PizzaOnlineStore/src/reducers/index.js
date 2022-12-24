import { combineReducers } from "redux";
import pizza from './pizza'
import nav from "./nav";

const reducers = combineReducers({
    pizza,
    nav
})

export default reducers