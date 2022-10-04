import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Calc from './components/Calc';

const generateClassName = createGenerateClassName({
  productionPrefix: 'calc',
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Calc} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};