import { combineReducers } from 'redux';

import viewReducer from './viewReducer';

export default combineReducers({
  view: viewReducer
});
