import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { isLoggedIn } from './@helpers/login';
import HomeContainer from './Containers/HomeContainer'
import GAListener from './Containers/GAListener'

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
    <GAListener>
      <Route exact to='/' component={HomeContainer}/>
    </GAListener>
    </BrowserRouter>
  );
}

export default App;
