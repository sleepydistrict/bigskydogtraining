import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Classes from './Classes';
import Admin from './Admin';
import Clients from './Clients';
import AddClient from './AddClient';
import EditClient from './EditClient';

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Classes} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/clients' component={Clients} />
        <Route exact path='/clients/add' component={AddClient} />
        <Route exact path='/clients/edit/:id' component={EditClient} />
    </Switch>
  </main>    
)

export default Main;
