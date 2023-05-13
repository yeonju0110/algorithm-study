import sys
input = sys.stdin.readline

n = int(input())
l = 2

for i in range(n): # 점의 개수 증가
    l += (l - 1)

print(l ** 2) # 점의 갯수 = (한 변의 점의 개수)^2

# 풀이방법: dp
# 각 변들의 길이가 늘어나는 규칙을 분석했다.
# 2 + 1 = 3
# 3 + 2 = 5
# 4 + 3 = 7
# ...
# n 번째 점의 개수 = (n-1 번째 점의 개수) + (n - 1번째 점의 개수 - 1)
