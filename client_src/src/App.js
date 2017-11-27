import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';


const App = () => (
  <div className="container-fluid">
    <Navbar />
    <div>
      <Main />
    </div>
  </div>  
)

export default App;
