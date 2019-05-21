import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import watcherSaga from '../sagas';
import globalReducer from '../reducers';

/** Redux Persist */
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, globalReducer);

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

/** Create middlewares for redux */
const middlewares = applyMiddleware(sagaMiddleware);

/** Create redux store */
export const store = createStore(
    persistedReducer,
    compose(middlewares, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

export const persistor = persistStore(store)

/** run saga watchers */
sagaMiddleware.run(watcherSaga);

