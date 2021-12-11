import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {restaurantListReducer} from './reducers/restaurantReducers'
const reducers=combineReducers({

    restaurantReducer: restaurantListReducer
})

const initialState={};
const middleWare=[thunk];

const store=createStore(reducers,initialState,applyMiddleware(...middleWare));

export default store