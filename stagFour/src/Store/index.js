import { createStore, applyMiddleware } from "redux"
import AuthReducer from "../Store/Reducer/AuthReducer"
import thunk from "redux-thunk"


const middleware = applyMiddleware(thunk)
const store = createStore(AuthReducer, middleware)

store.subscribe(() => {
    console.log("store state", store.getState())
})

export default store