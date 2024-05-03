# 문제: https://www.acmicpc.net/problem/2512

import sys

input = sys.stdin.readline

def read_int():
    return int(input()) 


def read_int_array():
    return list(map(int, input().split()))


def main():
    N = read_int()
    cities = read_int_array()
    M = read_int()

    cities.sort()  # 국가 예산을 정렬하여 이분 탐색을 위한 준비


    def is_possible(mid): # 파라메트릭 서치 기준
        return sum(min(city, mid) for city in cities) <= M
            

    def binary_search(start, end):
        while start <= end:
            mid = (start + end) // 2  # 이분 탐색을 위한 중간값 계산

            if is_possible(mid):  # 예산을 초과하지 않는 경우
                start = mid + 1  # 더 큰 값을 찾기 위해 범위를 조정
            else:
                end = mid - 1  # 예산을 초과하는 경우 범위를 왼쪽으로 조정

        return end  # 최적의 예산을 반환

    result = binary_search(0, max(cities))  # 최적의 예산 계산
    print(result)

if __name__ == "__main__":
    main()
