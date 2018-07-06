document.querySelector(`.player-selection`).addEventListener(`click`, e => {
	e.preventDefault();
	let player1 = document.querySelector(`select:nth-of-type(1) option`).value;
	let player2 = document.querySelector(`select:nth-of-type(2) option`).value;
	let stat = document.querySelector(`select:nth-of-type(3)`).value;
	console.log($, player1, player2);
	$.ajax({
		method: `GET`,
		url: `/player-comparison`,
		data: {
			player1: player1,
			player2: player2,
			stat: stat
		},
		success: res => {
			console.log(res);
			createChart(
				res[0],
				res[1].playerHeadlineStats[0].playerName,
				res[2].playerHeadlineStats[0].playerName,
				res.slice(1)
			);
		}
	});
});

const createChart = (stat, player1, player2, response) => {
	console.log(`stat: ${stat}`);
	let data = response.reduce((memo, curr) => {
		console.log(curr.playerHeadlineStats[0][stat]);
		memo = memo.concat([
			{
				stat: curr.playerHeadlineStats[0][stat],
				name: curr.commonPlayerInfo[0].displayFirstLast,
				statType: stat
			}
		]);
		return memo;
	}, []);

	console.log(data);

	// Create variable for the SVG
	var svg = d3
		.select('body')
		.append('svg')
		.attr('height', '300px')
		.attr('width', '25%');

	svg
		.selectAll('rect')
		.data(data)
		.enter()
		.append('rect')
		.attr('class', 'bar')
		.attr('height', function(d, i) {
			return d.stat * 10;
		})
		.attr('width', '70')
		.attr('x', function(d, i) {
			return i * 90 + 25;
		})
		.attr('y', function(d, i) {
			return 300 - d.stat * 10;
		});

	// Select, append to SVG, and add attributes to text
	svg
		.selectAll('text')
		.data(data)
		.enter()
		.append('text')
		.text(function(d) {
			return `${d.name.split(' ')[0][0]} ${d.name.split(' ')[1][0]}: ${d.stat}`;
		})
		.attr('class', 'text')
		.attr('x', function(d, i) {
			return i * 90 + 28;
		})
		.attr('y', function(d, i) {
			return 320 - d.stat * 10;
		});
};
