var config = require('./config'),
    request = require('request'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser();

function createWeeklyScheduleUrl(week) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/schedule.[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nfl-'
        + config.access_level
        + config.version
        + '/'
        + config.nfl.year
        + '/'
        + config.nfl.season
        + '/'
        + week
        + '/schedule.'
        + config.nfl.format
        + '?api_key='
        + config.nfl.apikey;
}

function createSeasonScheduleUrl() {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/schedule.[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nfl-'
        + config.access_level
        + config.version
        + '/'
        + config.nfl.year
        + '/'
        + config.nfl.season
        + '/schedule.'
        + config.nfl.format
        + '?api_key='
        + config.nfl.apikey;
}

function createGameStatsUrl(week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/statistics.[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nfl-'
        + config.access_level
        + config.version
        + '/'
        + config.nfl.year
        + '/'
        + config.nfl.season
        + '/'
        + week
        + '/'
        + awayteam
        + '/'
        + hometeam
        + '/statistics.'
        + config.nfl.format
        + '?api_key='
        + config.nfl.apikey;
}

function createWeeklyBoxscoreUrl(week) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/boxscore.[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nfl-'
        + config.access_level
        + config.version
        + '/'
        + config.nfl.year
        + '/'
        + config.nfl.season
        + '/'
        + week
        + '/boxscore.'
        + config.nfl.format
        + '?api_key='
        + config.nfl.apikey;
}

function getWeeklySchedule(week, callback) {
    var url = createWeeklyScheduleUrl(week);
    createRequest(url, callback);
}

function getSeasonSchedule(callback) {
    var url = createSeasonScheduleUrl();
    createRequest(url, callback);
}

function getGameStats(week, awayteam, hometeam, callback) {
    var url = createGameStatsUrl(week, awayteam, hometeam);
    createRequest(url, callback);
}

function getWeeklyBoxscore(week, callback) {
    var url = createWeeklyBoxscoreUrl(week);
    createRequest(url, callback);
}

function createRequest(url, callback) {
    request(url, function (error, response, body) {

        if (response.statusCode == 200) {

            // Parse the XML to JSON
            parser.parseString(body, function (err, result) {
                callback(error, result);
            });
        } else {
            callback(error, body);
        }
    });
}

module.exports = {
    setRequest: function(reqObj) {
        request = reqObj;
    },

    getWeeklySchedule: function(week, callback) {
        return getWeeklySchedule(week, callback);
    },

    getSeasonSchedule: function(callback) {
        return getSeasonSchedule(callback);
    },

    getGameStats: function(week, awayteam, hometeam, callback) {
        return getGameStats(week, awayteam, hometeam, callback);
    },

    getWeeklyBoxscore: function(week, callback) {
        return getWeeklyBoxscore(week, callback);
    },

    getWeeklyScheduleUrl: function(week) {
        return createWeeklyScheduleUrl(week);
    },
    getSeasonScheduleUrl: function() {
        return createSeasonScheduleUrl();
    },
    getGameStatsUrl: function(week, awayteam, hometeam) {
        return createGameStatsUrl(week, awayteam, hometeam);
    },
    getWeeklyBoxscoreUrl: function(week) {
        return createWeeklyBoxscoreUrl(week);
    }
}