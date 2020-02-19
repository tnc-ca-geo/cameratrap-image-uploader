import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import counter from './counter';

const rootReducer = history =>
  combineReducers({
    counter,
    router: connectRouter(history)
  });

export default rootReducer;
