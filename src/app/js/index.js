function init(){

    // call this function if your application need to do 
    // something before load, like geolocation, etc. Sample:
    //
    //  doSomething().then(index)
    //

}

function index (){

    'use strict'
    
    window.onload = null

    const general     = require('./general/')
    ,     views       = require('./general/views')
    ,     modules     = require('./general/modules')
    ,     currentView = document.body.id
    ,     ctrl        = views[currentView].ctrl
    ,     app         = general && general.init()


    const viewModules = views[currentView].data.modules
    for(let module in viewModules) {
        let currentViewModule = viewModules[module]
        if(!currentViewModule.config.preload) continue
        
        modules[currentViewModule.config.type].init(
            app,
            document.getElementById(currentViewModule.config.id)
        )
        currentViewModule.config.isInitialized = true
    }

    ctrl && ctrl.init(app, viewModules)

}

module.exports = (function(){ window.onload = index })()