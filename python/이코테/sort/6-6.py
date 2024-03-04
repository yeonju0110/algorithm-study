# 위에서 아래로

n = int(input())

arr = [0] * n
for i in range(n):
    arr[i] = int(input())
arr.sort(reverse=True)

for i in range(n):
    print(arr[i], end=' ')