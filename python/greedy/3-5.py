# 모험가 길드

n = int(input())
arr = list(map(int, input().split()))

arr.sort()

total = n
team = 0
for i in range(n):
    group = total - arr[i]
    if(group >= 0):
        total = group
        team += 1
    else:
        break
