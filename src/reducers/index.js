import { combineReducers } from 'redux';

import userDataReducer from './userDataReducer';
import imageDataReducer from './imageDataReducer';

export default combineReducers({
  userData: userDataReducer,
  imageData: imageDataReducer,
});