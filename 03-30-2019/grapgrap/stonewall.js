// 아이디어는 올바른 방향으로 잡았지만, 푸는 방식이 잘못되었었음.
// top < height 상황에서 height push 하고, top === height 일 때는 push 하지 않는 것을 처리 하다가 미로에 빠짐.


function solution(H) {
  const heights = H;
  let count = 0;
  const stack = [];
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    let top = stack[stack.length - 1];

    while (stack.length > 0 && top > height) {
      stack.pop();
      top = stack[stack.length - 1];
    }

    if (stack.length === 0 || top < height) {
      stack.push(height);
      count++;
    }
  }
  return count;
}