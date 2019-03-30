# 1. Fish

못 풀었음. 숙제로 하는걸로...

# 2. Brackets

```python
def solution(S):
    stack = []
    for i in S:
        if i in ['(', '[', '{']:
            stack.append(i)
        try:
            if i == ')' and stack[-1] == '(':
                stack.pop()
            
            if i == ']' and stack[-1] == '[':
                stack.pop()
            
            if i == '}' and stack[-1] == '{':
                stack.pop()
        except IndexError:
            return 0
            
    if len(stack) == 0:
        return 1
    return 0
```

- - -

# 3. Nested

2번이랑 똑같은 답으로 해결됨...

- - -

# 4. Stone Wall
풀기 실패
아래는 모범 답안  

```python
def solution(H):
    # write your code in Python 3.6
    N = len(H)
    stack = [0] * N
    stack_num = 0
    answer = 0
    
    for i in range(N):
        while stack_num > 0 and stack[stack_num - 1] > H[i]:
            stack_num -= 1
            
        if stack_num >0 and stack[stack_num - 1] == H[i]:
            pass
        
        else:
            answer += 1
            stack[stack_num] = H[i]
            stack_num += 1
    return answer
```
이게 쉬움이라니...
