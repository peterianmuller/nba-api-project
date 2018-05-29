


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
	let thPosition = $('<th></th>').append(document.createTextNode('position'));

	// create height header
	let thHeight = $('<th></th>').append(document.createTextNode('height'));

	// create jerseyNum header
	let thJerseyNum = $('<th></th>').append(document.createTextNode('number'));

	// create DOB header
 	
 	// check if DOB exists
 	if (player.dateOfBirthUTC) {
		var thDOB = $('<th></th>').append(document.createTextNode('DOB'))
	}

	// append trHead and tHead to table
	trHead.append(thPosition);
	trHead.append(thHeight);
	trHead.append(thJerseyNum);
	if (player.dateOfBirthUTC) {
		trHead.append(thDOB);
	}
	thead.append(trHead);
	table.append(thead);

	// create table body
	let tbody = $('<tbody></tbody>');
	let trBody = $('<tr></tr>');
	let tdPosition = $('<td></td>').append(document.createTextNode(player.pos));
	let tdHeight = $('<td></td>').append(
		document.createTextNode(`${player.heightFeet} feet ${player.heightInches} inches`)
	);
	let tdJerseyNum = $('<td></td>').append(document.createTextNode(player.jersey));

	if (player.dateOfBirthUTC) {
		var tdDOB = $('<td></td>').append(document.createTextNode(player.dateOfBirthUTC));
	}

	// append td to tr

	trBody.append(tdPosition);
	trBody.append(tdHeight);
	trBody.append(tdJerseyNum);

	if (player.dateOfBirthUTC) {
		trBody.append(tdDOB);
	}

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
				makeTableOfSinglePlayer(data[i]);
			}
		}
	});
});
