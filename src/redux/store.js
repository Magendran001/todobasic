import { createStore, combineReducers } from "redux";
import todoreducer from "./todoreducer";
import authenticatereducer from "./authentication/authenticatereducer";


const rootreducer = combineReducers({ todoreducer, authenticatereducer })
const store = createStore(rootreducer);

export default store