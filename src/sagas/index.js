import { all } from 'redux-saga/effects';
import watchImageSaga from './imageSagas';

export default function* rootSaga() {
  yield all([
    watchImageSaga()
  ])
}