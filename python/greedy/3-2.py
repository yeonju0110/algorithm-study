# 큰 수의 법칙

n, m, k = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()
first = arr[n - 1]
second = arr[n - 2]

cnt = (m // (k + 1)) * k
cnt += m % (k + 1)

sum = 0
sum += cnt * first
sum += (m - cnt) * second

print(sum)