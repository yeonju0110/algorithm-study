# 문제: https://www.acmicpc.net/problem/2309

from itertools import combinations
import sys

input = sys.stdin.readline

def read_int():
    return int(input())

def main():
    heights = [read_int() for _ in range(9)]
    
    for combi in combinations(heights, 7):
        if sum(combi) == 100:
            for height in sorted(combi):
                print(height)
            break

    return

def main2():
    heights = [read_int() for _ in range(9)]
    heights.sort()
    total = sum(heights)

    def solve():
        for i in range(8):
            for j in range(i + 1, 9):
                if total - heights[i] - heights[j] == 100:
                    for k in range(9):
                        if i != k and j != k:
                            print(heights[k])
                    return

    solve()
    return

if __name__ == "__main__":
    main()
