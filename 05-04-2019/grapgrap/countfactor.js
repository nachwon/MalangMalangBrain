function solution(N) {
  const number = N;
  const sqrt = Math.sqrt(number);
  let count = 0;
  for (let i = 1; i < sqrt; i++) {
    if (Number.isInteger(number / i)) {
      count += 2;
    }
  }
  const isCenter = Number.isInteger(sqrt);
  return count + (isCenter ? 1 : 0);
}