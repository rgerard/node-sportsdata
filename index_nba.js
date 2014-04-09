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
    urlHelper = require('./util/url_helper_nba');

function init(access_level, version, apikey, seasonID, season) {
    config.nba.access_level = access_level;
    config.nba.version = version;
    config.nba.apikey = apikey;
    config.nba.seasonID = seasonID;
    config.nba.season = season;
}

function getSeasonSchedule(callback) {
    var url = urlHelper.getSeasonScheduleUrl();
    createRequest(url, callback);
}

function getDailySchedule(year, month, day, callback) {
    var url = urlHelper.getDailyScheduleUrl(year, month, day);
    createRequest(url, callback);
}

function getBoxScore(gameID, callback) {
  var url = urlHelper.getBoxScoreUrl(gameID);
  createRequest(url, callback);
}

function getGameScoreAndStats(gameID, callback) {
  var url = urlHelper.getGameSummaryUrl(gameID);
  createRequest(url, callback);
}

function getStandings(callback) {
    var url = urlHelper.getStandingsUrl();
    createRequest(url, callback);
}

function getInjuries(callback) {
    var url = urlHelper.getInjuriesUrl();
    createRequest(url, callback);
}

function getRoster(teamID, callback) {
    var url = urlHelper.getRosterUrl(teamID);
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

    init: function(access_level, version, apikey, seasonID, season) {
        return init(access_level, version, apikey, seasonID, season);
    },

    setRequest: function(reqObj) {
        request = reqObj;
    },

    getSeasonSchedule: function(callback) {
        return getSeasonSchedule(callback);
    },

    getDailySchedule: function(year, month, day, callback) {
        return getDailySchedule(year, month, day, callback);
    },

    getBoxScore: function(gameID, callback) {
      return getBoxScore(gameID, callback);
    },

    getGameScoreAndStats: function(gameID, callback) {
      return getGameScoreAndStats(gameID, callback);
    },

    getStandings: function(callback) {
        return getStandings(callback);
    },

    getInjuries: function(callback) {
        return getInjuries(callback);
    },

    getRoster: function(teamID, callback) {
        return getRoster(teamID, callback);
    }
};
