export function isIE() {
    let ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}

export function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
        var version = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        version = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)];
        if (version.length && version[0] >= 11) return false;
        return true;
    }
}