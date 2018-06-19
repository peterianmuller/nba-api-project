// document.querySelector(`input[type='submit']`).addEventListener(`click`, e => {
// 	e.preventDefault();
// 	let player1 = document.querySelector(`form input:nth-of-type(1)`).value;
// 	let player2 = document.querySelector(`form input:nth-of-type(2)`);
// 	console.log(player1);
// });

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
				name: curr.commonPlayerInfo[0].displayFirstLast
			}
		]);
		return memo;
	}, []);

	console.log(data);

	let chart = d3.select('.player-chart');
	let bar = chart.selectAll('div');
	let barUpdate = bar.data(data);
	let barEnter = barUpdate.enter().append('div');
	barEnter.style(`width`, d => d.stat * 10 + `px`);
	barEnter.style(`background-color`, `steelblue`);
	barEnter.style(`color`, `#fff`);
	barEnter.text(d => `${d.name}: ${d.stat}`);
};
