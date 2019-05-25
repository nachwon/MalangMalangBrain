// const A = [4,3,4,4,4,2];
// const A = [2, 2, 2, 3, 2, 2, 2, 3, 3, 3, 2];
// const A = [6, 8, 4, 6, 8, 6, 6];
const A = [1,1,3,4,5,6,7,8,9];

function searchLeader(group) {
  const stack = [];
  const result = [];
  for (let i = 0; i < group.length; i++) {
    if (i === 0) {
      stack.push(group[i]);
    } else {
      if (stack.length === 0) {
        stack.push(group[i])
      } else {
        const top = stack[stack.length - 1];
        const current = group[i];
        if (top !== current) {
          stack.pop();
        } else {
          stack.push(group[i]);
        }
      }
    }
    result.push(stack[stack.length - 1]);
  }
  return result;
}

function solution(A) {
  const string = A;
  const reverse = A.slice().reverse();
  const stringStack = searchLeader(string);
  const reverseStack = searchLeader(reverse).slice(0, -1).reverse();

  let count = 0;
  for (let i = 0; i < string.length - 1; i++) {
    if (
      stringStack[i] !== undefined && reverseStack[i] !== undefined &&
      stringStack[i] === reverseStack[i]
    ) {
      count++;
    }
  }
  console.log(stringStack, reverseStack, count);
  return count;
}

solution(A);