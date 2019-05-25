// 답은 전부 맞았는데 속도가 안나와

function solution(M, A) {
  let count = A.length;

  let results = A.map(number => [number]);
  while(1) {
    if (results.every(array => array === null)) break;
    if (results.length === 0) break;

    for (let i = 0; i < results.length - 1; i++) {
      const result = compare(results[i], results[i + 1]);
      if (result !== null) count++;
      results[i] = result;
    }
    results = results.slice(0, -1);
  }
  return count;
}

const compare = (target, compare) => {
  if (target === null || compare === null) return null;
  const first = target[0];
  const last = [...compare].pop();
  return first === last ? null : [...target, last];
};

const M = 6;
let A = [];
for (let i = 0; i < 100000; i++) {
  A[i] = Math.random();
}
console.log(A);
const result = solution(M, A);
console.log(result);
