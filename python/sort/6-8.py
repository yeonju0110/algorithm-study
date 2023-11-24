# 두 배열의 원소 교체

n, k = map(int, input().split())

a = list(map(int, input().split()))
b = list(map(int, input().split()))

a.sort()
b.sort(reverse=True)

cnt = 0

for i in range(k):
    if a[i] < b[i]:
        a[i], b[i] = b[i], a[i]
    else: # a보다 b가 크거나 같을 때, 탈출
        break

print(sum(a))