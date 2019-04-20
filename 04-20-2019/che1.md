# MaxProfit

100%가 나왔지만 제대로된 풀이는 아닌 것 같다. 테스트 케이스들만 잘 통과시킨 느낌...

```python
def solution(A):
    # write your code in Python 3.6
    minimum = 200000
    second_min = 0
    min_index = 0
    second_min_index = 0
    
    
    max_profit_1 = 0
    max_profit_2 = 0
    
    for i, v in enumerate(A):
        if minimum > v:
            second_min = minimum
            minimum = v
            
            second_min_index = min_index
            min_index = i
    
    for v in A[min_index:]:
        profit = v - minimum
        if profit > max_profit_1:
            max_profit_1 = profit
            
    for v in A[second_min_index:]:
        profit = v - second_min
        if profit > max_profit_2:
            max_profit_2 = profit
            
    max_profit = max(max_profit_1, max_profit_2)
    
    if max_profit < 0:
        return 0
    return max_profit
```

아래는 모범 답안...

```python
def solution(A):
    min_day = 200000
    max_profit = 0
    for a in A:
        min_day = min(a, min_day)
        max_profit = max(max_profit, a - min_day)
    return max_profit
```

- - -

# MaxSliceSum

```python
def solution(A):
    # write your code in Python 3.6
    if len(A) == 1:
        return A[0]
        
    max_sum = 0
    max_val = -1000000
    max_slice = 0
    
    all_neg = True
    for a in A:
        if a >= 0:
            all_neg = False
        max_val = max(max_val, a)
        max_sum = max(0, max_sum + a)
        max_slice = max(max_slice, max_sum)
    
    if all_neg:
        return max(A)

    return max(max_slice, max_val)
```

- - -

# MaxDoubleSliceSum

못 풀어서 모범 답안을 보았다... 양쪽 끝에서부터 계산해오는 방식을 왜 생각 못했을까...

```python
def solution(A):
    N = len(A)
    starts, ends = [0] * N, [0] * N
    for i in range(1,N-1):
        left, right = i, N-i-1
        starts[left] = max(starts[left - 1] + A[left], 0)
        ends[right] = max(ends[right + 1] + A[right], 0)
    return max((starts[i-1] + ends[i+1] for i in range(1, N-1)))
```
