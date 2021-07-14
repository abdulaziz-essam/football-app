 import { connect } from 'react-redux'
import { combineReducers,createStore, applyMiddleware } from "redux";
// import thunk from 'react-thunk';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";


const initialState = {

players:[]
,name:'',
age:0
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_PLAYERS":
            return {
                
                ...state
                , players: action.payload
                
                

            }
        case "FETCH_DATA":
            return {

                ...state
                , players: action.payload



            }
        default:
            return state;
    }
}




const compRed = combineReducers({
    players:reducer
})
const middleware = [thunk];

const store = createStore(compRed, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store





//we import this file in index.js to use it with combine reducer
