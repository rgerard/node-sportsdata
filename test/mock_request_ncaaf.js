
var fs = require('fs'),
    ncaafUrlHelper = require('../util/url_helper_ncaaf');

function request(uri, callback) {

    var response = {};
    response.statusCode = 200;

    if(uri === ncaafUrlHelper.getSeasonScheduleUrl()) {
        fs.readFile('./test/example_responses/ncaaf_season_schedule.xml', 'utf8', function (err, data) {
            callback(err, data);
        });
    }
}

module.exports = request;

