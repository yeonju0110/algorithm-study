# 이진 탐색 by 반복문

def binary_search(arr, target, start, end):
    while start <= end:
        mid = (start + end) // 2
        # 찾은 경우 중간점 인덱스 반환
        if arr[mid] == target:
            return mid
        # 중간점의 값보다 찾고자 하는 값이 작은 경우 -> 왼쪽 확인
        elif arr[mid] > target:
            end = mid - 1
        # 중간점의 값보다 찾고자 하는 값이 큰 경우 -> 오른쪽 확인
        else:
            start = mid + 1
    return None

n, target = list(map(int, input().split()))

arr = list(map(int, input().split()))

result = binary_search(arr, target, 0, n - 1)
if result == None:
    print("원소가 존재하지 않습니다.")
else:
    print(result + 1)





