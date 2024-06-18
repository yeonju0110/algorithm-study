import sys
input = sys.stdin.readline

W, N = list(map(int, input().split()))
golds = []

for _ in range(N):
    golds.append(list(map(int, input().split())))
golds.sort(lambda x:-x[1])

result = 0
for gold in golds:
    if W < 0:
        break
    M, P = gold
    
    if W >= M:
        result += M * P
        W -= M
    else:
        result += W * P
        W = 0

print(result)