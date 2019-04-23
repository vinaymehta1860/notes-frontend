import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerStore from "./reducers";

const middleware = [thunk];
const store = createStore(reducerStore, {}, applyMiddleware(...middleware));

export default store;
