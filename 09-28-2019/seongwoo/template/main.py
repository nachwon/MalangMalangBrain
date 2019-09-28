import os


def solution():
    return -1


class ReadContext(object):
    def __init__(self, file_name=None):
        if not file_name:
            file_name = 'input.txt'
        dir_name = os.path.dirname(os.path.abspath(__file__))
        if os.path.exists('{0}/{1}'.format(dir_name, file_name)):
            self._file_obj = open('{0}/{1}'.format(dir_name, file_name), 'r')
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
        print(r.input())
        answer = solution()
