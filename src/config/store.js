import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


//compose enhancers together as one function
const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// mount it on the Store
export const store = createStore(
  reducer,
  {},
  composedEnhancers
);

// then run the saga
sagaMiddleware.run(rootSaga)
