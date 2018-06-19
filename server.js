var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
const nba = require('nba.js');
const NBA = require('nba');

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

var players = [];

app.get('/nbaAPI', (req, res) => {
	nba.data
		.playoffsBracket({
			year: 2017
		})
		.then(response => {
			console.log(res);
			res.send(response);
		})
		.catch(function(err) {
			console.error(err);
		});
});

// get Id for each person on the team
// Then I'd need to
app.get('/teams', (req, res) => {
	nba.data
		.teamRoster({
			year: 2017,
			teamName: `rockets`
		})
		.then(response => {
			console.log(res);
			res.send(response);
		})
		.catch(function(err) {
			console.error(err);
		});
});

// this is broken
app.get('/stats', (req, res) => {
	console.log('stats endpoint hit');
	nba.stats.allPlayers().then(response => {
		console.log(response.data);
	});
});

//but this isn't if I want to use the native stats.nba API endpoint.
app.get('/stats-test', (req, res) => {
	console.log('right route');
	axios
		.get('http://stats.nba.com/stats/scoreboard/?GameDate=02/14/2015&LeagueID=00&DayOffset=0')
		.catch(function(error) {
			console.log(`error is: ${error}`);
		})
		.then(response => {
			console.log(response);
			res.send(response.data);
		});
});

app.get('/nba', (req, res) => {
	console.log('right route');
	axios
		.get('http://data.nba.net/data/10s/prod/v1/2017/players.json')
		.catch(function(error) {
			console.log(`error is: ${error}`);
		})
		.then(response => {
			players = players.length ? players : response.data.league.standard;
			console.log(players.length);
			res.send(response.data.league.standard);
		});
});

// get players data to compare
app.get('/player-comparison', (req, res) => {
	let playersInfoAndStat = [req.query.stat];
	let player1 = NBA.findPlayer(req.query.player1);
	let player2 = NBA.findPlayer(req.query.player2);

	NBA.stats.playerInfo({ PlayerID: player1.playerId }).then(response => {
		playersInfoAndStat.push(response);
		NBA.stats.playerInfo({ PlayerID: player2.playerId }).then(response => {
			playersInfoAndStat.push(response);
			res.send(playersInfoAndStat);
		});
	});
});

var server = app.listen(8080);
