import {constants} from '../config';

export default class VMTContainer {

    constructor(options) {
        let root = document.getElementById(options.containerId);
        if (!this.isValidParams(options, root)) {
            return;
        }
        if (root.children && root.children.length > 0) {
            while (root.firstChild) {
                root.removeChild(root.lastChild);
            }
        }
        this.initIframe({root, ...options});
    }

    // ------------------------------------------------------------------------------------------
    // PUBLIC:
    // ------------------------------------------------------------------------------------------

    close(destroyServer) {
        let iframe = this.root.getElementsByTagName('iframe')[0];
        this.root.removeChild(iframe);
        destroyServer();
    }

    toggleFullScreen() {
        let iframe = document.querySelector(`iframe[name=\"${constants.IFRAME_NAME}\"]`);
        if (this.initialStyles) {
            iframe.style.cssText = this.initialStyles;
            this.initialStyles = null;
        } else if (this.initialStyles === '') {
            iframe.removeAttribute('style');
            this.initialStyles = null;
        } else {
            this.initialStyles = iframe.style.cssText;
            iframe.style.cssText = constants.styles.fullScreen;
            iframe.height = (window.orientation === 90 || window.orientation === -90) ? "100%" : window.innerHeight;
        }
    }

    // ------------------------------------------------------------------------------------------
    // PRIVATE:
    // ------------------------------------------------------------------------------------------

    isValidParams(options, root) {
        if (!options.memberId || !options.frontPoint || root === null) {
            let errorMessage = root === null ?
                constants.messages.noContainer(options.containerId) :
                constants.messages.missedParams;
            console.error(errorMessage);
            return false;
        }
        return true;
    }

    initIframe(options) {
        let {root} = options;
        this.root = root;
        this.options = options;

        let iframe = document.createElement('iframe');
        iframe.name = constants.IFRAME_NAME;
        iframe.style.cssText = options.styles || constants.styles.iframe;
        iframe.frameBorder = 0;
        iframe.src = this.getIframeUrl(options);

        this.showSpinner();

        const existingIframe = root.getElementsByTagName('iframe')[0];
        if (existingIframe) {
            root.removeChild(existingIframe);
        }

        root.appendChild(iframe);
        iframe.focus();
    }

    getIframeUrl({frontPoint, memberId, eventId, venueId, mode, seatslimit, hideCloseBtn, hideExpandBtn, timeZone, allowIconsEdit}) {
        return `${frontPoint}?member=${memberId}${eventId ? '&event=' + eventId : ''}&venue=${venueId}${mode ? '&mode=' + mode : ''}${seatslimit ? '&seatslimit=' + seatslimit : ''}${hideCloseBtn ? '&hideCloseBtn=' + hideCloseBtn : ''}${hideExpandBtn ? '&hideExpandBtn=' + hideExpandBtn : ''}${timeZone ? '&timeZone=' + timeZone : ''}${allowIconsEdit ? '&allowIconsEdit=' + allowIconsEdit : ''}`;
    }

    showSpinner() {
        let style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute('id', 'vmt-widget-spinner-styles');
        style.innerHTML = constants.styles.spinner;
        document.getElementsByTagName('head')[0].appendChild(style);

        let spinnerDiv = document.createElement('div');
        let bounceball = document.createElement('div');
        let picture = document.createElement('div');
        let loadingDiv = document.createElement('div');
        spinnerDiv.appendChild(bounceball);
        spinnerDiv.appendChild(picture);
        this.root.appendChild(spinnerDiv);
        this.root.appendChild(loadingDiv);
        loadingDiv.classList.add('vmt-loading');
        spinnerDiv.classList.add('vmt-spinner');
        bounceball.classList.add('bounceball');
        picture.classList.add('picture');
    }

    hideSpinner() {
        let style = document.getElementById('vmt-widget-spinner-styles');
        document.getElementsByTagName('head')[0].removeChild(style);

        let iframe = document.getElementById(this.options.containerId);
        let spinner = iframe.getElementsByClassName("vmt-spinner")[0];
        let loading = iframe.getElementsByClassName("vmt-loading")[0];

        this.root.removeChild(loading);
        this.root.removeChild(spinner);
    }

}
