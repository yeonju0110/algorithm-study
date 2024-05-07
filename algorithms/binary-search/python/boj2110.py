# 문제: https://www.acmicpc.net/problem/2110

import sys


input = sys.stdin.readline


def read_int_list():
    return list(map(int, input().split()))


def read_int():
    return int(input())


def main():
    N, C = read_int_list()

    homes = []
    for _ in range(N):
        homes.append(read_int())
    homes.sort()
    
    start = 1 # 공유기 거리 최소
    end = homes[-1] - homes[0] # 공유기 거리 최대
    result = 0

    while start <= end:
        mid = (start + end) // 2
        available_count = 1
        now = homes[0]

        # 공유기 설치 가능 수 확인
        for i in range(1, N):
            if homes[i] >= now + mid:
                available_count += 1
                now = homes[i]
        
        if available_count >= C: # 목표보다 크면 공유기 사이 거리 늘림
            start = mid + 1
            result = mid
        else: # 목표보다 크면 공유기 사이 거리 줄임
            end = mid - 1
    
    print(result)
    return

if __name__ == "__main__":
    main()
