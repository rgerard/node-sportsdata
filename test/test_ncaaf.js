var mainIndex = require('../index'),
    ncaaf = mainIndex.NCAAF,
    mockRequest = require('./mock_request_ncaaf');

module.exports = {
    setUp: function (callback) {
        // Replace the normal request object with a mock request object that returns real responses
        ncaaf.setRequest(mockRequest);
        callback();
    },

    tearDown: function (callback) {
        callback();
    },

    testGetSeasonSchedule: function(test) {
        test.expect(2);

        // Get the NFL season schedule
        ncaaf.getSeasonSchedule(function(err, body) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(body !== null, 'Body is null! ' + body);
            test.done();
        });
    }
};