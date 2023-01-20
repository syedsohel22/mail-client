import Reducer from "./Reducer";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
export const Store = legacy_createStore(Reducer, applyMiddleware(thunk));

console.log(Store.getState());
