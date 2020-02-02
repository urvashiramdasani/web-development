console.log("PRINT ALL EVEN NUMBERS DIVISIBLE BY 5 AND 3BETWEEN 5 AND 50");
var num = 5;
while(num<=50) {
	if (num%3===0 && num%5===0) {
		console.log(num);
	}
	num++;
}