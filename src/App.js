import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from './Containers/HomeContainer'
import GAListener from './Containers/GAListener'



function App() {
  return (
    <BrowserRouter>
      <GAListener>
        <Route exact to='/' component={HomeContainer}/>
      </GAListener>
    </BrowserRouter>
  );  
}

export default App;
