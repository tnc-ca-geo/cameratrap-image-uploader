import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '.';
// import { counterMiddleware } from './counter';

const history = createHashHistory();

const configureStore = initialState => {
  const store = createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware
      // counterMiddleware
    )
  );
  return store;
};

export default { configureStore, history };
