import React from "react";
import "./App.css";
// import Start from "./components/Start";
import { BrowserRouter } from "react-router-dom";
import Modals from './components/Modals'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Modals id="1383622213"/>     
      </BrowserRouter>
    </div>
  );
}

export default App;
