
import Map from './components/Map.jsx';
import React from "react";
import "./App.css";
import Start from "./components/Start";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Map />
      <BrowserRouter>
      
        <Start />
     
      </BrowserRouter>
    </div>
  );
}

export default App;
