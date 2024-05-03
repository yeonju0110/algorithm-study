# 문제: https://www.acmicpc.net/problem/11051

import sys
sys.setrecursionlimit(10 ** 7)

input = sys.stdin.readline

def read_int_list():
    return list(map(int, input().split()))


def main():
    N, K = read_int_list()
    dp = [[1] * (i + 1) for i in range(N + 1)]

    dp[1][0] = 1
    dp[1][1] = 1
    
    for i in range(2, N + 1):
        for j in range(1, i):
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
        dp[i][i] = 1
    
    print(dp[N][K] % 10007)

    return

def main2():
    N, K = read_int_list()
    dp = [[0] * 1001 for _ in range(1001)]

    def bino(n, k):
        if dp[n][k]:
            return dp[n][k]
        
        if k == 0 or k == n:
            dp[n][k] = 1
        else:
            dp[n][k] = bino(n - 1, k - 1) + bino(n - 1, k)
            dp[n][k] %= 10007

        return dp[n][k]
    
    print(bino(N, K))

    return

if __name__ == "__main__":
    main2()
