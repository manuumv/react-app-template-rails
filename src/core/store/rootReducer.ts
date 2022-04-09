import { combineReducers } from 'redux';
import { countReducer } from 'reducers/count/count.reducer';
import { ReduxState } from '../model/reduxState';

export const rootReducer = combineReducers<ReduxState>({
  count: countReducer,
});
