# 문제: https://www.acmicpc.net/problem/10815

import sys
from bisect import bisect_left, bisect_right

input = sys.stdin.readline

def read_int_list():
    return list(map(int, input().split()))


def read_int():
    return int(input())


def main():
    N = read_int()
    cards = read_int_list()
    M = read_int()

    cards.sort()

    result = []

    for target in read_int_list():
        flag = 0

        start = 0
        end = len(cards)

        while start < end:
            mid = (start + end) // 2
            current = cards[mid]

            if current == target:
                flag = 1
                break
            elif current > target:
                end = mid
            else:
                start = mid + 1
            
        result.append(flag)
    
    print(*result)

    return

def main2():
    N = read_int()
    cards = read_int_list()
    M = read_int()
    
    cards.sort()
    result = []
    for target in read_int_list():
        l = bisect_left(cards, target)
        r = bisect_right(cards, target)
        result.append(1 if r - l else 0)
    
    print(*result)

    return


if __name__ == "__main__":
    main2()
