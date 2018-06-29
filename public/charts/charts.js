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
			createChart2(
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
				name: curr.commonPlayerInfo[0].displayFirstLast
			}
		]);
		return memo;
	}, []);

	console.log(data);

	let chart = d3.select('.player-chart');
	let bar = chart.select('div');
	let barUpdate = bar.data(data);
	let barEnter = barUpdate.enter().append('div');
	barEnter.style(`width`, d => d.stat * 10 + `px`);
	barEnter.style(`background-color`, `steelblue`);
	barEnter.style(`color`, `#fff`);
	barEnter.text(d => `${d.stat}`);
	let label = barUpdate.enter().append('span');
	label.text(d => `${d.name}: ${d.stat}`);
};

const createChart2 = (stat, player1, player2, response) => {
	console.log(`stat: ${stat}`);
	let data = response.reduce((memo, curr) => {
		console.log(curr.playerHeadlineStats[0][stat]);
		memo = memo.concat([
			{
				stat: curr.playerHeadlineStats[0][stat],
				name: curr.commonPlayerInfo[0].displayFirstLast
			}
		]);
		return memo;
	}, []);

	console.log(data);

	var width = 960,
		height = 500;

	var x = d3.scaleLinear().range([0, width]);
	var y = d3.scaleLinear().range([0, height]);

	var chart = d3
		.select('.chart')
		.attr('width', width)
		.attr('height', height);

	var bar = chart
		.selectAll('g')
		.data(data)
		.enter()
		.append('g')
		.attr('transform', function(d) {
			return 'translate(' + x(d.stat) / 100 + ',0)';
		});

	bar
		.append('rect')
		.attr('y', function(d) {
			return y(d.stat) / 100;
		})
		.attr('height', function(d) {
			return height - y(d.stat) / 100;
		})

		.attr('width', `20px`);

	// let chart = d3.select('.player-chart');
	// let bar = chart.select('div');
	// let barUpdate = bar.data(data);
	// let barEnter = barUpdate.enter().append('div');
	// barEnter.style(`height`, d => d.stat * 10 + `px`);
	// barEnter.style(`width`, `40px`);
	// barEnter.style(`display`, `inline-block`);
	// barEnter.style(`background-color`, `steelblue`);
	// barEnter.style(`color`, `#fff`);
	// barEnter.text(d => `${d.stat}`);
};
