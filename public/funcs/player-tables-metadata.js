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

	var thPosition = $('<th></th>').append(document.createTextNode('Position'));

	// create height header
	var thHeight = $('<th></th>').append(document.createTextNode('Height'));

	// create jerseyNum header
	var thJerseyNum = $('<th></th>').append(document.createTextNode('Number'));

	// create DOB header

	var thDOB = $('<th></th>').append(document.createTextNode('DOB'));

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
	trBody.attr('align', 'center');

	// append data for each table cell

	// append position data
	if (player.pos) {
		var tdPosition = $('<td></td>').append(document.createTextNode(player.pos));
	} else {
		var tdPosition = $('<td></td>').append(document.createTextNode(`N/A`));
	}

	// append height data
	if (player.heightFeet !== '-') {
		var tdHeight = $('<td></td>').append(document.createTextNode(`${player.heightFeet} feet`));
		tdHeight.append('<br/>');
		tdHeight.append(document.createTextNode(`${player.heightInches} inches`));
	} else {
		var tdHeight = $('<td></td>').append(document.createTextNode(`N/A`));
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
