/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const sendPageView = (location) => {
    try {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: location,
        });
        window.gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: location,
        });
    } catch (e) {
        console.log(e);
    }
};

class GAListener extends React.Component {
    componentDidMount() {
        sendPageView();
    }

    componentDidUpdate() {
        sendPageView();
    }

    sendPageView() {
        const { history } = this.props;
        try {
            window.gtag('config', 'GA_MEASUREMENT_ID', {
                page_path: history.location.pathname,
            });
            window.gtag('config', 'GA_MEASUREMENT_ID', {
                page_path: history.location.pathname,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { children } = this.props;
        return children;
    }
}

export default withRouter(GAListener);

GAListener.propTypes = {
    history: PropTypes.array.isRequired,
    children: PropTypes.object.isRequired,
};
