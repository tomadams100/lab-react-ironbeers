import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home  from './views/Home';
import Beers  from './views/Beers';
import Random  from './views/Random';
import New  from './views/New';
import Beer_Details  from './views/Beer_Details';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path={"/beers"} render={(props)=><Beers {...props} />} />
      <Route exact path={"/beers/:id"} render={(props)=><Beer_Details {...props} />} />
      <Route exact path={"/random"} render={(props)=><Random {...props} />} />
      <Route exact path={"/new"} render={(props)=><New {...props} />} />
      <Route exact path={"/"} render={(props)=><Home {...props} />} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
