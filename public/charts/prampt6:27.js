function sortKMessedArray(arr, k) {
	var range = k + 1;
	for (let i = 0; i < arr.length - 1; i++) {
		// O(n log(K))
		let chunk = arr.slice(0, i + range);
		// sort window
		insertionSort(chunk);
		// update original array with sorted window with splice
		if (chunk.length === arr.length) {
			return chunk;
		}
	}
	return arr;
}

function insertionSort(array) {
	for (var i = 1; i < array.length; i++) {
		var val = array[i];
		var hole = i;
		while (hole > 0 && val < array[hole - 1]) {
			array[hole] = array[hole - 1];
			hole -= 1;
		}
		array[hole] = val;
	}
}

let arr = [1, 6, 5, 2, 7, 9]; // k = 2

console.log(sortKMessedArray(arr, 2));

//let arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]

// start at the beginning of array at element 1
// examine range of k + 1 elements
// perform insertion sort on this range
// iterate to the right by 1
// repeat until array is sorted

//https://en.wikipedia.org/wiki/Sorting_algorithm
