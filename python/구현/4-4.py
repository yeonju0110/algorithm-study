# 게임 개발

n, m = map(int,input().split())

# 방문한 위치 저장을 위한 맵 생성
d = [[0] * m for _ in range(n)]

x, y, direction = map(int,input().split())
# 현재 좌표 방문 처리
d[x][y] = 1

# 전체 맵 정보 입력
arr = []
for i in range(n):
    arr.append(list(map(int, input().split())))

# 북, 동, 남, 서 정의
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

# 왼쪽으로 회전
def turn_left():
    global direction
    direction -= 1
    if direction == -1:
        direction = 3

# 시뮬레이션 시작
cnt = 1
turn_time = 0
while True:
    turn_left()
    nx = x + dx[direction]
    ny = y + dy[direction]
    # 회전 후, 정면에 가보지 않은 칸 and 육지일 경우 이동
    if d[nx][ny] == 0 and arr[nx][ny] == 0:
        d[nx][ny] = 1
        x = nx
        y = ny
        cnt += 1
        turn_time = 0
        continue
    # 회전 후, 가보지 않은 칸이 없음 or 바다
    else:
        turn_time += 1
    # 네 방향 모두 갈 수 없는 경우
    if turn_time == 4:
        nx = x - dx[direction]
        ny = y - dy[direction]
        # 뒤로 갈 수 있다면 이동
        if arr[nx][ny] == 0:
            x = nx
            y = ny
        # 뒤가 바다인 경우
        else:
            break
        turn_time = 0

print(cnt)