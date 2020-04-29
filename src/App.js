import React from "react";
import "./App.css";
// import Start from "./components/Start";
import { BrowserRouter } from "react-router-dom";
import CardModal from './components/CardModal'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <CardModal city="Londres" country="United Kingdom" video="https://webcams.windy.com/webcams/public/embed/player/1259146823/lifetime"/>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
