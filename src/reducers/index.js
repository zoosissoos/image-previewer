import { combineReducers } from 'redux';
import imageDataReducer from './imageDataReducer';

export default combineReducers({
  imageData: imageDataReducer,
});