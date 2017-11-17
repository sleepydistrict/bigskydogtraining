import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Classes from './Classes';
import Clients from './Clients';
import ClientDetails from './ClientDetails';
import AddClient from './AddClient';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Classes} />
      <Route exact path='/clients' component={Clients} />
      <Route exact path='/clients/add' component={AddClient} />
      <Route exact path='/clients/:id' component={ClientDetails} />
    </Switch>
  </main>
)

export default Main;