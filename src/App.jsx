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

// const config = {
//     vendors: [{
//         name: 'Google Analytics',
//         api: new GoogleAnalytics({
//             trackingId: trackersID.UA,
//         }),
//     }],
//     pageViewEvent: 'pageLoad',
//     pageDefaults: ({ pathname }) => ({
//         siteName: 'My Web Site',
//         pathname, // @TODO set dynamic website name along with package.json
//     }),
// };

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ErrorsDisplayContainer />
            <Switch>
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/signup" component={SignUpContainer} />
                <PrivateRoute path="/home" component={HomeContainer} />
                <Route path="/forgotpassword" component={ForgotPasswordContainer} />
            </Switch>
        </PersistGate>


    </Provider>
);

export default withRouter(App);
