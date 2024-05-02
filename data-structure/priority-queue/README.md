# 우선순위 큐

- 삽입/삭제: O(logN)
- 루트 노드에 가장 큰 값이 위치 = max-heap
- 루트 노드에 가장 작은 값이 위치 = min-heap → 파이썬에서는 min-heap 제공

## heapq

- 힙(Heap) 기능을 제공하는 라이브러리. 우선순위 큐 기능을 구현하기 위해 사용.
- 다익스트라 최단 경로 알고리즘을 포함해 다양한 알고리즘에서 우선순위 큐 기능을 구현하고자 할 때 사용
- PriorityQueue 라이브러리를 사용할 수 있지만, 코테에선 heapq이 보통 더 빠르게 동작
- 파이썬의 힙은 최소 힙으로 구성되어 있음
  - 단순히 원소를 힙에 전부 넣었다가 빼는 것만으로도 `O(NlogN)`에 오름차순 정렬이 완료됨
  - 보통 최소 힙 자료구조의 최상단 원소는 항상 '가장 작은' 원소이기ㅣ 때문이다.
- 힙에 원소를 삽입할 때: heapq.heappush()
- 힙에서 원소를 꺼낼 때: heapq.heappop()
- ex. 힙 정렬을 heapq로 구현하는 예제

  ```py
  import heapq

    def heapsort(iterable):
    h = []
    result = []
    for value in iterable:
    heapq.heappush(h, value)
    for i in range(len(h)):
    result.append(heapq.heappop(h))
    return result

    result = heapsort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0])
    print(result) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  ```

- ex. 힙에서 최댓값을 제거하는 경우

  ```py
  heap.remove(max(heap))
  heapify(heap)
  ```

<br />

### 최대힙

- 파이썬에서는 최대 힙을 제공하지 않음
- 원소의 부호를 임시로 변경하는 방식을 사용
- 힙에 원소를 삽입하기 전에 잠시 부호를 반대로 바꾸었다가, 힙에서 원소를 꺼낸 뒤에 다시 원소의 부호를 바꾸면 됨

#### 🫧 예제코드: 최대 힙을 구현하여 내립차순 힙 정렬을 구현한 예제

```py
import heapq

def heapsort(iterable):
    h = []
    result = []
    for value in iterable:
        heapq.heappush(h, -value)
    for i in range(len(h)):
        result.append(-heapq.heappop(h))
    return result

result = heapsort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0])
print(result) # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```
