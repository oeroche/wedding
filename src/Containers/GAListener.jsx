/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withRouter} from 'react-router-dom'

const sendPageView = (location) => {
    try {
        window.gtag('config', 'UA_MEASUREMENT_ID', {
            page_path: location,
        });
        window.gtag('config', 'AW_MEASUREMENT_ID', {
            page_path: location,
        });
    } catch (e) {
        console.log(e);
    }
};

class GAListener extends React.Component {
    componentDidMount() {

        sendPageView(this.props.history.location.pathname);
    }

    componentDidUpdate() {
        sendPageView(this.props.history.location.pathname);
    }

    render() {
        const { children } = this.props;
        return children;
    }
}

export default withRouter(GAListener);
