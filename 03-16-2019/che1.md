# 1. PassingCars

```python
def pre_sum(A):
    n = len(A)
    P = [0] * (n + 1)
    for i in range(1, n + 1):
        P[i] = P[i-1] + A[i-1]
    return P

def solution(A):
    # write your code in Python 3.6
    P = pre_sum(A)
    result = 0
    for index, value in enumerate(A):
        if value == 0:
            result += P[-1] - P[index]
    if result > 1000000000:
        return -1
    return result
```

- - -

# 2. GenomicRangeQuery
풀기 실패ㅋㅋㅠㅠ

- - -

# 3. MinAvgTwoSlice

```python
def pre_sum(l):
    n = len(l)
    P = [0] * (n + 1)
    for i in range(1, n+1):
        P[i] = P[i-1] + l[i-1]
    return P
    
def count_total(P, x, y):
    return P[y + 1] - P[x]
    
def divide(P, x, y):
    t = count_total(P, x, y)
    return t / (y - x + 1)

def solution(A):
    # write your code in Python 3.6
    sumed = pre_sum(A)
    min_num = 1000000000000000
    min_ind = 0

    for i in range(0, len(A)):
        for j in range(1, 3):
            if i+j > len(A)-1:
                continue
            d = divide(sumed, i, i+j)
            if d is None:
                continue
            elif d < min_num:
                min_num = d
                min_ind = i
            elif d == min_num:
                if min_ind > i:
                    min_ind = i
    return min_ind
```
