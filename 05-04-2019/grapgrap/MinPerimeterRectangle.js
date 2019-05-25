const calcRound = (x, y) => 2 * (x + y);

function solution(N) {
  const number = N;
  const sqrt = Math.sqrt(number);
  const rounds = [];
  for (let i = 1; i < sqrt; i++) {
    if (Number.isInteger(number / i)) {
      const round = calcRound(number / i, i);
      rounds.push(round);
    }
  }
  const isCenter = Number.isInteger(sqrt);
  if (isCenter) {
    const round = calcRound(sqrt, sqrt);
    rounds.push(round);
  }
  return Math.min(...rounds);
}