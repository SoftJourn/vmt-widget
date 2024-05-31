import { constants } from '../config';
import { base64Spinner } from './img/base64Spinner.json';

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
        this.initIframe({ root, ...options });
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
        let iframe = document.querySelector(
            `iframe[name=\"${constants.IFRAME_NAME}\"]`
        );
        if (this.initialStyles) {
            iframe.style.cssText = this.initialStyles;
            this.initialStyles = null;
        } else if (this.initialStyles === '') {
            iframe.removeAttribute('style');
            this.initialStyles = null;
        } else {
            this.initialStyles = iframe.style.cssText;
            iframe.style.cssText = constants.styles.fullScreen;
            iframe.height =
                window.orientation === 90 || window.orientation === -90
                    ? '100%'
                    : window.innerHeight;
        }
    }

    // ------------------------------------------------------------------------------------------
    // PRIVATE:
    // ------------------------------------------------------------------------------------------

    isValidParams(options, root) {
        if (!options.memberId || !options.frontPoint || root === null) {
            let errorMessage =
                root === null
                    ? constants.messages.noContainer(options.containerId)
                    : constants.messages.missedParams;
            console.error(errorMessage);
            return false;
        }
        return true;
    }

    initIframe(options) {
        let { root } = options;
        this.root = root;
        this.options = options;
        this.isLoading = 0;

        let iframe = document.createElement('iframe');
        iframe.name = constants.IFRAME_NAME;
        iframe.style.cssText = options.styles || constants.styles.iframe;
        iframe.src = this.getIframeUrl(options);
        iframe.setAttribute('allow', 'clipboard-read; clipboard-write');

        this.showSpinner();

        const existingIframe = root.getElementsByTagName('iframe')[0];
        if (existingIframe) {
            root.removeChild(existingIframe);
        }

        root.appendChild(iframe);
        iframe.focus();
    }

    getIframeUrl({
        frontPoint,
        memberId,
        eventId,
        venueId,
        mode,
        seatslimit,
        hideCloseBtn,
        hideExpandBtn,
        timeZone,
        allowIconsEdit,
    }) {
        return `${frontPoint}?member=${memberId}${
            eventId ? '&event=' + eventId : ''
        }&venue=${venueId}${mode ? '&mode=' + mode : ''}${
            seatslimit ? '&seatslimit=' + seatslimit : ''
        }${hideCloseBtn ? '&hideCloseBtn=' + hideCloseBtn : ''}${
            hideExpandBtn ? '&hideExpandBtn=' + hideExpandBtn : ''
        }${timeZone ? '&timeZone=' + timeZone : ''}${
            allowIconsEdit ? '&allowIconsEdit=' + allowIconsEdit : ''
        }`;
    }

    showSpinner() {
        if (this.isLoading === 0) {
            this.isLoading++;

            if (
                this.options.showSpinner &&
                this.options.showSpinner instanceof Function
            ) {
                // load external loading fn
                return this.options.showSpinner();
            }

            if (document.getElementById('spinnerDiv')) return;

            let style = document.createElement('style');
            style.type = 'text/css';
            style.setAttribute('id', 'vmt-widget-spinner-styles');
            style.innerHTML = constants.styles.spinner;
            document.getElementsByTagName('head')[0].appendChild(style);

            let loadingDiv = document.createElement('div');
            loadingDiv.setAttribute('id', 'spinnerDiv');
            loadingDiv.innerHTML = `<img src=${base64Spinner} alt="loading" class="vmt-spinner" /> `;

            this.root.appendChild(loadingDiv);
            loadingDiv.classList.add('vmt-loading-overlay');
        } else {
            this.isLoading++;
        }
    }

    hideSpinner() {
        this.isLoading--;

        if (this.isLoading === 0) {
            if (
                this.options.hideSpinner &&
                this.options.hideSpinner instanceof Function
            ) {
                return this.options.hideSpinner();
            }

            const loadingDiv = document.getElementById('spinnerDiv');

            let style = document.getElementById('vmt-widget-spinner-styles');
            if (style)
                document.getElementsByTagName('head')[0].removeChild(style);

            if (loadingDiv) this.root.removeChild(loadingDiv);
        }
    }
}
