var mainIndex = require('../index'),
    mlb = mainIndex.MLB,
    mockRequest = require('./mock_request_mlb');

module.exports = {
    setUp: function (callback) {
        // Replace the normal request object with a mock request object that returns real responses
        mlb.setRequest(mockRequest);
        callback();
    },

    tearDown: function (callback) {
        callback();
    },

    testGetSeasonSchedule: function(test) {
        test.expect(2);

        // Get the NFL season schedule
        mlb.getSeasonSchedule(function(err, body) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(body !== null, 'Body is null! ' + body);
            test.done();
        });
    },

    testGet3DaySchedule: function(test) {
        test.expect(2);

        // Get the NFL season schedule
        mlb.get3DaySchedule(function(err, body) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(body !== null, 'Body is null! ' + body);
            test.done();
        });
    },

    testGetStandings: function(test) {
        test.expect(2);

        // Get the NFL season schedule
        mlb.getStandings(function(err, body) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(body !== null, 'Body is null! ' + body);
            test.done();
        });
    },

    testGetDailyBoxscore: function(test) {
        test.expect(2);

        // Get the NFL season schedule
        mlb.getDailyBoxscore('2013', '04', '04', function(err, body) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(body !== null, 'Body is null! ' + body);
            test.done();
        });
    }
};