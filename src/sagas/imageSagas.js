import {takeEvery, call, put} from 'redux-saga/effects';
import { imageApi } from '../api';

import { IMAGE_FETCH_REQUESTED, IMAGE_FETCH_SUCCESS, IMAGE_FETCH_FAILURE } from '../actions/constants';

function* imageSaga() {
  try {
    const response = yield call(imageApi.fetchImages);
    const { data } = response;
    yield put({IMAGE_FETCH_SUCCESS, data});
  } catch (e) {
    yield put({IMAGE_FETCH_FAILURE, message: e.message});
  }
}

export default function* watchImageSaga() {
  yield takeEvery(IMAGE_FETCH_REQUESTED, imageSaga);
}