import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;
