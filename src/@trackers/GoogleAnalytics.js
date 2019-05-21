import { trackersID } from '../config';

/**
 * Performs the tracking calls to Google Analytics.
 * Utilizing Segment IO Analytics Integration.
 *
 * @module GoogleAnalytics
 * @class
 * @internal
 */
class GoogleAnalytics {
    constructor(options = {}) {
        this.name = 'Google Analytics';
        this._loaded = false;
        this.options = options;
        // this.window.gtag("config", "UA-139545655-1");

    }

    pageView(eventName, params) {
        if (!trackersID.UA) return;
        return new Promise((resolve, reject) => {
            window.gtag('config', `${trackersID.UA}`, {
                page_path: params.pathname,
            });
            resolve();
        });
    }

    track(eventName, params) {
        console.log(eventName)
        return new Promise((resolve, reject) => {
            window.gtag('event', eventName, params);
            resolve();
        });
    }


}

export default GoogleAnalytics;
