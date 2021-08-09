import { combineReducers } from 'redux';
import { peopleReducer } from './people.reducer';

export const reducers = combineReducers({ peopleReducer });