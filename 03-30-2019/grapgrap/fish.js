// count 는 위로 살아 올라간 물고기의 수
// stack.length 는 아래로 살아 내려간 물고기의 수
// 한 마리 물고기가 한 마리만 먹지 않는다는 것만 기억한다면 그리 어려운 문제는 아니였음.

function solution(A, B) {
  const directions = B;
  const fishes = A;
  let count = 0;
  const stack = [];
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === 1) {
      stack.push(fishes[i]);
    } else {
      while(true) {
        if (stack.length === 0) {
          count++;
          break;
        }
        let top = stack[stack.length - 1];
        if (fishes[i] < top) {
          break;
        } else {
          stack.pop();
        }
      }
    }
  }
  return count + stack.length;
}
