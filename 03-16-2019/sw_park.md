## 1. PassingCars

- First try, brute force, O(n^2)

    [https://app.codility.com/demo/results/training9UHGZU-BKH/](https://app.codility.com/demo/results/training9UHGZU-BKH/)

        def solution(A):
            count_pairs = 0
            for i, traveling_dir in enumerate(A):
                # means traveling to east
                if traveling_dir == 0:
                    for _traveling_dir in A[i+1:]:
                        # means traveling to west
                        if _traveling_dir == 1:
                            count_pairs += 1
            return count_pairs if count_pairs < 1000000000 else -1

- Second try, O(n^2)

    [https://app.codility.com/demo/results/trainingWUBFWE-G7B/](https://app.codility.com/demo/results/trainingWUBFWE-G7B/)

        def solution(A):
            east_cars = []
            west_cars = []
            for i, traveling_dir in enumerate(A):
                # means traveling to east
                if traveling_dir == 0:
                    east_cars.append(i)
                # means traveling to west
                else:
                    west_cars.append(i)

            count_pairs = 0
            length_west_cars = len(west_cars)
            for i in east_cars:
                count_pairs += length_west_cars
                for j in west_cars:
                    if i > j:
                        count_pairs -= 1
                if count_pairs > 1000000000:
                    return -1
            return count_pairs

- Third try

    미완... 두번째 for문에서 뒤에서부터 돌았으면 가능

        def solution(A):
            total_west_cars = sum(A)
            for i in range(len(A)):
                # means traveling to west
                if A[i] == 1:
                    A[i] = total_west_cars
                    total_west_cars -= 1

            count_pairs = 0
            for i, traveling_dir in enumerate(A):
                # means traveling to east
                if traveling_dir == 0:
                    for val in A[i+1:]:
                        if val != 0:
                            count_pairs += val
                            if count_pairs > 1000000000:
                                return -1
            return count_pairs

## 2. GenomicRangeQuery

- First try, brute force, O(n * m)

    [https://app.codility.com/demo/results/trainingZ8Z3HA-WVZ/](https://app.codility.com/demo/results/trainingZ8Z3HA-WVZ/)

        def solution(S, P, Q):
            # replace nucleotide with impact factor
            S = S.replace('A', '1').replace('C', '2').replace('G', '3').replace('T', '4')

            answers = []
            for i, j in zip(P, Q):
                sub_S = S[i:j+1]
                sub_S_without_duplicate = set(sub_S)
                answers.append(min([int(factor) for factor in sub_S_without_duplicate]))
            return answers

- Second try, O(n * m)

    [https://app.codility.com/demo/results/trainingEBP4GR-ESN/](https://app.codility.com/demo/results/trainingEBP4GR-ESN/)

        def solution(S, P, Q):
            # replace nucleotide with impact factor
            S = S.replace('A', '1').replace('C', '2').replace('G', '3').replace('T', '4')

            # cached
            cached = {}
            answers = []
            for i, j in zip(P, Q):
                key = (i, j)
                if key in cached:
                    min_factor = cached[key]
                else:
                    sub_S = S[i:j+1]
                    min_factor = min([int(factor) for factor in set(sub_S)])
                answers.append(min_factor)
            return answers

## 3. MinAvgTwoSlice

- First try, brute force, O(n^2)

    [https://app.codility.com/demo/results/trainingXR7BPQ-XNB/](https://app.codility.com/demo/results/trainingXR7BPQ-XNB/)

        def solution(A):
            min_avgs = []
            for p in range(len(A)):
                count = 1
                _sum = A[p]
                min_avg = 10001
                if p < len(A) - 1:
                    for q in range(p +1, len(A)):
                        count += 1
                        _sum += A[q]
                        # print(p, q, _sum)
                        avg = _sum / count
                        if min_avg > avg:
                            min_avg = avg
                if count > 1:
                    min_avgs.append(min_avg)

            answer = -1
            min_avg = 10001
            for i, avg in enumerate(min_avgs):
                if min_avg > avg:
                    min_avg = avg
                    answer = i
            return answer