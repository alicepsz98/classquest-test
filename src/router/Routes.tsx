import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormPage from '../pages/FormPage/index';
import SuccessPage from '../pages/SuccessPage/index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={FormPage} />
      <Route path="/cadastro-realizado" exact component={SuccessPage} />
    </Switch>
  )
}

export default Routes;