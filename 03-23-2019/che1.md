# 1: Distinct
```python
def solution(A):
    return len(set(A))
```

- - -

# 2: MaxProductOfThree
```python
def solution(A):
    # 먼저 정렬을 한다
    A = sorted(A)
    # 모두 음수이면 제일 뒤 세 숫자를 곱함
    if A[-1] < 0:
        return A[-1] * A[-2] * A[-3]
    
    # 제일 앞자리 두개의 곱이 제일 뒷자리 두개 또는 끝에서 두, 세번째의 곱보다 크면
    # 제일 앞 두개와 제일 큰 수를 곱한다.
    # 음수 양수가 섞인 경우를 고려한 것임.
    if A[0] * A[1] > A[-1] * A[-2] or A[0] * A[1] > A[-2] * A[-3]:
        return A[0] * A[1] * A[-1]
    
    # 보통의경우 그냥 제일 큰거 세개 곱해서 리턴
    else:
        return A[-1] * A[-2] * A[-3]
```

- - -

# 3: Triangle

```python
def solution(A):
    A.sort()
    
    if len(A) < 3:
        return 0

    while len(A) > 2:
        if A[-2] + A[-3] <= A[-1]:
            A.pop()
        else: 
            return 1
    
    return 0
```

- - -
