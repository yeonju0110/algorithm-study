## 큐

- 삽입/삭제: O(1)
- 선입선출 (FIFO, LILO)

```py
from collections import deque

queue = deque()

queue.append(5)
queue.popleft()

print(queue) # 먼저 들어온 순서대로
queue.reverse()
print(queue) # 나중에 들어온 순서대로
```
