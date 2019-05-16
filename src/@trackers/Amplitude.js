import { trackersID } from '../config';
import amplitude from "amplitude-js"

class Amplitude {
    constructor(options = {}) {
        this.name = 'Amplitude';
        this._loaded = false;
        this.options = options;
        amplitude.getInstance().init(trackersID.AM);
    }

          
    pageView(eventName, params) {
        if (!trackersID.AM) return;
        amplitude.getInstance().logEvent("PAGE_VIEW")
        return;
    }

    track(eventName, params) {
        amplitude.getInstance().logEvent(eventName);
    }
}

export default Amplitude;
