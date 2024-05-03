# 문제: https://www.acmicpc.net/problem/11724

import sys


input = sys.stdin.readline


def read_int_list():
    return list(map(int, input().split()))


def main():
    N, M = read_int_list()
    graph = [[] for _ in range(N + 1)]
    visited = [False] * (N + 1)

    for _ in range(M):
        u, v = read_int_list()
        graph[u].append(v)
        graph[v].append(u)


    def dfs(current):
        for k in graph[current]:
            if not visited[k]:
                visited[k] = True
                dfs(k)

    total = 0
    for i in range(1, N + 1):
        if not visited[i]:
            total += 1
            visited[i] = True
            dfs(i)

    print(total)
    return

if __name__ == "__main__":
    main()
