# 부품 찾기

# 계수 정렬
n = int(input())
arr = [0] * 1000001

# 가게에 있는 전체 부품 번호를 입력받아서 기록
for i in input().split():
    arr[int(i)] = 1

# 손님이 확인 요청한 부품 개수를 입력받기
m = int(input())
items = list(map(int, input().split()))

# 손님이 확인 요청한 부품 번호를 하나씩 확인
for item in items:
    if arr[item] == 1:
        print('yes', end=' ')
    else:
        print('no', end=' ')


# 집합 자료형 이용
n = int(input())
arr = set(map(int, input().split()))

m =  int(input())
x = list(map(int, input().split()))

for i in x:
    if i in arr:
        print('yes', end=' ')
    else:
        print('no', end=' ')