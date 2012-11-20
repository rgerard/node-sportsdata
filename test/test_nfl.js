var mainIndex = require('../index'),
    nfl = mainIndex.NFL,
    mockRequest = require('./mock_request');

module.exports = {
    setUp: function (callback) {
        // Replace the normal request object with a mock request object that returns real responses
        nfl.setRequest(mockRequest);
        callback();
    },

    tearDown: function (callback) {
        callback();
    },

    testGetWeeklySchedule: function(test) {
        test.expect(2);

        // Get the NFL schedule for week 1
        nfl.getWeeklySchedule(1, function(err, body) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(body !== null, 'Body is null! ' + body);
            test.done();
        });
    },

    testGetSeasonSchedule: function(test) {
        test.expect(2);

        // Get the NFL season schedule
        nfl.getSeasonSchedule(function(err, body) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(body !== null, 'Body is null! ' + body);
            test.done();
        });
    },

    testGetGameStats: function(test) {
        test.expect(2);

        // Get the stats for Game 1 between DAL and NYG
        nfl.getGameStats(1, 'DAL', 'NYG', function(err, body) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(body !== null, 'Body is null! ' + body);
            test.done();
        });
    },

    testGetWeeklyBoxscore: function(test) {
        test.expect(2);

        // Get the NFL weekly boxscore for Week 1
        nfl.getWeeklyBoxscore(1, function(err, body) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(body !== null, 'Body is null! ' + body);
            test.done();
        });
    }
};