import sys
input = sys.stdin.readline

n = int(input())
graph = []
result = 0

nums = []
tmp = 0

for i in range(n):
    s = list(map(int, input().strip()))
    graph.append(s)

def dfs(x, y):
    global tmp
    if x < 0 or x >= n or y < 0 or y >= n:
        return False
    if graph[x][y] == 1:
        graph[x][y] = 2
        tmp += 1
        dfs(x - 1, y)
        dfs(x + 1, y)
        dfs(x, y - 1)
        dfs(x, y + 1)
        return True
    return False

for i in range(n):
    for j in range(n):
        tmp = 0
        if dfs(i, j) == True:
            nums.append(tmp)
            result += 1

print(result)
nums.sort()
for i in range(len(nums)):
    print(nums[i])

# 풀이방법: DFS 이용
# TODO: BFS로도 풀어보기