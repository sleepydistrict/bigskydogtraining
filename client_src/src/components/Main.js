import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Classes from './Classes';
import Admin from './Admin';

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Classes} />
        <Route exact path='/admin' component={Admin} />
    </Switch>
  </main>    
)

export default Main;
