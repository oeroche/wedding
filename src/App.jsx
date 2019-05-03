import React from 'react';
import './App.css';
import {
    Route, Redirect, Switch, withRouter,
} from 'react-router-dom';
import { metrics } from 'react-metrics';
import { isLoggedIn } from './@helpers/login';
import HomeContainer from './Containers/HomeContainer';
import GoogleAnalytics from './@trackers/GoogleAnalytics';
import { trackersID } from './config';


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


class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/coucou" component={HomeContainer} />
            </Switch>
        );
    }
}

export default withRouter(metrics(config)(App));
