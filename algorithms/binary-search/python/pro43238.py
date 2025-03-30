# 문제: https://school.programmers.co.kr/learn/courses/30/lessons/43238?language=python3

def solution(n, times):
    # 이분 탐색의 범위 설정
    left = 1
    right = max(times) * n  # 최악의 경우: 가장 느린 심사관이 모든 사람 처리
    
    while left <= right:
        mid = (left + right) // 2
        
        # mid 시간 동안 처리할 수 있는 사람 수 계산
        people = 0
        for time in times:
            people += mid // time
        
        # 처리 가능한 사람 수에 따라 범위 조정
        if people >= n:  # n명 이상 처리 가능하면 시간을 줄여봄
            answer = mid
            right = mid - 1
        else:  # n명 처리 불가능하면 시간을 늘림
            left = mid + 1
    
    return answer