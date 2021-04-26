import { createStore, applyMiddleware } from 'redux';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import sagas from '../sagas';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  //   'root',
  (state: any) => state.nav
);

const store = createStore(
  reducers,
  applyMiddleware(loggerMiddleware, middleware, thunk, sagaMiddleware)
);

// run the saga
sagaMiddleware.run(sagas);

export default store;
