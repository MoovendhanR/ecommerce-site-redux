import {legacy_createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";
import ProductReducer from "./products/reducer.js"
import authReducer from "./auth/reducer.js"
const rootReducer = combineReducers({
    ecommerceData:ProductReducer,
    authReducer
});
 
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__||compose;

export const store =legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);