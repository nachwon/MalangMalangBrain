import os


def solution(board, n, x, y, cache):
    # cache hit
    if (x, y) in cache:
        return cache[(x, y)]

    if x > n - 1 or y > n - 1:
        ans = 'NO'
    elif x == n - 1 and y == n - 1:
        ans = 'YES'
    else:
        # right direction
        ans = solution(board=board, n=n, x=x, y=y + board[x][y], cache=cache)

        # down direction
        if ans == 'NO':
            ans = solution(board=board, n=n, x=x + board[x][y], y=y, cache=cache)

    # cache set
    cache[(x, y)] = ans
    return ans


class ReadContext(object):
    def __init__(self, file_name=None):
        if not file_name:
            file_name = 'input.txt'
        dir_name = os.path.dirname(os.path.abspath(__file__))
        if os.path.exists(f'{dir_name}/{file_name}'):
            self._file_obj = open(f'{dir_name}/{file_name}', 'r')
        else:
            self._file_obj = None

    def __enter__(self):
        return self

    def input(self):
        return self._file_obj.readline() if self._file_obj else input()

    def __exit__(self, _type, _value, _trace_back):
        if self._file_obj:
            self._file_obj.close()


if __name__ == '__main__':
    with ReadContext() as r:
        C = int(r.input().strip())
        for _ in range(C):
            N = int(r.input().strip())
            BOARD = [
                [int(value) for value in r.input().strip().split(' ')] for _ in range(N)
            ]
            answer = solution(board=BOARD, n=N, x=0, y=0, cache={})
            print(answer)
