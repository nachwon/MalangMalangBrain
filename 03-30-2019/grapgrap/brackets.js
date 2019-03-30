// top에 짝이 등장할 때 pop을 하고 이외의 경우가 발생하면 false를 내어주면 되는 문제

function solution(S) {
  const brackets = S;
  const stack = [];
  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];
    if (stack.length === 0) {
      if (bracket === ')' || bracket === '}' || bracket === ']') {
        return 0;
      } else {
        stack.push(bracket);
      }
    } else {
      const top = stack[stack.length - 1];
      if (bracket === ')' && top === '(') {
        stack.pop();
      } else if (bracket === '}' && top === '{') {
        stack.pop();
      } else if (bracket === ']' && top === '[') {
        stack.pop();
      } else if ( bracket === '(' || bracket === '{' || bracket === '[' ) {
        stack.push(bracket);
      }
    }
  }
  return +!(stack.length > 0);
}