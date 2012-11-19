var config = require('../config');

function createWeeklyUrlForEndpoint(week, endpoint) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/[endpoint].[format]?api_key=[your_api_key]
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
        + endpoint
        + '.'
        + config.nfl.format
        + '?api_key='
        + config.nfl.apikey;
}

function createWeeklyUrlForEndpointAndTeams(endpoint, week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/[endpoint].[format]?api_key=[your_api_key]
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
        + '/'
        + endpoint
        + '.'
        + config.nfl.format
        + '?api_key='
        + config.nfl.apikey;
}

function createTeamUrlForEndpoint(team, endpoint) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/teams/[team]/[endpoint].[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nfl-'
        + config.access_level
        + config.version
        + '/teams/'
        + team
        + '/'
        + endpoint
        + '.'
        + config.nfl.format
        + '?api_key='
        + config.nfl.apikey;
}

function createWeeklyScheduleUrl(week) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/schedule.[format]?api_key=[your_api_key]
    return createWeeklyUrlForEndpoint(week, 'schedule');
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
    return createWeeklyUrlForEndpointAndTeams('statistics', week, awayteam, hometeam);
}

function createGameSummaryUrl(week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/summary.[format]?api_key=[your_api_key]
    return createWeeklyUrlForEndpointAndTeams('summary', week, awayteam, hometeam);
}

function createPlayByPlayUrl(week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/pbp.[format]?api_key=[your_api_key]
    return createWeeklyUrlForEndpointAndTeams('pbp', week, awayteam, hometeam);
}

function createPlaySummaryUrl(week, awayteam, hometeam, playid) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/plays/[play_id].[format]?api_key=[your_api_key]
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
        + '/plays/'
        + playid
        + '.'
        + config.nfl.format
        + '?api_key='
        + config.nfl.apikey;
}

function createGameBoxscoreUrl(week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/boxscore.[format]?api_key=[your_api_key]
    return createWeeklyUrlForEndpointAndTeams('boxscore', week, awayteam, hometeam);
}

function createExtendedBoxscoreUrl(week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/extended-boxscore.[format]?api_key=[your_api_key]
    return createWeeklyUrlForEndpointAndTeams('extended-boxscore', week, awayteam, hometeam);
}


function createWeeklyBoxscoreUrl(week) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/boxscore.[format]?api_key=[your_api_key]
    return createWeeklyUrlForEndpoint(week, 'boxscore');
}

function createGameRosterUrl(week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/roster.[format]?api_key=[your_api_key]
    return createWeeklyUrlForEndpointAndTeams('roster', week, awayteam, hometeam);
}

function createTeamHierarchyUrl() {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/teams/hierarchy.[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nfl-'
        + config.access_level
        + config.version
        + '/teams/hierarchy.'
        + config.nfl.format
        + '?api_key='
        + config.nfl.apikey;
}

function createTeamRosterUrl(team) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/teams/[team]/roster.[format]?api_key=[your_api_key]
    return createTeamUrlForEndpoint(team, 'roster');
}

function createInjuriesUrl(week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/injuries.[format]?api_key=[your_api_key]
    return createWeeklyUrlForEndpointAndTeams('injuries', week, awayteam, hometeam);
}

function createGameDepthChartUrl(week, awayteam, hometeam) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/depthchart.[format]?api_key=[your_api_key]
    return createWeeklyUrlForEndpointAndTeams('depthchart', week, awayteam, hometeam);
}

function createTeamDepthChartUrl(team) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/teams/[team]/depthchart.[format]?api_key=[your_api_key]
    return createTeamUrlForEndpoint(team, 'depthchart');
}

function createWeeklyLeagueLeadersUrl(week) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/[year]/[nfl_season]/[nfl_season_week]/leaders.[format]?api_key=[your_api_key]
    return createWeeklyUrlForEndpoint(week, 'leaders');
}

function createStandingsUrl() {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/teams/[year]/[nfl_season]/standings.[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nfl-'
        + config.access_level
        + config.version
        + '/teams/'
        + config.nfl.year
        + '/'
        + config.nfl.season
        + '/standings.'
        + config.nfl.format
        + '?api_key='
        + config.nfl.apikey;
}

function createSeasonalStatsUrl(team) {

    // URL should look like: http://api.sportsdatallc.org/nfl-[access_level][version]/teams/[team]/[year]/[nfl_season]/statistics.[format]?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nfl-'
        + config.access_level
        + config.version
        + '/teams/'
        + team
        + '/'
        + config.nfl.year
        + '/'
        + config.nfl.season
        + '/statistics.'
        + config.nfl.format
        + '?api_key='
        + config.nfl.apikey;
}


module.exports = {

    getWeeklyScheduleUrl: function(week) {
        return createWeeklyScheduleUrl(week);
    },
    getSeasonScheduleUrl: function() {
        return createSeasonScheduleUrl();
    },
    getGameStatsUrl: function(week, awayteam, hometeam) {
        return createGameStatsUrl(week, awayteam, hometeam);
    },
    getGameSummaryUrl: function(week, awayteam, hometeam) {
        return createGameSummaryUrl(week, awayteam, hometeam);
    },
    getPlayByPlayUrl: function(week, awayteam, hometeam) {
        return createPlayByPlayUrl(week, awayteam, hometeam);
    },
    getPlaySummaryUrl: function(week, awayteam, hometeam, playid) {
        return createPlaySummaryUrl(week, awayteam, hometeam, playid);
    },
    getGameBoxscoreUrl: function(week, awayteam, hometeam) {
        return createGameBoxscoreUrl(week, awayteam, hometeam);
    },
    getExtendedBoxscoreUrl: function(week, awayteam, hometeam) {
        return createExtendedBoxscoreUrl(week, awayteam, hometeam);
    },
    getWeeklyBoxscoreUrl: function(week) {
        return createWeeklyBoxscoreUrl(week);
    },
    getGameRosterUrl: function(week, awayteam, hometeam) {
        return createGameRosterUrl(week, awayteam, hometeam);
    },
    getTeamHierarchyUrl: function() {
        return createTeamHierarchyUrl();
    },
    getTeamRosterUrl: function(team) {
        return createTeamRosterUrl(team);
    },
    getInjuriesUrl: function(week, awayteam, hometeam) {
        return createInjuriesUrl(week, awayteam, hometeam);
    },
    getGameDepthChartUrl: function(week, awayteam, hometeam) {
        return createGameDepthChartUrl(week, awayteam, hometeam);
    },
    getTeamDepthChartUrl: function(team) {
        return createTeamDepthChartUrl(team);
    },
    getWeeklyLeagueLeadersUrl: function(week) {
        return createWeeklyLeagueLeadersUrl(week);
    },
    getStandingsUrl: function() {
        return createStandingsUrl();
    },
    getSeasonalStatsUrl: function(team) {
        return createSeasonalStatsUrl(team);
    }
}