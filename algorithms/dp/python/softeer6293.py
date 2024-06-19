import sys
input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))

dp = [1] * N

for now in range(1, N):
    max_prev = 0
    for prev in range(now):
        if A[now] >= A[prev]:
            max_prev = max(max_prev, dp[prev])
    dp[now] = max_prev + 1

print(max(dp))