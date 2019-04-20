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
