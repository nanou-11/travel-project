
import Map from './components/Map.jsx';
import React from "react";
import "./App.css";
// import Start from "./components/Start";
import { BrowserRouter } from "react-router-dom";
import Modals from './components/Modals'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Map />
     
      </BrowserRouter>
    </div>
  );
}

export default App;
