function init(){

    // call this function if your application need to do 
    // something before load, like geolocation, etc. Sample:
    //
    //  doSomething().then(index);
    //

}

function index (){

    'use-strict';
    
    window.onload = null;

    /*************** Views ids ***************\
    |  Main View         : index             |
    \****************** End ******************/

    var views   = {
        index : require( './views/index' )
    }
    ,   general = require( './general/' )
    ,   ctrl    = views[document.body.id]
    
    general && general.init();
    ctrl    && ctrl.init();
}

module.exports = (function(){ window.onload = index; })();