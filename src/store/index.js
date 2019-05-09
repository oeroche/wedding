import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import watcherSaga from '../sagas';
import globalReducer from '../reducers';

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

/** Create middlewares for redux */
const middlewares = applyMiddleware(sagaMiddleware);

/** Create redux store */
const store = createStore(
    globalReducer,
    compose(middlewares),
);

/** run saga watchers */
sagaMiddleware.run(watcherSaga);
export default store;
