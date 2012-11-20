# node-sportsdata -- Easy wrapper around the SportsData API

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

## Simple Example

```javascript
var sportsdata = require('index_nfl');
sportsdata.getSeasonSchedule(function(error, schedule) {
 if (!error) {
    console.log(schedule) // Print the season schedule for the NFL season
  }
});
```
## Documentation

### NFL

* [getWeeklySchedule](#getWeeklySchedule)

### NBA

* [forEach](#forEach)

## NFL

<a name="getWeeklySchedule" />
### getWeeklySchedule(week, callback)

Returns the schedule for the week in question as a JSON object

__Arguments__

* week - The week to retrieve the schedule for
* callback(err, body) - A callback which is called after the call has returned, or an error has occurred.

__Example__

```js
// Fetch the schedule for Week 1 of the NFL season

sportsdata.getWeeklySchedule(1, function(error, schedule) {
 if (!error) {
    console.log(schedule) // Print the season schedule for the NFL season
  }
});
```

---------------------------------------