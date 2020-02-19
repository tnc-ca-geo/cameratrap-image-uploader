// Index file specifies what gets exported from the duck folder. It will:
//    - export as default the reducer function of the duck.
//    - export as named exports the selectors and the operations.
//    - export the types if they are needed in other ducks.

import reducer from './reducer';

export { default as counterSelectors } from './selectors';
// export { default as counterMiddleware } from './middleware';
export { default as counterTypes } from './types';
export { default as counterActions } from './actions';

export default reducer;
