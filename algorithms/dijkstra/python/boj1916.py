# 문제: https://www.acmicpc.net/problem/1916

import sys
import heapq as hq

INF = float('inf')
input = sys.stdin.readline


def read_int_list():
    return list(map(int, input().split()))


def read_int():
    return int(input())


def main():
    N = read_int()
    M = read_int()
    graph = [[] for _ in range(N + 1)]
    distance = [INF] * (N + 1)

    for _ in range(M):
        start, end, cost = read_int_list()
        graph[start].append((end, cost))
    
    start_city, end_city = read_int_list()

    q = []
    hq.heappush(q, (0, start_city))
    distance[start_city] = 0
    while q:
        dist, now = hq.heappop(q)
        if distance[now] < dist:
            continue
        for i in graph[now]:
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                hq.heappush(q, (cost, i[0]))
        
    print(distance[end_city])

    return

if __name__ == "__main__":
    main()
