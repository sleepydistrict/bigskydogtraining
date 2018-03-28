import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Classes from './Classes';
import Admin from './Admin';
import Clients from './Clients';
import AddClient from './AddClient';
import AddClass from './AddClass';
import EditClient from './EditClient';
import EditClass from './EditClass';
import ClassList from './ClassList';
import Login from './Login';

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Classes} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/clients' component={Clients} />
        <Route exact path='/classes' component={ClassList} />
        <Route exact path='/clients/add' component={AddClient} />
        <Route exact path='/classes/add' component={AddClass} />
        <Route exact path='/clients/edit/:id' component={EditClient} />
        <Route exact path='/classes/edit/:id' component={EditClass} />
    </Switch>
  </main>    
)

export default Main;
