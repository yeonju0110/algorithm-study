# 문제: https://www.acmicpc.net/problem/2748

import sys

INF = float('inf')

input = sys.stdin.readline


def read_int():
    return int(input())


def main():
    n = read_int()
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    print(dp[n])
    return


if __name__ == "__main__":
    main()
