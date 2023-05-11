import sys
from heapq import heapify, heappush, heappop
input = sys.stdin.readline

w, n = map(int, input().split())
h = []
price = 0
heapify(h)

for i in range(n):
    m, p = map(int, input().split())
    heappush(h, (-p, m)) # 가격별 내림차순으로 담기 위해 마이너스를 붙여줌

for i in range(n):
    p, m = heappop(h)
    if w > m:
        price += -p * m
        w -= m
    elif 0 < w <= m:
        price += -p * w
        w = 0
    elif w == 0:
        break

print(price)


# 그리디 알고리즘 이용
# idea: 비싼 것부터 담으면 어떨까?