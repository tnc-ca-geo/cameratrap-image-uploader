import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { hot } from 'react-hot-loader/root';
import Routes from '../routes/Routes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

// TODO: figure out best practice for making eslint and react proptypes happy:
// https://github.com/yannickcr/eslint-plugin-react/issues/904
Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default hot(Root);
