import React from 'react';
import HomePage from './pages/homepage/homepage-components'; 
import {Switch, Route} from 'react-router-dom'
import './App.css';
const Hatspage =() =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={Hatspage}/>
      </Switch>

     
    </div>
  );
}

export default App;