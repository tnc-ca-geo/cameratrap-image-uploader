import React from 'react';
import { Switch, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import routes from '../../constants/routes.json';
import HomePage from '../pages/HomePage';
import CounterPage from '../pages/CounterPage';
import GlobalStyle from '../theme/globalStyle';
import theme from '../theme';

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </div>
  </ThemeProvider>
);
