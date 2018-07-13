import VMTContainer from './VMTContainer';
import {constants} from '../config';
import PmRpcServer from './pmRpc/server';

let pmRpcServer = new PmRpcServer();

export default class {

    static launch(options) {
        let token = options.token;
        let vmtContainer = new VMTContainer({
            containerId: options.containerId || constants.CONTAINER_ID,
            memberId: options.memberId,
            eventId: options && options.eventId,
            venueId: options.venueId,
            frontPoint: options.frontPoint || constants.FRONT_POINT,
            mode: options && options.mode,
            styles: options.styles,
            seatslimit:options.seatslimit,
            hideCloseBtn:options.hideCloseBtn

        });

        // ----------------------------------------------------------------------------------------------
        // LAUNCH PM RPC SERVER AND CREATE INTERNAL METHODS:
        // ----------------------------------------------------------------------------------------------

        pmRpcServer.launch();

        pmRpcServer.method('vmtReady', () => {
            vmtContainer.hideSpinner();
        });

        pmRpcServer.method('closeWidget', () => {
            pmRpcServer.removeMethod('toggleFullScreen');
            pmRpcServer.removeMethod('closeWidget');
            vmtContainer.close(pmRpcServer.destroyServer);
            this.onCloseFn();
        });

        pmRpcServer.method('toggleFullScreen', () => {
            vmtContainer.toggleFullScreen();
        });

        pmRpcServer.method('getToken', () => {
            return token;
        });
    }

    static method(name, method) {
        pmRpcServer.method(name, method);
    }

    static onClose(callback) {
        this.onCloseFn = callback;
    }
}
