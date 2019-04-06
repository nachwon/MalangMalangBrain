# 1. Dominator
```python
def fastLeader(A):
    n = len(A)
    leader = -1
    A.sort()
    candidate = A[n // 2]
    count = 0
    for i in range(n):
        if (A[i] == candidate):
            count += 1
        if (count > n // 2):
            leader = candidate
    return leader

def solution(A):
    B = A.copy()
    if len(A) == 0:
        return -1
    # write your code in Python 3.6
    l = fastLeader(A)
    if l == -1:
        return l
    return B.index(l)
```

---

# 2.Equileader

O(n**2) 플이...

```python
def getLeader(A):
    A = A.copy()
    n = len(A)
    A.sort()
    leader = -1
    candidate = A[n // 2]
    count = 0
    for i in range(n):
        if A[i] == candidate:
            count += 1
    
    if count > n // 2:
        leader = candidate
    return leader
    
    

def solution(A):
    # write your code in Python 3.6
    the_leader = 0
    count = 0
    for i in range(1, len(A)):
        l1 = getLeader(A[0:i])
        l2 = getLeader(A[i:])

        if l1 != -1 and l2 != -1 and l1 == l2:
            count += 1
    return count
```

결국 못풀어서 다른 사람 풀이 보고 다시 써본 풀이...

```python
def solution(A):
    # write your code in Python 3.6
    n = len(A)
    B = sorted(A)
    candidate = B[n // 2]
    total_count = 0
    leader = 0
    
    for i in range(n):
        if A[i] == candidate:
            total_count += 1
            
    if total_count > n // 2:
        leader = candidate
        
    if total_count < n // 2:
        return 0
    
    count = 0
    eq_count = 0
    for index, value in enumerate(A):
        if value == leader:
            count += 1
        if count > (index + 1) // 2 and (total_count - count) > (n - 1 - index) // 2:
            eq_count += 1
```
