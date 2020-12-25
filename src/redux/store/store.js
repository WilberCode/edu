import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { postReducer } from './reducers'; 


export default  createStore( 
  combineReducers({postReducer}),
  composeWithDevTools(applyMiddleware(thunk)))
