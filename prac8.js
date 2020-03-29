function factorial(num) {
	var fact = 1
	while(num>0) {
		fact = fact*num
		num--
	}
	console.log(fact)
}

function merge_array(arr1, arr2) {
	console.log(arr1.concat(arr2))
	// console.log(arr1)
}