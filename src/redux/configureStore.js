import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import genresReducer from './genres/genres';

const reducers = combineReducers({ genresReducer });

const store = createStore(
  reducers,
  applyMiddleware(thunk),
)

export default store;