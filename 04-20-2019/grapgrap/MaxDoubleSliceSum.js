// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function calculateMaxSum(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else if (numbers.length === 1) {
    return Math.max(0, numbers[0]);
  }

  if (numbers.every(element => element < 0)) {
    return 0;
  }

  let maxSum = 0;
  let maxSlice = 0;
  for (let i = 0; i < numbers.length; i++) {
    maxSum = Math.max(0, maxSum + numbers[i]);
    maxSlice = Math.max(maxSlice, maxSum);
  }
  return maxSlice;
}

function solution(A) {
  const numbers = A;
  if (numbers.length < 4) {
    return 0;
  } else if (numbers.length === 4) {
    return Math.max(...numbers);
  }

  const min = Math.min(...numbers.slice(1, -1));
  const index = numbers.findIndex(element => element === min);
  const front = numbers.slice(1, index);
  const back = numbers.slice(index + 1, -1);

  frontMax = calculateMaxSum(front);
  backMax = calculateMaxSum(back);

  console.log(front, back, frontMax, backMax);
  return frontMax + backMax;
}

// const A = [3, 2, 6, -1, 4, 5, -1, 2];
const A = [0, 10, -1, -5, -2, 7, -3, -2, 0];
const results = solution(A);
console.log(results);