# 문제: https://school.programmers.co.kr/learn/courses/30/lessons/150369?language=python3

def solution(cap, n, deliveries, pickups):
    total_distance = 0
    
    deliver_stack = 0  # 현재 배달해야 할 상자의 누적 개수
    pickup_stack = 0   # 현재 수거해야 할 상자의 누적 개수
    
    # 가장 먼 집부터 처리 (인덱스는 0부터 시작하므로 n-1부터)
    for i in range(n-1, -1, -1):
        # 현재 집의 배달/수거 상자 개수 누적
        deliver_stack += deliveries[i]
        pickup_stack += pickups[i]
        
        # 트럭 용량을 초과하는 경우, 왕복 횟수 계산
        while deliver_stack > 0 or pickup_stack > 0:
            # 한 번의 왕복으로 최대 cap개의 상자를 처리할 수 있음
            deliver_stack -= cap
            pickup_stack -= cap
            
            # 물류창고에서 현재 위치(i+1)까지 왕복 거리 추가
            total_distance += (i + 1) * 2
    
    return total_distance