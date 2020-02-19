import { Map } from 'immutable';
import types from './types';

const initialState = Map({
  count: 0
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      const currCount = state.getIn(['count']);
      return state.set('count', currCount + 1);
    }
    case types.DECREMENT_COUNTER: {
      const currCount = state.getIn(['count']);
      return state.set('count', currCount - 1);
    }
    default: {
      return state;
    }
  }
};
