// import { createSelector } from 'reselect';

const getCount = state => state.getIn(['counter', 'count']);

export default {
  getCount
};
