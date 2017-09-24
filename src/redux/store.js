import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({});
const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({
    collapsed: true
  })
);
export default createStore(reducer, composeWithDevTools(middleware));
