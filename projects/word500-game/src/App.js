import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Game from './components/Game';

const generateClassName = createGenerateClassName({
  productionPrefix: 'word',
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Game} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};