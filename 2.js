function sumPrimes(num) {
	//define empty array to push prime numbers into
	let primeArr = [];
	//for loop that iterates all single integers between 2 
	for (let current = 2; current <= num; current++) {
		//if statement pushes numbers to the array if they're not divisible by the numbers currently present 
		//in the array e.g. previous prime numbers
		if (!primeArr.some(x => current % x === 0)) {
			primeArr.push(current);
		}
	}
	//adding all numbers in the array using reduce
	return primeArr.reduce((acc, curr) => acc += curr);

}
console.log(sumPrimes(50000));