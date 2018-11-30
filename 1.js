function sumPrimes(num) {
	let primeArr = [];
	for (let current = 2; current <= num; current++) {
		if (!primeArr.some(x => current % x === 0)) {
			primeArr.push(current);
		}
	}
			return primeArr.reduce((acc, curr) => acc += curr);

}
console.log(sumPrimes(50000));