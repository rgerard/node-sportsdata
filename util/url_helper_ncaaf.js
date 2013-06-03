var config = require('../config');

function createUrlWithEndpointAndYear(endpoint) {
    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/[year]/[ncaafb_season]/[endpoint].[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/ncaafb-'
        + config.ncaaf.access_level
        + config.ncaaf.version
        + '/'
        + config.ncaaf.year
        + '/'
        + config.ncaaf.season
        + '/'
        + endpoint
        + '.xml?api_key='
        + config.ncaaf.apikey;
}

function createUrlWithEndpointAndWeekAndYear(week, endpoint) {
    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/[year]/[ncaafb_season]/[ncaafb_season_week]/[endpoint].[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/ncaafb-'
        + config.ncaaf.access_level
        + config.ncaaf.version
        + '/'
        + config.ncaaf.year
        + '/'
        + config.ncaaf.season
        + '/'
        + week
        + '/'
        + endpoint
        + '.xml?api_key='
        + config.ncaaf.apikey;
}

function createUrlWithEndpointAndDivision(division, endpoint) {
    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/teams/[division]/[endpoint].[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/ncaafb-'
        + config.ncaaf.access_level
        + config.ncaaf.version
        + '/teams/'
        + division
        + '/'
        + endpoint
        + '.xml?api_key='
        + config.ncaaf.apikey;
}

function createUrlWithEndpointAndDivisionAndYear(division, endpoint) {
    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/teams/[division]/[year]/[ncaafb_season]/[endpoint].[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/ncaafb-'
        + config.ncaaf.access_level
        + config.ncaaf.version
        + '/teams/'
        + division
        + '/'
        + config.ncaaf.year
        + '/'
        + config.ncaaf.season
        + '/'
        + endpoint
        + '.xml?api_key='
        + config.ncaaf.apikey;
}

function createUrlWithEndpointAndWeekAndTeamsAndYear(week, awayteam, hometeam, endpoint) {
    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/[year]/[ncaafb_season]/[ncaafb_season_week]/[away_team]/[home_team]/[endpoint].[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/ncaafb-'
        + config.ncaaf.access_level
        + config.ncaaf.version
        + '/'
        + config.ncaaf.year
        + '/'
        + config.ncaaf.season
        + '/'
        + week
        + '/'
        + awayteam
        + '/'
        + hometeam
        + '/'
        + endpoint
        + '.xml?api_key='
        + config.ncaaf.apikey;
}

function createSeasonScheduleUrl() {

    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/[year]/[ncaafb_season]/schedule.[format]?api_key=[your_api_key]
    return createUrlWithEndpointAndYear('schedule');
}

function createWeeklyScheduleUrl(week) {

    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/[year]/[ncaafb_season]/[ncaafb_season_week]/schedule.[format]?api_key=[your_api_key]
    return createUrlWithEndpointAndWeekAndYear(week, 'schedule');
}

function createGameStatisticsUrl(week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/[year]/[ncaafb_season]/[ncaafb_season_week]/[away_team]/[home_team]/statistics.[format]?api_key=[your_api_key]
    return createUrlWithEndpointAndWeekAndTeamsAndYear(week, awayteam, hometeam, 'schedule');
}

function createBoxscoreUrl(week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/[year]/[ncaafb_season]/[ncaafb_season_week]/[away_team]/[home_team]/boxscore.[format]?api_key=[your_api_key]
    return createUrlWithEndpointAndWeekAndTeamsAndYear(week, awayteam, hometeam, 'boxscore');
}

function createExtendedBoxscoreUrl(week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/[year]/[ncaafb_season]/[ncaafb_season_week]/[away_team]/[home_team]/extended-boxscore.[format]?api_key=[your_api_key]
    return createUrlWithEndpointAndWeekAndTeamsAndYear(week, awayteam, hometeam, 'extended-boxscore');
}

function createStandingsUrl(division) {

    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/teams/[division]/[year]/[ncaafb_season]/standings.[format]?api_key=[your_api_key]
    return createUrlWithEndpointAndDivisionAndYear(division, 'standings');
}

function createTeamHierarchyUrl(division) {

    // URL should look like: http://api.sportsdatallc.org/ncaafb-[access_level][version]/teams/[division]/hierarchy.[format]?api_key=[your_api_key]
    return createUrlWithEndpointAndDivision(division, 'hierarchy');
}


module.exports = {

    getSeasonScheduleUrl: function() {
        return createSeasonScheduleUrl();
    },

    getWeeklyScheduleUrl: function(week) {
        return createWeeklyScheduleUrl(week);
    },

    getGameStatisticsUrl: function(week, awayteam, hometeam) {
        return createGameStatisticsUrl(week, awayteam, hometeam);
    },

    getBoxscoreUrl: function(week, awayteam, hometeam) {
        return createBoxscoreUrl(week, awayteam, hometeam);
    },

    getExtendedBoxscoreUrl: function(week, awayteam, hometeam) {
        return createExtendedBoxscoreUrl(week, awayteam, hometeam);
    },

    getStandingsUrl: function(division) {
        return createStandingsUrl(division);
    },

    getTeamHierarchyUrl: function(division) {
        return createTeamHierarchyUrl(division);
    }
}