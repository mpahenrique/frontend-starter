function init(){
    
    const config        = require('../config/index.js')
    ,     globalModules = { /* Choose the libraries you want to be available for all modules */
        DomManipulator          : require('dom-manipulator'),
        LocalStorageManipulator : require('localstorage-manipulator'),
        Xhrt                    : require('xhrt'),
        /* someLibrary : require('some-library') */
    }

    /*** Modules that need pre-load ***/
    /* ... */
    /*** End ***/
    
    return { config, globalModules }
}

module.exports = {
    init : init
}