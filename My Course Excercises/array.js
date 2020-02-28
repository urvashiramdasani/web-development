function printReverse(arr) {
	for(var i = arr.length-1; i>=0; i--) {
		console.log(arr[i])
	}
}

function isUniform(arr) {
	var tmp = arr[0];
	for(var i = 0; i<arr.length; i++) {
		if(tmp!==arr[i]) return false
	}
	return true
}

function sumArray(arr) {
	var sum = 0;
	arr.forEach(function(i) {
		sum = sum + i;
	});
	console.log(sum)
}

function max(arr) {
	var max = arr[0];
	arr.forEach(function(element) {
		if(max<element) max = element
	})
	console.log(max)
}

