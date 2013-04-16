
var fs = require('fs'),
    mlbUrlHelper = require('../util/url_helper_mlb');

function request(uri, callback) {

    var response = {};
    response.statusCode = 200;

    if(uri === mlbUrlHelper.getSeasonScheduleUrl()) {
        fs.readFile('./test/example_responses/mlb_season_schedule.xml', 'utf8', function (err, data) {
            callback(err, data);
        });
    } else if(uri === mlbUrlHelper.get3DayScheduleUrl()) {
        fs.readFile('./test/example_responses/mlb_3day_schedule.xml', 'utf8', function (err, data) {
            callback(err, data);
        });
    } else if(uri === mlbUrlHelper.getStandingsUrl()) {
        fs.readFile('./test/example_responses/mlb_standings.xml', 'utf8', function (err, data) {
            callback(err, data);
        });
    }
}

module.exports = request;

