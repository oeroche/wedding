import React from 'react';
import './App.css';
import {
    withRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { isLoggedIn } from './@helpers/login';
import HomeContainer from './Containers/HomeContainer';
import LoginContainer from './Containers/LoginContainer';
import SignUpContainer from './Containers/SignUpContainer';
import ForgotPasswordContainer from './Containers/ForgotPasswordContainer';
// import GoogleAnalytics from './@trackers/GoogleAnalytics';
// import { trackersID } from './config';
import ErrorsDisplayContainer from './Containers/ErrorsDisplayContainer';
import { store, persistor } from './store';
import LandingView from './Views/LandingView';
import MainView from './Views/MainView';

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

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ErrorsDisplayContainer />
            <Switch>
                <Route exact path="/landing" component={LandingView} />
                <Route path="/" component={MainView} />
            </Switch>
        </PersistGate>
    </Provider>
);

export default withRouter(App);
