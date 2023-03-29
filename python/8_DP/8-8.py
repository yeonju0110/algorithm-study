# 효율적인 화폐 구성

n, m = map(int, input().split())

arr = []
for i in range(n):
    arr.append(int(input()))

# dp 테이블 초기화
d = [10001] * (m + 1)

# dp, 보텀업
d[0] = 0
for i in range(n):
    for j in range(arr[i], m + 1):
        if d[j - arr[i]] != 10001: # (i - k)원을 만드는 방법이 존재하는 경우
            d[j] = min(d[j], d[j - arr[i]] + 1)

if d[m] == 10001:
    print(-1)
else:
    print(d[m])