# 삽입 정렬

arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

for i in range(1, len(arr)):
    for j in range(i, 0, -1): # 인덱스 i부터 1까지 감소하며 반복
        if arr[j] < arr[j-1]: # 한 칸씩 왼쪽으로 이동
            arr[j], arr[j-1] = arr[j-1], arr[j]
        else: # 정렬이 이루어진 원소는 항상 오름차순을 유지하고 있음 -> 삽입될 데이터보다 작은 데이터를 만나면 멈추면 됨
            break

print(arr)

# 시간복잡도: O(N^2)
