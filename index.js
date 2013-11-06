// Copyright 2010-2012 Ryan Gerard
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

var sportsdata_nfl = require('./index_nfl'),
    sportsdata_nba = require('./index_nba'),
    sportsdata_mlb = require('./index_mlb'),
    sportsdata_ncaaf = require('./index_ncaaf'),
    sportsdata_nhl = require('./index_nhl');

function createNfl() {
    return sportsdata_nfl;
}

function createNba() {
    return sportsdata_nba;
}

function createMlb() {
    return sportsdata_mlb;
}

function createNcaaf() {
    return sportsdata_ncaaf;
}

function createNhl() {
    return sportsdata_nhl;
}

module.exports.NFL = createNfl();
module.exports.NBA = createNba();
module.exports.MLB = createMlb();
module.exports.NCAAF = createNcaaf();
module.exports.NHL = createNhl();