import { createStore, combineReducers } from "redux";
import todoreducer from "./todoreducer";
import completereducer from "./completetodo/completereducer";
import authenticatereducer from "./authentication/authenticatereducer";


const rootreducer = combineReducers({ todoreducer, authenticatereducer, completereducer })
const store = createStore(rootreducer);

export default store