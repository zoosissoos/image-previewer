import {takeEvery, call, put} from 'redux-saga/effects';
import { imagesRequest } from '../api';

import { IMAGE_FETCH_REQUESTED } from '../actions/constants';
import { fetchImagesSuccess, fetchImagesError} from '../actions'


function* imageSaga(action) {
  try {
    const {page, limit} = action;
    const response = yield call(imagesRequest, page, limit);
    yield put(fetchImagesSuccess(response));
  } catch (err) {
    console.log(err)
    yield put(fetchImagesError(err));
  }
}

export default function* watchImageSaga() {
  yield takeEvery(IMAGE_FETCH_REQUESTED, imageSaga);
}