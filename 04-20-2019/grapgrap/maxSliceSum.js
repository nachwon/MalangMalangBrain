// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const numbers = A;
  const results = [];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      results.push(numbers[i]);
      results.push(sum);
      sum = 0;
    } else {
      sum = sum + numbers[i];
    }
  }
  return results.sort().reverse()[0];
}