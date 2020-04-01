import { createStore } from "redux";
import initial from "./initial";
import reducer from "./reducer";



export default createStore(
    reducer, 
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());