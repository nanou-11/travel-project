
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Start from "./components/Start";
import MapWorld from './components/MapWorld';
import EndPage from './components/EndPage';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Start}/>
          <Route path='/map' component={MapWorld}/>
          <Route path='/end' component={EndPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
