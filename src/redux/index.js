import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';

import {libraries, selectedLibraryId} from './reducers';

const rootReducer = combineReducers({
  libraries,
  selectedLibraryId,
});
const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({
    collapsed: true
  })
);

const devToolsWrappedMiddleWare = composeWithDevTools({realtime: true})(middleware)
export default createStore(rootReducer, devToolsWrappedMiddleWare);
export * from './reducers';
