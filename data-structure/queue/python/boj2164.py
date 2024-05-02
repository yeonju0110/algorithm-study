from collections import deque
import sys

input = sys.stdin.readline

def read_int():
    return int(input())

def main():
    n = read_int()
    q = deque([i for i in range(1, n + 1)])
    while len(q) > 1:
        q.popleft()
        q.append(q.popleft())

    print(q.popleft())
    return

if __name__ == "__main__":
    main()
