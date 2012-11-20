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

## Configure

Modify config.js and input your own API key and API access level for whatever sports you have a key for.

## Simple Examples

```javascript
var sportsdata_nfl = require('index_nfl');
sportsdata_nfl.getSeasonSchedule(function(error, schedule) {
 if (!error) {
    console.log(schedule) // Print the season schedule for the NFL season
  }
});

var sportsdata_nba = require('index_nba');
sportsdata_nba.getSeasonSchedule(function(error, schedule) {
 if (!error) {
    console.log(schedule) // Print the season schedule for the NBA season
  }
});
```
## Documentation

### NFL

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

* [getSeasonSchedule](#getSeasonScheduleNba)

## NFL API

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

<a name="getSeasonScheduleNba" />
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