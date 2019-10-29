import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import NavigationContainer from '../Containers/NavigationContainer';
import AccueilView from './AccueilView';
import InformationView from './InformationsView';
import PhotoView from './PhotoView';
import FAQView from './FAQView';
import RSVPFormContainer from '../Containers/RSVPFormContainer';

class MainView extends Component {
    render() {
        return (
            <div>
                <NavigationContainer />
                <div style={{ paddingTop: 100, maxWidth: 1000, margin: 'auto' }}>
                    <Switch>
                        <Route path="/accueil" component={AccueilView} />
                        <Route path="/informations" component={InformationView} />
                        <Route path="/photos" component={PhotoView} />
                        <Route path="/faq" component={FAQView} />
                        <Route path="/rsvp" component={RSVPFormContainer} />
                    </Switch>
                </div>
            </div>
        );
    }
}

MainView.propTypes = {};

export default MainView;
