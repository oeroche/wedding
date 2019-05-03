import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { isLoggedIn } from './@helpers/login';
import HomeContainer from './Containers/HomeContainer'
import {trackersID} from '../config'
import GAListener from './@trackers/GAListener'

const PrivateRoute = ({ component: ComponentToRender, ...rest }) => (
  <Route
      {...rest}
      render={(props) => {
          if (!isLoggedIn()) {
              return <Redirect to="/login" />;
          }
          return <ComponentToRender {...props} />;
      }}
  />
);

function App() {
  return (
    <BrowserRouter>
    <GAListener trackersID={trackersID}>
      <Route exact to='/' component={HomeContainer}/>
    </GAListener>
    </BrowserRouter>
  );
}

export default App;
