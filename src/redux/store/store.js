import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";



const reducers = combineReducers({
    loginReducer
});


export const store = createStore(
    reducers,
    applyMiddleware(thunk)
    );