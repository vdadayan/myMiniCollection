import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    alco: alcoReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))