import { createStore } from "redux";
import todoreducer from "./todoreducer";

const init = { todo: [], loading: false };
const store = createStore(todoreducer, init);

export default store