/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withRouter} from 'react-router-dom'

const sendPageView = (location, trackersID) => {
    try {
        if(trackersID.UA) {
            window.gtag('config', `${trackersID.UA}`, {
                page_path: location,
            });
        }
        if(trackersID.UA) {           
            window.gtag('config', `${trackersID.AW}`, {
                page_path: location,
            });
        }
    } catch (e) {
        console.log(e);
    }
};

class GAListener extends React.Component {
    componentDidMount() {
        const { trackersID } = this.props
        sendPageView(this.props.history.location.pathname, trackersID);
    }

    componentDidUpdate() {
        const { trackers } = this.props
        sendPageView(this.props.history.location.pathname, trackersID);
    }

    render() {
        const { children } = this.props;
        return children;
    }
}

export default withRouter(GAListener);
