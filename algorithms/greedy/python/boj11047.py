# 문제: https://www.acmicpc.net/problem/11047

import sys

input = sys.stdin.readline

def read_int_list():
    return list(map(int, input().split()))

def read_int():
    return int(input())

def main():
    n, k = read_int_list()
    coins = [read_int() for _ in range(n)]
    coins.reverse()

    cnt = 0
    for coin in coins:
        cnt += k // coin
        k %= coin
    print(cnt)
    return

if __name__ == "__main__":
    main()
