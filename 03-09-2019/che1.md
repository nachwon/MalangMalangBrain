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
        
    return count[1:].index(0) + 1<Paste>
```
