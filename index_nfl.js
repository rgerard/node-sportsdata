// Copyright 2010-2012 Ryan Gerard
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

var config = require('./config'),
    request = require('request'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    urlHelper = require('./util/url_helper_nfl');

function getWeeklySchedule(week, callback) {
    var url = urlHelper.getWeeklyScheduleUrl(week);
    createRequest(url, callback);
}

function getSeasonSchedule(callback) {
    var url = urlHelper.getSeasonScheduleUrl();
    createRequest(url, callback);
}

function getGameStats(week, awayteam, hometeam, callback) {
    var url = urlHelper.getGameStatsUrl(week, awayteam, hometeam);
    createRequest(url, callback);
}

function getGameSummary(week, awayteam, hometeam, callback) {
    var url = urlHelper.getGameSummaryUrl(week, awayteam, hometeam);
    createRequest(url, callback);
}

function getPlayByPlay(week, awayteam, hometeam, callback) {
    var url = urlHelper.getPlayByPlayUrl(week, awayteam, hometeam);
    createRequest(url, callback);
}

function getPlaySummary(week, awayteam, hometeam, playid, callback) {
    var url = urlHelper.getPlaySummaryUrl(week, awayteam, hometeam, playid);
    createRequest(url, callback);
}

function getGameBoxscore(week, awayteam, hometeam, callback) {
    var url = urlHelper.getGameBoxscoreUrl(week, awayteam, hometeam);
    createRequest(url, callback);
}

function getExtendedBoxscore(week, awayteam, hometeam, callback) {
    var url = urlHelper.getExtendedBoxscoreUrl(week, awayteam, hometeam);
    createRequest(url, callback);
}

function getWeeklyBoxscore(week, callback) {
    var url = urlHelper.getWeeklyBoxscoreUrl(week);
    createRequest(url, callback);
}

function getGameRoster(week, awayteam, hometeam, callback) {
    var url = urlHelper.getGameRosterUrl(week, awayteam, hometeam);
    createRequest(url, callback);
}

function getTeamHierarchy(callback) {
    var url = urlHelper.getTeamHierarchyUrl();
    createRequest(url, callback);
}

function getTeamRoster(team, callback) {
    var url = urlHelper.getTeamRosterUrl(team);
    createRequest(url, callback);
}

function getInjuries(week, awayteam, hometeam, callback) {
    var url = urlHelper.getInjuriesUrl(week, awayteam, hometeam);
    createRequest(url, callback);
}

function getGameDepthChart(week, awayteam, hometeam, callback) {
    var url = urlHelper.getGameDepthChartUrl(week, awayteam, hometeam);
    createRequest(url, callback);
}

function getTeamDepthChart(team, callback) {
    var url = urlHelper.getTeamDepthChartUrl(team);
    createRequest(url, callback);
}

function getWeeklyLeagueLeaders(week, callback) {
    var url = urlHelper.getWeeklyLeagueLeadersUrl(week);
    createRequest(url, callback);
}

function getStandings(callback) {
    var url = urlHelper.getStandingsUrl();
    createRequest(url, callback);
}

function getSeasonalStats(team, callback) {
    var url = urlHelper.getSeasonalStatsUrl(team);
    createRequest(url, callback);
}

function createRequest(url, callback) {
    request(url, function (error, response, body) {

        if (response.statusCode == 200) {

            // Parse the XML to JSON
            parser.parseString(body, function (err, result) {
                callback(err, result);
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

    getGameSummary: function(week, awayteam, hometeam, callback) {
        return getGameSummary(week, awayteam, hometeam, callback);
    },

    getPlayByPlay: function(week, awayteam, hometeam, callback) {
        return getPlayByPlay(week, awayteam, hometeam, callback);
    },

    getPlaySummary: function(week, awayteam, hometeam, playid, callback) {
        return getPlaySummary(week, awayteam, hometeam, playid, callback);
    },

    getGameBoxscore: function(week, awayteam, hometeam, callback) {
        return getGameBoxscore(week, awayteam, hometeam, callback);
    },

    getExtendedBoxscore: function(week, awayteam, hometeam, callback) {
        return getExtendedBoxscore(week, awayteam, hometeam, callback);
    },

    getWeeklyBoxscore: function(week, callback) {
        return getWeeklyBoxscore(week, callback);
    },

    getGameRoster: function(week, awayteam, hometeam, callback) {
        return getGameRoster(week, awayteam, hometeam, callback);
    },

    getTeamHierarchy: function(callback) {
        return getTeamHierarchy(callback);
    },

    getTeamRoster: function(team, callback) {
        return getTeamRoster(team, callback);
    },

    getInjuries: function(week, awayteam, hometeam, callback) {
        return getInjuries(week, awayteam, hometeam, callback);
    },

    getGameDepthChart: function(week, awayteam, hometeam, callback) {
        return getGameDepthChart(week, awayteam, hometeam, callback);
    },

    getTeamDepthChart: function(team, callback) {
        return getTeamDepthChart(team, callback);
    },

    getWeeklyLeagueLeaders: function(week, callback) {
        return getWeeklyLeagueLeaders(week, callback);
    },

    getStandings: function(callback) {
        return getStandings(callback);
    },

    getSeasonalStats: function(team, callback) {
        return getSeasonalStats(team, callback);
    }
}