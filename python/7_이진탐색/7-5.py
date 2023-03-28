# 부품 찾기

# 1. 재귀함수
def binary_search(arr, target, start, end):
    if start > end:
        return False
    mid = (start + end) // 2
    if arr[mid] == target:
        return True
    elif arr[mid] > target:
        return binary_search(arr, target, start, mid -1)
    else:
        return binary_search(arr, target, n+1, end)


# 2. 반복문
def binary_search(arr, taget, start, end):
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == taget:
            return mid
        elif arr[mid] > taget:
            end = mid - 1
        else:
            start = mid + 1
    return None

n = int(input())
arr = list(map(int, input().split()))
arr.sort() # 이진 탐색 전 정렬 필수!

m = int(input())
customer = list(map(int, input().split()))

for item in customer:
    result = binary_search(arr, item, 0, n - 1)
    if result == None:
        print('no', end=' ')
    else:
        print('yes', end=' ')
