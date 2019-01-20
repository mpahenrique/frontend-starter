function init(){

    const environment = {
        url  : ''
    },
    baseUrls = {
        services  : environment.url + '/services',
        fallBacks : environment.url + '/data/fallbacks',
        templates : environment.url + '/templates'
    },
    services = {},
    templates = {}

    return { environment, baseUrls, services, templates }

}
module.exports = init();