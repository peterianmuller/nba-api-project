


const makeTableOfSinglePlayer = player => {
	let table = $('<table></table>');

	// create caption
	let caption = $('<caption></caption>');
	caption.append(document.createTextNode(`${player.firstName} ${player.lastName}`));
	table.append(caption);

	// create head
	let thead = $('<thead></thead>');

	// create tr
	let trHead = $('<tr></tr>');

	// create position header
	if (player.pos) {
		var thPosition = $('<th></th>').append(document.createTextNode('position'));
	}

	// create height header
	if (player.heightFeet !== '-') {	
		var thHeight = $('<th></th>').append(document.createTextNode('height'));
	}

	// create jerseyNum header
	if (player.jersey !== '') {
		var thJerseyNum = $('<th></th>').append(document.createTextNode('number'));
	}

	// create DOB header
 	
 	// check if DOB exists
 	if (player.dateOfBirthUTC) {
		var thDOB = $('<th></th>').append(document.createTextNode('DOB'))
	}

	// append trHead and tHead to table
	if (player.pos) {
		trHead.append(thPosition);
	}
	if (player.heightFeet !== '-') {
		trHead.append(thHeight);
	}
	if (player.jersey !== '') {
		trHead.append(thJerseyNum);
	}
	if (player.dateOfBirthUTC) {
		trHead.append(thDOB);
	}
	thead.append(trHead);
	table.append(thead);

	// create table body
	let tbody = $('<tbody></tbody>');
	let trBody = $('<tr></tr>');
	if (player.pos) {
		var tdPosition = $('<td></td>').append(document.createTextNode(player.pos));
	}
	if (player.heightFeet !== '-') {
		var tdHeight = $('<td></td>').append(
			document.createTextNode(`${player.heightFeet} feet ${player.heightInches} inches`)
		);
	}

	if (player.jersey !== '') {
		var tdJerseyNum = $('<td></td>').append(document.createTextNode(player.jersey));
	}

	if (player.dateOfBirthUTC) {
		var tdDOB = $('<td></td>').append(document.createTextNode(player.dateOfBirthUTC));
	}

	// append td to tr
	if (player.pos) {
		trBody.append(tdPosition);
	}

	if (player.heightFeet !== '-') {
		trBody.append(tdHeight);
	}

	if (player.jersey !== '') {
		trBody.append(tdJerseyNum);
	}

	if (player.dateOfBirthUTC) {
		trBody.append(tdDOB);
	}

	// append tr to tbody
	tbody.append(trBody);

	// append tbody to table

	table.append(tbody);

	$('.data-container').append(table);
};


const makeTableOfSinglePlayerAllowAllFields = player => {
	let table = $('<table></table>');

	// create caption
	let caption = $('<caption></caption>');
	caption.append(document.createTextNode(`${player.firstName} ${player.lastName}`));
	table.append(caption);

	// create head
	let thead = $('<thead></thead>');

	// create tr
	let trHead = $('<tr></tr>');

	// create position header

	var thPosition = $('<th></th>').append(document.createTextNode('position'));

	// create height header
	var thHeight = $('<th></th>').append(document.createTextNode('height'));
	
	// create jerseyNum header
	var thJerseyNum = $('<th></th>').append(document.createTextNode('number'));

	// create DOB header
 	
	var thDOB = $('<th></th>').append(document.createTextNode('DOB'))
	
	// append trHead and tHead to table
	
	trHead.append(thPosition);
	trHead.append(thHeight);
	trHead.append(thJerseyNum);
	trHead.append(thDOB);
	thead.append(trHead);
	table.append(thead);

	// create table body
	let tbody = $('<tbody></tbody>');
	let trBody = $('<tr></tr>');


	// append data for each table cell

	// append position data
	if (player.pos) {
		var tdPosition = $('<td></td>').append(document.createTextNode(player.pos));
	} else {
		var tdPosition = $('<td></td>').append(document.createTextNode(`N/A`));
	}


	// append height data
	if (player.heightFeet !== '-') {
		var tdHeight = $('<td></td>').append(
				document.createTextNode(`${player.heightFeet} feet`));
		tdHeight.append('<br/>');
		tdHeight.append(
				document.createTextNode(`${player.heightInches} inches`));
	} else {
			var tdHeight = $('<td></td>').append(
				document.createTextNode(`N/A`)
			);
	}

	// append jersey num

	if (player.jersey) {
		var tdJerseyNum = $('<td></td>').append(document.createTextNode(player.jersey));
	} else {
		var tdJerseyNum = $('<td></td>').append(document.createTextNode(`N/A`));
	}	

	// append DOB
	if (player.dateOfBirthUTC) {
		var tdDOB = $('<td></td>').append(document.createTextNode(player.dateOfBirthUTC));
	} else {
		var tdDOB = $('<td></td>').append(document.createTextNode(`N/A`));
	}
	

	// append td to tr

	trBody.append(tdPosition);	
	trBody.append(tdHeight);
	trBody.append(tdJerseyNum);
	trBody.append(tdDOB);
	
	// append tr to tbody
	tbody.append(trBody);

	// append tbody to table

	table.append(tbody);

	$('.data-container').append(table);
};

$('button:first-of-type').click(e => {
	console.log('click');
	$.ajax({
		method: 'GET',
		url: 'nba',
		dataType: 'json',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json;charset=UTF-8',
			'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
		},
		contentType: 'application/json',
		success: data => {
			console.log(data);
			for (let i = 0; i < data.length; i++) {
				//makeTableOfSinglePlayer(data[i]);
				makeTableOfSinglePlayerAllowAllFields(data[i]);
			}
		}
	});
});
