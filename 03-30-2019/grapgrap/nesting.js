// brackets와 동일한 문제

function solution(S) {
  const brackets = S;
  const stack = [];
  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];
    if (stack.length === 0) {
      if (bracket === ')') {
        return 0;
      } else {
        stack.push(bracket);
      }
    } else {
      const top = stack[stack.length - 1];
      if (bracket === ')' && top === '(') {
        stack.pop();
      } else if (bracket === '(') {
        stack.push(bracket);
      }
    }
  }
  return +!(stack.length > 0);
}