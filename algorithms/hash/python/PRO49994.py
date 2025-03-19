# 문제: https://school.programmers.co.kr/learn/courses/30/lessons/49994

def solution(dirs):
    # 방문한 경로를 저장할 집합
    visited = set()
    
    # 현재 위치
    x, y = 0, 0
    
    # 방향에 따른 이동
    direction = {
        'U': (0, 1),
        'D': (0, -1),
        'R': (1, 0),
        'L': (-1, 0)
    }
    
    # 처음 걸어본 길의 길이
    answer = 0
    
    for d in dirs:
        # 다음 위치 계산
        dx, dy = direction[d]
        nx, ny = x + dx, y + dy
        
        # 경계 검사
        if -5 <= nx <= 5 and -5 <= ny <= 5:
            # 경로 생성 (양방향)
            path = (x, y, nx, ny)
            reverse_path = (nx, ny, x, y)
            
            # 처음 가는 길이면 카운트
            if path not in visited and reverse_path not in visited:
                answer += 1
                visited.add(path)
                visited.add(reverse_path)
            
            # 위치 업데이트
            x, y = nx, ny
    
    return answer

solution("ULURRDLLU") # 7
solution("LULLLLLLU") # 7