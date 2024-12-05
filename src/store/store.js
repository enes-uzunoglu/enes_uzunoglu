import {createStore,combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {dataApiReducer,appReducer} from './reducers';
const rootReducers = combineReducers({dataApiReducer,appReducer});
const store = createStore(rootReducers,applyMiddleware(thunk));
export default store;