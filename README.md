# node-sportsdata: Easy wrapper around the SportsData API

This module is designed to be an easy-to-use wrapper around the SportsData API.  This module is designed to be used with node.js, but could be modified to be used directly in the browser as well.

This module is meant to become a comprehensive list of the SportsData API calls available to you. Currently, I have only focused on the API calls for the NFL and NBA, but I will focus on the others as their seasons begin.

## Install

<pre>
  npm install sportsdata
</pre>

Or from source:

<pre>
  git clone git://github.com/rgerard/node-sportsdata.git 
  cd node-sportsdata
  npm install
</pre>


## Simple Examples

```javascript
var sportsdata_nfl = require('sportsdata').NFL;

// Init the object with the access level, version, apikey, year, and season you care about
sportsdata_nfl.init('t', 1, apikey, '2012', 'REG');

// Get the season schedule
sportsdata_nfl.getSeasonSchedule(function(error, schedule) {
 if (!error) {
    console.log(schedule) // Print the season schedule for the NFL season
  }
});


var sportsdata_nba = require('sportsdata').NBA;

// Init the object with the access level, version, apikey, seasonID, and season you care about
sportsdata_nba.init('t', 2, apikey, '2012', 'REG');

// Get the season schedule
sportsdata_nba.getSeasonSchedule(function(error, schedule) {
 if (!error) {
    console.log(schedule) // Print the season schedule for the NBA season
  }
});
```


## Test

I have written unit tests for these API calls using the <a href="https://github.com/caolan/nodeunit">nodeunit</a> framework.
The unit tests do not make actual API calls, as that would waste your API call limit.
Instead, I have mocked the request object, and replace the call response with a pre-captured response for that exact same API call.

To run the unit tests:

```
nodeunit test/
```


## Documentation

### NFL

Please refer to the <a href="http://developer.sportsdatallc.com/docs/read/NFL_API">SportsData NFL API documentation</a> for more detail on their API.

* [init](#init)
* [getWeeklySchedule](#getWeeklySchedule)
* [getSeasonSchedule](#getSeasonSchedule)
* [getGameStats](#getGameStats)
* [getGameSummary](#getGameSummary)
* [getPlayByPlay](#getPlayByPlay)
* [getPlaySummary](#getPlaySummary)
* [getGameBoxscore](#getGameBoxscore)
* [getExtendedBoxscore](#getExtendedBoxscore)
* [getWeeklyBoxscore](#getWeeklyBoxscore)
* [getGameRoster](#getGameRoster)
* [getTeamHierarchy](#getTeamHierarchy)
* [getTeamRoster](#getTeamRoster)
* [getInjuries](#getInjuries)
* [getGameDepthChart](#getGameDepthChart)
* [getTeamDepthChart](#getTeamDepthChart)
* [getWeeklyLeagueLeaders](#getWeeklyLeagueLeaders)
* [getStandings](#getStandings)
* [getSeasonalStats](#getSeasonalStats)

### NBA

Please refer to the <a href="http://developer.sportsdatallc.com/docs/read/NBA_API">SportsData NBA API documentation</a> for more detail on their API.

* [init](#initNba)
* [getSeasonSchedule](#getSeasonScheduleNba)
* [get3DaySchedule](#get3DaySchedule)
* [getStandings](#getStandingsNba)
* [getRosters](#getRosters)
* [getGameScoreAndStats](#getGameScoreAndStats)
* [getPlayByPlay](#getPlayByPlayNba)
* [getEventsGloassary](#getEventsGloassary)
* [getSeasonalStats](#getSeasonalStatsNba)


## NFL API

<a name="init" />
### init(access_level, version, apikey, year, season)

Inits the object with your API data, including your API key.

__Arguments__

* access_level - Your API access level
* version - The version of the API
* apikey - Your API key
* year - The year
* season - The season type

__Example__

```js
// Fetch the schedule for Week 1 of the NFL season
var sportsdata_nfl = require('sportsdata').NFL;
sportsdata_nfl.init('t', 1, apikey, '2012', 'REG');
```

---------------------------------------

<a name="getWeeklySchedule" />
### getWeeklySchedule(week, callback)

Returns the schedule for the week in question as a JSON object

__Arguments__

* week - The week to retrieve the schedule for
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the schedule for Week 1 of the NFL season
sportsdata.getWeeklySchedule(1, function(error, schedule) {
 if (!error) {
    console.log(schedule);
  }
});
```

---------------------------------------

<a name="getSeasonSchedule" />
### getSeasonSchedule(callback)

Returns the schedule for the entire season as a JSON object

__Arguments__

* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the schedule for the entire NFL season
sportsdata.getSeasonSchedule(function(error, schedule) {
 if (!error) {
    console.log(schedule);
  }
});
```

---------------------------------------

<a name="getGameStats" />
### getGameStats(week, awayteam, hometeam, callback)

Returns the game stats for the game in question as a JSON object

__Arguments__

* week - The week in question
* awayteam - The 3-letter abbreviation of the away team
* hometeam - The 3-letter abbreviation of the home team
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the game stats
sportsdata.getGameStats(1, 'DAL', 'NYG', function(error, stats) {
 if (!error) {
    console.log(stats);
  }
});
```

---------------------------------------

<a name="getGameSummary" />
### getGameSummary(week, awayteam, hometeam, callback)

Returns the game summary for the game in question as a JSON object

__Arguments__

* week - The week in question
* awayteam - The 3-letter abbreviation of the away team
* hometeam - The 3-letter abbreviation of the home team
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the game summary
sportsdata.getGameSummary(1, 'DAL', 'NYG', function(error, stats) {
 if (!error) {
    console.log(stats);
  }
});
```

---------------------------------------

<a name="getPlayByPlay" />
### getPlayByPlay(week, awayteam, hometeam, callback)

Returns the play-by-play for the game in question as a JSON object

__Arguments__

* week - The week in question
* awayteam - The 3-letter abbreviation of the away team
* hometeam - The 3-letter abbreviation of the home team
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the play-by-play
sportsdata.getPlayByPlay(1, 'DAL', 'NYG', function(error, stats) {
 if (!error) {
    console.log(stats);
  }
});
```

---------------------------------------

<a name="getPlaySummary" />
### getPlaySummary(week, awayteam, hometeam, playid, callback)

Returns the play summary for the game in question as a JSON object

__Arguments__

* week - The week in question
* awayteam - The 3-letter abbreviation of the away team
* hometeam - The 3-letter abbreviation of the home team
* playid - The ID of the specific play involved. This value is found in the response from [getPlayByPlay](#getPlayByPlay).
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the play summary
sportsdata.getPlaySummary(1, 'DAL', 'NYG', 'fdec3736-3598-4cde-ad4c-7270afc6d4e7', function(error, stats) {
 if (!error) {
    console.log(stats);
  }
});
```

---------------------------------------

<a name="getGameBoxscore" />
### getGameBoxscore(week, awayteam, hometeam, callback)

Returns the boxscore for the game in question as a JSON object

__Arguments__

* week - The week in question
* awayteam - The 3-letter abbreviation of the away team
* hometeam - The 3-letter abbreviation of the home team
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the boxscore
sportsdata.getGameBoxscore(1, 'DAL', 'NYG', function(error, stats) {
 if (!error) {
    console.log(stats);
  }
});
```

---------------------------------------

<a name="getExtendedBoxscore" />
### getExtendedBoxscore(week, awayteam, hometeam, callback)

Returns the extended boxscore for the game in question as a JSON object

__Arguments__

* week - The week in question
* awayteam - The 3-letter abbreviation of the away team
* hometeam - The 3-letter abbreviation of the home team
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the extended boxscore
sportsdata.getExtendedBoxscore(1, 'DAL', 'NYG', function(error, stats) {
 if (!error) {
    console.log(stats);
  }
});
```

---------------------------------------

<a name="getWeeklyBoxscore" />
### getWeeklyBoxscore(week, callback)

Returns the weekly boxscores as a JSON object

__Arguments__

* week - The week in question
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the weekly boxscores
sportsdata.getWeeklyBoxscore(1, function(error, stats) {
 if (!error) {
    console.log(stats);
  }
});
```

---------------------------------------

<a name="getGameRoster" />
### getGameRoster(week, awayteam, hometeam, callback)

Returns the game roster for the game in question as a JSON object

__Arguments__

* week - The week in question
* awayteam - The 3-letter abbreviation of the away team
* hometeam - The 3-letter abbreviation of the home team
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the game roster
sportsdata.getGameRoster(1, 'DAL', 'NYG', function(error, stats) {
 if (!error) {
    console.log(stats);
  }
});
```

---------------------------------------

<a name="getTeamHierarchy" />
### getTeamHierarchy(callback)

Returns the team hierarchy as a JSON object

__Arguments__

* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the team hierarchy
sportsdata.getTeamHierarchy(function(error, data) {
 if (!error) {
    console.log(data);
  }
});
```

---------------------------------------

<a name="getTeamRoster" />
### getTeamRoster(team, callback)

Returns the team roster of a specific team as a JSON object

__Arguments__

* team - The 3-letter abbreviation of the team
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the team hierarchy
sportsdata.getTeamRoster('DAL', function(error, data) {
 if (!error) {
    console.log(data);
  }
});
```

---------------------------------------

<a name="getInjuries" />
### getInjuries(week, awayteam, hometeam, callback)

Returns the injuries for the game in question as a JSON object

__Arguments__

* week - The week in question
* awayteam - The 3-letter abbreviation of the away team
* hometeam - The 3-letter abbreviation of the home team
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the injuries
sportsdata.getInjuries(1, 'DAL', 'NYG', function(error, data) {
 if (!error) {
    console.log(data);
  }
});
```

---------------------------------------

<a name="getGameDepthChart" />
### getGameDepthChart(week, awayteam, hometeam, callback)

Returns the game depth chart for the game in question as a JSON object

__Arguments__

* week - The week in question
* awayteam - The 3-letter abbreviation of the away team
* hometeam - The 3-letter abbreviation of the home team
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the game depth chart
sportsdata.getGameDepthChart(1, 'DAL', 'NYG', function(error, data) {
 if (!error) {
    console.log(data);
  }
});
```

---------------------------------------

<a name="getTeamDepthChart" />
### getTeamDepthChart(team, callback)

Returns the team depth chart for a team as a JSON object

__Arguments__

* team - The 3-letter abbreviation of the team
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the team depth chart
sportsdata.getTeamDepthChart('DAL', function(error, data) {
 if (!error) {
    console.log(data);
  }
});
```

---------------------------------------

<a name="getWeeklyLeagueLeaders" />
### getWeeklyLeagueLeaders(week, callback)

Returns the weekly leaders as a JSON object

__Arguments__

* week - The week in question
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the weekly leaders
sportsdata.getWeeklyLeagueLeaders(1, function(error, data) {
 if (!error) {
    console.log(data);
  }
});
```

---------------------------------------

<a name="getStandings" />
### getStandings(callback)

Returns the standings as a JSON object

__Arguments__

* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the standings
sportsdata.getStandings(function(error, data) {
 if (!error) {
    console.log(data);
  }
});
```

---------------------------------------

<a name="getSeasonalStats" />
### getSeasonalStats(team, callback)

Returns the seasonal stats for a team as a JSON object

__Arguments__

* team - The 3-letter abbreviation of the team
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the seasonal stats for a team
sportsdata.getSeasonalStats('DAL', function(error, data) {
 if (!error) {
    console.log(data);
  }
});
```


## NBA API

<a name="initNba" />
### init(access_level, version, apikey, seasonID, season)

Inits the object with your API data, including your API key.

__Arguments__

* access_level - Your API access level
* version - The version of the API to use
* apikey - Your API key
* seasonID - The year
* season - The season type

__Example__

```js
// Init the object with the access level, version, apikey, seasonID, and season you care about
var sportsdata_nba = require('sportsdata').NBA;
sportsdata_nba.init('t', 2, apikey, '2012', 'REG');
```

---------------------------------------

<a name="getSeasonScheduleNba" />
### getSeasonSchedule(callback)

Returns the schedule for the entire season as a JSON object

__Arguments__

* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the schedule for the entire NBA season
sportsdata.getSeasonSchedule(function(error, schedule) {
 if (!error) {
    console.log(schedule);
  }
});
```

---------------------------------------

<a name="get3DaySchedule" />
### get3DaySchedule(callback)

Returns the rolling 3-day schedule as a JSON object

__Arguments__

* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the rolling 3-day schedule
sportsdata.get3DaySchedule(function(error, schedule) {
 if (!error) {
    console.log(schedule);
  }
});
```

---------------------------------------

<a name="getStandingsNba" />
### getStandings(callback)

Returns the standings as a JSON object

__Arguments__

* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the standings
sportsdata.getStandings(function(error, schedule) {
 if (!error) {
    console.log(schedule);
  }
});
```

---------------------------------------

<a name="getRosters" />
### getRosters(callback)

Returns the rosters as a JSON object

__Arguments__

* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the rosters
sportsdata.getRosters(function(error, schedule) {
 if (!error) {
    console.log(schedule);
  }
});
```

---------------------------------------

<a name="getGameScoreAndStats" />
### getGameScoreAndStats(gameid, callback)

Returns the game score and stats of a specific game as a JSON object

__Arguments__

* gameid - The id of the game in question. This value is returned from the API call [getSeasonSchedule](#getSeasonScheduleNba).
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the rosters
sportsdata.getGameScoreAndStats(2393, function(error, schedule) {
 if (!error) {
    console.log(schedule);
  }
});
```

---------------------------------------

<a name="getPlayByPlayNba" />
### getPlayByPlay(gameid, callback)

Returns the play-by-play of a specific game as a JSON object

__Arguments__

* gameid - The id of the game in question. This value is returned from the API call [getSeasonSchedule](#getSeasonScheduleNba).
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the play-by-play
sportsdata.getPlayByPlay(2393, function(error, schedule) {
 if (!error) {
    console.log(schedule);
  }
});
```

---------------------------------------

<a name="getEventsGloassary" />
### getEventsGloassary(callback)

Returns the events glossary as a JSON object

__Arguments__

* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the events glossary
sportsdata.getEventsGloassary(function(error, schedule) {
 if (!error) {
    console.log(schedule);
  }
});
```

---------------------------------------

<a name="getSeasonalStatsNba" />
### getSeasonalStats(teamid, callback)

Returns the events glossary as a JSON object

__Arguments__

* teamid - The id of the team in question. This value is returned from the API call [getStandings](#getStandingsNba).
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the events glossary
sportsdata.getSeasonalStats(7406, function(error, schedule) {
 if (!error) {
    console.log(schedule);
  }
});
```
