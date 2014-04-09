var config = require('../config');

function createUrlWithEndpoint(endpoint) {
  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[season]/[nba_season]/[endpoint].xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/games/'
    + config.nba.seasonID
    + '/'
    + config.nba.season
    + '/'
    + endpoint
    + '.xml?api_key='
    + config.nba.apikey;
}

function createUrlWithEndpointWithDate(endpoint, year, month, day) {
  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[year]/[month]/[day]/[endpoint].xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/games/'
    + year
    + '/'
    + month
    + '/'
    + day
    + '/'
    + endpoint
    + '.xml?api_key='
    + config.nba.apikey;
}

function createSeasonScheduleUrl() {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[season]/[nba_season]/schedule.xml?api_key=[your_api_key]
  return createUrlWithEndpoint('schedule');
}

function createDailyScheduleUrl(year, month, day) {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[year]/[month]/[day]/schedule.xml?api_key=[your_api_key]
  return createUrlWithEndpointWithDate('schedule', year, month, day);
}

function createBoxScoreUrl(gameID) {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[game_id]/boxscore.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/games/'
    + gameID
    + '/boxscore.xml?api_key='
    + config.nba.apikey;
}

function createGameSummaryUrl(gameID) {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[game_id]/summary.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/games/'
    + gameID
    + '/summary.xml?api_key='
    + config.nba.apikey;
}

function createStandingsUrl() {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/seasontd/[season]/[nba_season]/standings.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/seasontd/'
    + config.nba.seasonID
    + '/'
    + config.nba.season
    + '/standings.xml?api_key='
    + config.nba.apikey;
}

function createInjuriesUrl() {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/league/injuries.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/league/'
    + '/injuries.xml?api_key='
    + config.nba.apikey;
}

function createRosterUrl(teamID) {
  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/teams/[team_id]/profile.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/teams/'
    + teamID
    + '/profile.xml?api_key='
    + config.nba.apikey;
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

  getGameSummaryUrl: function (gameID) {
    return createGameSummaryUrl(gameID);
  },

  getStandingsUrl: function () {
    return createStandingsUrl();
  },

  getInjuriesUrl: function () {
    return createInjuriesUrl();
  },

  getRosterUrl: function (teamID) {
    return createRosterUrl(teamID);
  }
}
