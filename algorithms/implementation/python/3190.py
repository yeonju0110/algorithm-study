# 문제: https://www.acmicpc.net/problem/3190

from collections import deque
import sys

input = sys.stdin.readline

def read_int_list():
    return list(map(int, input().split()))

def read_string():
    return input().rstrip()

def read_int():
    return int(input())

def main():
    # 보드 정보 및 뱀 현위치 정보 저장
    N = read_int()
    maps = [[False] * N for _ in range(N)]
    snake = deque([[0, 0]])
    maps[0][0] = True

    # 오 위 왼 아
    dx = [1, 0, -1, 0]
    dy = [0, -1, 0, 1]
    direction = 0
    
    # 사과 지도
    apples = [[False] * N for _ in range(N)]
    K = read_int()
    for _ in range(K):
        yy, xx = read_int_list()
        apples[yy - 1][xx - 1] = True

    # 방향 변환 정보 받기
    L = read_int()
    moves = {}
    for _ in range(L):
        X, C = read_string().split(' ')
        X = int(X)
        moves[X] = C

    for sec in range(1, 10001):
        head_y, head_x = snake[-1]
        ny, nx = head_y + dy[direction], head_x + dx[direction]

        if nx < 0 or nx >= N or ny < 0 or ny >= N: # 벽이라면? 죽음
            print(sec)
            return
        elif maps[ny][nx]:  # 본인 몸이 있다면? 죽음
            print(sec)
            return
        elif apples[ny][nx]: # 사과가 있다면? 몸 늘리기
            apples[ny][nx] = False
            maps[ny][nx] = True
            snake.append([ny, nx])
        else:  # 사과가 없다면? 이동
            tail_y, tail_x = snake.popleft()
            maps[tail_y][tail_x] = False
            snake.append([ny, nx])
            maps[ny][nx] = True
        
        if sec in moves:
            if moves[sec] == 'L': # 왼쪽으로 90도 회전
                direction = (direction + 1) % 4
            else: # 오른쪽으로 90도 회전
                direction = direction - 1 if direction != 0 else 3
    return

if __name__ == "__main__":
    main()
