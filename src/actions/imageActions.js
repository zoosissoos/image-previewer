import { IMAGE_FETCH_REQUESTED, IMAGE_FETCH_SUCCESS, IMAGE_FETCH_FAILURE } from './constants';


export const fetchImages = (page, limit) => {
  return {
    type:  IMAGE_FETCH_REQUESTED,
    page,
    limit
  }
};

export const fetchImagesSuccess = (data) => {
  return {
    type:  IMAGE_FETCH_SUCCESS,
    data
  }
};

export const fetchImagesError = (err) => {
  return {
    type:  IMAGE_FETCH_FAILURE,
    err
  }
};