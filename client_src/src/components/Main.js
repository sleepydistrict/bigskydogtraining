import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Classes from './Classes';
import Admin from './Admin';
import Clients from './Clients';
import ClassEdit from './ClassEdit';
import AddClient from './AddClient';
import ClassId from './ClassId';

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Classes} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/clients' component={Clients} />
        <Route exact path='/classes/edit' component={ClassEdit} />
        <Route exact path='/clients/add' component={AddClient} />
        <Route exact path='/classes/id:' component={ClassId} />
    </Switch>
  </main>    
)

export default Main;
