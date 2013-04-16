
var fs = require('fs'),
    nflUrlHelper = require('../util/url_helper_nfl');

function request(uri, callback) {

    var response = {};
    response.statusCode = 200;

    if(uri === nflUrlHelper.getWeeklyScheduleUrl(1)) {
        fs.readFile('./test/example_responses/nfl_weekly_schedule.xml', 'utf8', function (err, data) {
            callback(null, response, data);
        });
    } else if(uri === nflUrlHelper.getSeasonScheduleUrl()) {
        fs.readFile('./test/example_responses/nfl_season_schedule.xml', 'utf8', function (err, data) {
            callback(null, response, data);
        });
    } else if(uri === nflUrlHelper.getGameStatsUrl(1, 'DAL', 'NYG')) {
        fs.readFile('./test/example_responses/nfl_game_stats.xml', 'utf8', function (err, data) {
            callback(null, response, data);
        });
    } else if(uri === nflUrlHelper.getWeeklyBoxscoreUrl(1)) {
        fs.readFile('./test/example_responses/nfl_weekly_boxscore.xml', 'utf8', function (err, data) {
            callback(null, response, data);
        });
    }
}

module.exports = request;

