var config = require('../config');

function createUrlWithEndpoint(endpoint) {
    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[season]/[nhl_season]/[endpoint].xml?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/games/'
        + config.nhl.seasonID
        + '/'
        + config.nhl.season
        + '/'
        + endpoint
        + '.xml?api_key='
        + config.nhl.apikey;
}

function createUrlWithEndpointWithDate(endpoint, year, month, day) {
    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[year]/[month]/[day]/[endpoint].xml?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/games/'
        + year
        + '/'
        + month
        + '/'
        + day
        + '/'
        + endpoint
        + '.xml?api_key='
        + config.nhl.apikey;
}

function createSeasonScheduleUrl() {

    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[season]/[nhl_season]/schedule.xml?api_key=[your_api_key]
    return createUrlWithEndpoint('schedule');
}

function createDailyScheduleUrl(year, month, day) {

    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[year]/[month]/[day]/schedule.xml?api_key=[your_api_key]
    return createUrlWithEndpointWithDate('schedule', year, month, day);
}

function createBoxScoreUrl(gameID) {

    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[game_id]/boxscore.xml?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/games/'
        + gameID
        + '/boxscore.xml?api_key='
        + config.nhl.apikey;
}

function createStandingsUrl() {

    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/seasontd/[season]/[nhl_season]/standings.xml?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/seasontd/'
        + config.nhl.seasonID
        + '/'
        + config.nhl.season
        + '/standings.xml?api_key='
        + config.nhl.apikey;
}

module.exports = {

    getSeasonScheduleUrl: function () {
        return createSeasonScheduleUrl();
    },

    getDailyScheduleUrl: function (year, month, day) {
        return createDailyScheduleUrl(year, month, day);
    },

    getBoxScoreUrl: function (gameID) {
        return createBoxScoreUrl(gameID);
    },

    getStandingsUrl: function () {
        return createStandingsUrl();
    }
}