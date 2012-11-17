# node-sportsdata -- Easy wrapper around the SportsData API

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

Modify config.js and input your own API key and API access level.

## Super simple to use

node-sportsdata is designed to be a simple wrapper around the SportsData API.

```javascript
var sportsdata = require('sportsdata');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})

sportsdata.getSeasonSchedule(function(error, schedule) {
 if (!error) {
    console.log(schedule) // Print the season schedule for the NFL season
  }
});
```