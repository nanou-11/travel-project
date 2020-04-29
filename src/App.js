import React from "react";
import "./App.css";
import Start from "./components/Start";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Start />
     
      </BrowserRouter>
    </div>
  );
}

export default App;
