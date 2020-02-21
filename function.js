function isEven(num) {
	if(num%2===0) {
		return true
	}
	else {					//return num%2===0
		return false
	}
}

function factorial(num){
	var fact = 1
	while(num>0){
		fact = fact*num
		num--
	}
	return fact
}

function kebabToSnake(str){
	newstr = str.replace(/-/g,"_")
	return newstr
}