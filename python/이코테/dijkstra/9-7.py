# 전보
# 한 도시에서 다른 도시까지의 최단 거리 문제
# N(30,000)과 M(200,000)의 범위가 충분히 큼 -> 우선순위 큐를 활용한 다익스트라 알고리즘 구현

# import heapq
# import sys
# input = sys.stdin.readline
# INF = int(1e9)

# def dijkstra(start):
#     q = []
#     # 시작 노드로 가기 위한 최단 경로는 0으로 설정하여, 큐에 삽입
#     heapq.heappush(q, (0, start))
#     distance[start] = 0
#     while q: # 큐가 비어있지 않다면
#         # 가장 최단 거리가 짧은 노드에 대한 정보를 꺼내기
#         dist, now = heapq.heappop(q)
#         if distance[now] < dist:
#             continue
#         # 현재 노드와 연결된 다른 인접한 노드들을 확인
#         for i in graph[now]:
#             cost = dist + i[1]
#             # 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
#             if cost < distance[i[0]]:
#                 distance[i[0]] = cost
#                 heapq.heappush(q, (cost, i[0]))


# n, m, start = map(int, input().split())

# graph = [[] for _ in range(n + 1)]

# distance = [INF] * (n + 1)

# # 모든 간선 정보를 입력받기
# for _ in range(m):
#     x, y, z = map(int, input().split())
#     # x번 노드에서 y번 노드로 가는 비용이 z라는 의미
#     graph[x].append((y, z))


# # 다익스트라 알고리즘을 수행
# dijkstra(start)

# # 도달할 수 있는 노드의 개수
# count = 0
# # 도달할 수 있는 노드 중에서, 가장 멀리 있는 노드와의 최단 거리
# max_distance = 0
# for d in distance:
#     # 도달할 수 없는 노드인 경우
#     if d != INF:
#         count += 1
#         max_distance = max(max_distance, d)

# # 시작 노드는 제외해야 하므로 count - 1을 출력
# print(count - 1, max_distance)

import heapq
import sys
INF = int(1e9)
input = sys.stdin.readline

n, m, start = map(int, input().split())

graph = [[INF] * (n + 1) for _ in range(n + 1)]
distance = [INF] *  (n + 1) 


for i in range(m):
    x, y, z = map(int, input().split())
    graph[x].append((y, z))

def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0
    while q:
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue
        for i in graph[now]:
            cost = dist + i[1]
            if cost < distance(i[0]):
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

dijkstra(start)

count = 0
max_distance = 0
for d in distance:
    if d != INF:
        count += 1
        max_distance = max(max_distance, d)

print(count - 1, max_distance)