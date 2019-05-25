const A =    [23171, 21011, 21123, 21366, 21013, 21367];
function solution(A) {
  const stocks = A;
  const gap = [];
  let prev = 0;
  for (let i = 0; i < stocks.length; i++) {
    if (i !== 0) {
      gap[i] = stocks[i] - prev;
    }
    prev = stocks[i];
  }
  let max = gap.slice().sort().reverse()[1];
  const reversed = gap.slice().reverse();
  let index = reversed.findIndex(element => element === max);
  let result = [];
  prev = 0;
  for (let i = index; i < reversed.length; i++) {
    if (i !== index) {
      result.push(reversed[i] + prev);
    }
    prev = reversed[i] + prev;
  }
  console.log(result.slice().sort().reverse());
  return result.slice().sort().reverse()[1];
}

solution(A);