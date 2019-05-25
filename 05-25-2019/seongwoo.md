# CountSemiprimes

핵심 아이디어는 주빈님(semiprime 판정 아이디어)

종현님이 아이디어 구체화 및 prefixsum 구체화

채원님이 prefixsum, countfactors 구체화 도움

나는 코딩만

```python
def is_semiprime(n):
    factors = []
    for i in range(2, n):
        quotient = n / i
        if quotient < i:
            break
        if n % i == 0:
            if factors:
                return False
            factors.extend([i, quotient])

    if len(factors) != 2:
        return False
    elif factors[0] == factors[1]:
        return True
    elif (factors[0] * factors[0]) == factors[1]:
        return False
    else:
        return True

def solution(N, P, Q):
    accumulated_count = 0
    _prefix_sum_semiprime = [accumulated_count]
    for number in range(1, N+1):
        _prefix_sum_semiprime.append(accumulated_count)
        if is_semiprime(number):
            accumulated_count += 1
    _prefix_sum_semiprime.append(accumulated_count)

    answers = []
    cache = {}
    for start, end in zip(P, Q):
        key = (start, end)
        answer = cache.get(key)
        if answer is None:
            answer = _prefix_sum_semiprime[end+1] - _prefix_sum_semiprime[start]
            cache[key] = answer
        answers.append(answer)
    return answers
```
