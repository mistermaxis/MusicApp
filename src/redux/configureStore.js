import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import genresReducer from './genres/genres';
import albumsReducer from './albums/albums';
import albumReducer from './songs/songs';

const reducers = combineReducers({ genresReducer, albumsReducer, albumReducer });

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger),
);

export default store;
