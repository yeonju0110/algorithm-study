# 떡볶이 떡 만들기
import sys

n, m = map(int, input().split())

arr = list(map(int, input().split()))

start = 0
end = max(arr)

# 이진 탐색 수행
result = 0
while(start <= end):
    total = 0
    mid = (start + end) // 2
    for x in arr:
        # 잘랐을 때의 떡의 양 계산
        if x > mid:
            total += x - mid
    # 떡의 양이 부족한 경우 더 많이 자르기
    if total < m:
        end = mid - 1
    # 떡의 양이 충분한 경우 덜 자르기
    else:
        result = mid # 최대한 덜 잘랐을 때가 정답이므로, 여기에서 result에 기록
        start = mid + 1

# 정답 출력
print(result)