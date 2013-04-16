var config = require('../config');

function createUrlWithEndpointAndYear(endpoint) {
    // URL should look like: http://api.sportsdatallc.org/mlb-[access_level][version]/[endpoint]/[year].xml?api_key=[your_api_key]
    return 'api.sportsdatallc.org/mlb-'
        + config.mlb.access_level
        + config.mlb.version
        + '/'
        + endpoint
        + '/'
        + config.mlb.year
        + '.xml?api_key='
        + config.mlb.apikey;
}

function createUrlWithEndpoint(endpoint) {
    // URL should look like: http://api.sportsdatallc.org/mlb-[access_level][version]/[endpoint]?api_key=[your_api_key]
    return 'api.sportsdatallc.org/mlb-'
        + config.mlb.access_level
        + config.mlb.version
        + '/'
        + endpoint
        + '?api_key='
        + config.mlb.apikey;
}

function createSeasonScheduleUrl() {

    // URL should look like: http://api.sportsdatallc.org/mlb-[access_level][version]/schedule/[year].xml?api_key=[your_api_key]
    return createUrlWithEndpointAndYear('schedule');
}

function create3DayScheduleUrl() {

    // URL should look like: http://api.sportsdatallc.org/mlb-[access_level][version]/schedule-3day?api_key=[your_api_key]
    return createUrlWithEndpoint('schedule-3day');
}

function createStandingsUrl() {

    // URL should look like: http://api.sportsdatallc.org/mlb-[access_level][version]/standings/[year].xml?api_key=[your_api_key]
    return createUrlWithEndpointAndYear('standings');
}


module.exports = {

    getSeasonScheduleUrl: function() {
        return createSeasonScheduleUrl();
    },

    get3DayScheduleUrl: function() {
        return create3DayScheduleUrl();
    },

    getStandingsUrl: function() {
        return createStandingsUrl();
    }
}