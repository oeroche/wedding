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
        console.log(params)
        window.gtag('config', `${trackersID.UA}`, {
            page_path: params.pathname,
        });
        return;
    }

    user(userId) {
        return new Promise((resolve) => {
            this.userId = userId;
            resolve({
                userId,
            });
        });
    }

    track(eventName, params) {
        return new Promise((resolve, reject) => {
            window.gtag('event', eventName, params);
            resolve();
        });
    }


    _track(eventName, params) {
        if (eventName === 'pageView') {
            console.log('params.category, params', params.category, params);
        }
    }

    _load() {
        return (
            console.log('hello from _load')
        );
    }
}

export default GoogleAnalytics;
