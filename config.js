// ------------------------------------------------------------------------------------------
// CONSTANTS AND DEFAULT PARAMETERS OF VMT WIDGET:
// ------------------------------------------------------------------------------------------

export const constants = {
    CONTAINER_ID: 'venue-mapping-tool',
    FRONT_POINT: 'http://localhost:3000',
    IFRAME_NAME: '__VMT_TOOL__',
    messages: {
        missedParams:
            'VENUE MAPPING TOOL: missed one of the required arguments!',
        noContainer: (containerId) =>
            'VENUE MAPPING TOOL: There is no element with ' +
            containerId +
            ' id!',
    },
    styles: {
        DEFAULT_IFRAME_HEIGHT: 500,
        iframe: `width: 100%; height: 100%; border: 0;`,
        fullScreen: `position: fixed; padding: 0; margin: 0;
             outline: none; border: none; top: 0;left: 0; width: 100%;`,
        spinner: `
                    .vmt-loading-overlay {
              position: fixed;
              left: 0;
              right: 0;
              bottom: 0;
              top: 0;
              z-index: 99999;
              background: rgba(255, 255, 255, 0.4);
              display: flex;
              justify-content: center;
              align-items: center;
        }
        .vmt-spinner {
            width: 12.5rem;
        }
    
   `,
    },
}
