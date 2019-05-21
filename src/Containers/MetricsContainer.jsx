import React, { Component } from 'react'
import { trackersID } from '../config'
import GoogleAnalytics from '../@trackers/GoogleAnalytics'
import { metrics } from 'react-metrics'

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

class MetricsContainer extends Component {
  render() {
	return null
  }
}

export default metrics(config)(MetricsContainer)