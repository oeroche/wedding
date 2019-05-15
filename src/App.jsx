import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {
    Redirect, withRouter, Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { metrics } from 'react-metrics';
import { isLoggedIn } from './@helpers/login';
import HomeContainer from './Containers/HomeContainer';
import GoogleAnalytics from './@trackers/GoogleAnalytics';
import { trackersID } from './config';
import ErrorsDisplayContainer from './Containers/ErrorsDisplayContainer';


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

const config = {
    vendors: [{
        name: 'Google Analytics',
        api: new GoogleAnalytics({
            trackingId: trackersID.UA,
        }),
    }],
    pageViewEvent: 'pageLoad',
    pageDefaults: ({ pathname }) => ({
        siteName: 'My Web Site',
        pathname, // @TODO set dynamic website name along with package.json
    }),
};


const App = ({ store }) => (
    <Provider store={store}>
        <ErrorsDisplayContainer />
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/coucou" component={HomeContainer} />
        </Switch>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default withRouter(metrics(config)(App));
