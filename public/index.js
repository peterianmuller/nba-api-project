$('.player-metadata-controls button:first-of-type').click(e => {
	console.log('click');
	$.ajax({
		method: 'GET',
		url: 'nba',
		dataType: 'json',
		contentType: 'application/json',
		success: data => {
			console.log(data);
			for (let i = 0; i < data.length; i++) {
				makeTableOfSinglePlayerAllowAllFields(data[i]);
			}
		}
	});
});

$('section:first-of-type button:nth-of-type(2)').click(e => {
	$('.data-container').html('');
});
