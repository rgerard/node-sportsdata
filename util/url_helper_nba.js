var config = require('../config');

function createSeasonScheduleUrl() {

    // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/[nba_season]/schedule?season_id=[season]&api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nba-'
        + config.nba.access_level
        + config.nba.version
        + '/'
        + config.nba.season
        + '/schedule?season_id='
        + config.nba.seasonID
        + '&api_key='
        + config.nba.apikey;
}

module.exports = {

    getSeasonScheduleUrl: function() {
        return createSeasonScheduleUrl();
    }
}