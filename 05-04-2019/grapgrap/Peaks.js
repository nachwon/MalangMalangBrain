// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const computeIsPeek = (x, y, z) => {
  return x < y && y > z;
};

const computePrimes = (number) => {
  const sqrt = Math.sqrt(number);
  const primes = [];
  for (let i = Math.floor(sqrt); i > 0; i--) {
    if (number % i === 0) {
      const prime = number / i;
      const pair = number / prime;
      primes.push(...[prime, pair]);
    }
  }
  return primes.sort((x, y) => y - x);
};

const hasPeek = (peeks) => peeks.reduce((prev, isPeek) => prev || isPeek, false);

function solution(A) {
  const numbers = A;
  const peeks = numbers.slice().map((number, index) =>
    index < 1 || numbers.length - 1 < index ? false : computeIsPeek(numbers[index - 1], number, numbers[index + 1]));
  if (peeks.every(isPeek => isPeek === false)) return 0;
  const primes = computePrimes(numbers.length);
  let result = 0;
  let hasPeekEverySlice;
  for (let j = 0; j < primes.length; j++) {
    const prime = primes[j];
    for (let i = 0; i < numbers.length / prime; i++) {
      const slice = peeks.slice(i * prime, (i + 1) * prime);
      if (hasPeekEverySlice === undefined) hasPeekEverySlice = hasPeek(slice);
      else hasPeekEverySlice = hasPeekEverySlice && hasPeek(slice);
      if (hasPeekEverySlice) {
        break;
      }
    }
    if (hasPeekEverySlice) {
      result = numbers.length / prime;
    }
  }
  return result;
}