# 문제: https://school.programmers.co.kr/learn/courses/30/lessons/76503

import sys
sys.setrecursionlimit(10**6)  # 재귀 깊이 제한 증가

def solution(a, edges):
    if sum(a) != 0:
        return -1
    
    # 인접 리스트로 트리 구성
    tree = [[] for _ in range(len(a))]
    for u, v in edges:
        tree[u].append(v)
        tree[v].append(u)
    
    visited = [False] * len(a)
    operations = 0
    
    def dfs(node, parent):
        nonlocal operations
        visited[node] = True
        
        for child in tree[node]:
            if child != parent:
                if not visited[child]:
                    dfs(child, node)
                
                # 자식 노드의 가중치를 부모로 이동
                operations += abs(a[child])
                a[node] += a[child]
                a[child] = 0
        
        return operations
    
    # 0번 노드를 부모 노드라고 가정
    answer = dfs(0, -1)
    
    return answer

# 트리에서 DFS 순회를 할 때:
#     0
#    / \
#   1   2
#  / \
# 3   4

# 1. dfs(0, -1) 호출: 노드 0에서 시작, 부모 없음
# 2. 노드 0의 자식(1, 2)을 순회
# 3. 노드 1을 방문할 때 dfs(1, 0) 호출: 노드 1의 부모는 0
# 4. 노드 1에서 자식 순회할 때, 자식이 부모(0)가 아닌지 확인
# 이런 식으로 트리 전체를 순회