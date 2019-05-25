const solution = (A) => {
  const sorted = A.sort((x, y) => x - y);
  let start = 0;
  let end = start + 1;
  let compare = end + 1;

  const next = () => {
    compare = compare + 1;
    if (end > sorted.length - 2) {
      start = start + 1;
      end = end + 1;
      compare = end + 1;
    } else if (compare > sorted.length - 1) {
      end = end + 1;
      compare = end + 1;
    }
  };

  let count = 0;
  while (start < sorted.length - 2) {
    if (sorted[start] + sorted[end] <= sorted[compare]) {
      next();
    } else {
      console.log(start, end, compare);
      count = count + 1;
      next();
    }
  }
  return count;
};

const A = [3, 3, 5, 6];
const result = solution(A);
console.log(result);