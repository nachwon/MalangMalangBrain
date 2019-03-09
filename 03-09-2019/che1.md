문제 1번:
```python
def solution(A):
    # write your code in Python 3.6
    n = len(A)
    count = [0] * (n + 1)
    for i in A:
        try:
            count[i] += 1
        except IndexError:
            return 0
        if count[i] > 1:
            return 0
    return 1
```

- - -

문제 2번:
```python
def solution(X, A):
    # write your code in Python 3.6
    count = [1] + ([0] * X)
    leaves = 0
    for i in range(len(A)):
        if count[A[i]] == 0:
            count[A[i]] = 1
            leaves += 1
        if leaves == X:
            return i
    return -1
```

- - -

문제 3번:
```python
def solution(N, A):
    count = [0] * (N + 1)
    max_num_before = 0
    max_num = 0

    for i in A:
        if i == N + 1 and max_num_before == max_num:
            continue

        elif i == N + 1:
            count = [max_num] * (N + 1)
        
        else:
            count[i] += 1
            if count[i] > max_num:
                max_num_before = max_num
                max_num = count[i]
    return count[1:]
```

- - -

문제 4번:

```python
def solution(A):
    if len(A) == 1:
        if A[0] < 0:
            return 1
        elif A[0] == 1:
            return 2
        else:
            return 1
    max_num = max(A)
    count = [0] * (max_num + 1)
    
    for i in A:
        if i < 0:
            continue
        count[i] = 1

    if sum(count) == 0:
        return 1
        
    elif set(count[1:]) == {1}:
        return len(count)
        
    return count[1:].index(0) + 1
```
