import types from './types';

function increment() {
  return {
    type: types.INCREMENT_COUNTER
  };
}

function decrement() {
  return {
    type: types.DECREMENT_COUNTER
  };
}

function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export default {
  increment,
  decrement,
  incrementAsync
};
