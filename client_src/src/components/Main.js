import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Classes from './Classes';
import Admin from './Admin';
import Clients from './Clients';
import ClassEdit from './ClassEdit';

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Classes} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/clients' component={Clients} />
        <Route exact path='/classes/edit' component={ClassEdit} />
    </Switch>
  </main>    
)

export default Main;
