# DFS/BFS

- 그래프를 탐색하기 위한 대표적인 두 가지 알고리즘

## [그래프](/data-structure/tree-and-graph/README.md)

- 인접행렬: O(V^2)
- 인접리스트: O(V + E) = O(max(V, E)) => 간선 개수가 적을수록 유리

## 📑 DFS (깊이 우선 탐색)

- 스택 or 재귀함수
  - 스택 자료구조에 기초 -> 재귀 함수를 이용했을 때 매우 간결하게 구현 가능
- 최적해라는 보장 없음
- 그래프 규모 클 때
- 특정 목표 노드를 찾을 때
- 그래프에서 깊은 부분을 우선적으로 탐색
- O(N)

<img width="795" alt="image" src="https://github.com/yeonju0110/algorithm-study/assets/97719273/f9c12363-f580-46cf-a5b2-3e30a8450e62">

- [예제](/python/이코테/dfs/5-4.py)

### 🫧 문제풀이

- [음료수 얼려 먹기](/python/이코테/dfs/5-1.py)

---

<br />

## 📑 BFS (너비 우선 탐색)

- 큐 자료구조 이용
- 항상 최적해임을 보장
- 그래프 규모가 작을 때
- 최단 경로를 찾을 때
- 가까운 노드부터 탐색
- O(N)
- 일반적인 경우 실제 수행 시간은 DFS보다 좋은 편

<img width="795" alt="image" src="https://github.com/yeonju0110/algorithm-study/assets/97719273/cac0c8c9-b0ae-4f7c-9bae-0e77cbc7dbbe">

- [예제](/python/이코테/bfs/5-3.py)

### 🫧 문제풀이

- [미로 탈출](/python/이코테/bfs/5-2.py)

---

## DFS vs BFS ? 🤔

1. 그래프의 모든 정점을 방문하는 것이 주요한 문제 ➡️ DFS, BFS 중 편한 것 사용
2. 경로의 특징을 저장해둬야 하는 문제 ➡️ DFS
   - ex. 각 정점에 숫자가 적혀있음 / 경로에 같은 숫자가 있으면 안된다는 등
3. 최단거리 ➡️ BFS
   - **이유**
   - 깊이 우선 탐색으로 경로를 탐색할 경우 처음으로 발견되는 해답이 최단거리가 아닐 수 있음
   - 너비 우선 탐색으로 현재 노드에서 가까운 곳부터 찾기 때문에 먼저 찾아지는 해답이 최단거리임
4. 검색 대상 그래프가 정말 큼 ➡️ DFS 고려
5. 검색 대상 규모가 크지 않고, 검색 시작 지점으로부터 원하는 대상이 멀지 않다면 ➡️ BFS 고려

### EX)

<img width="601" alt="image" src="https://github.com/yeonju0110/algorithm-study/assets/97719273/93955202-0c75-43c1-a556-9f25b547fec8">

- DFS: 1 - 2 - 3 - 6 - 7 - 4 - 5
- BFS: 1 - 2 - 3 - 4 - 5 - 6 - 7

<br />

### 📍 깊이 우선 탐색(DFS)

- 모든 노드를 방문하고자 할 때 더 선호되는 편
- 그래프 탐색의 경우 어떤 노드를 방문했었는지 여부를 반드시 검사해야 함
- 장점
  - 간단한 재귀를 이용해 구현할 수 있으므로 좀 더 단순
  - 다른 인접 노드를 방문하기 전에 특정한 인접 노드를 깊이 있게 탐색해 볼 수 있음

```jsx
function search(Node root) {
	if (root === null) {
		return;
	}
	visit[root];
	root.visited = true;
	for each (Node n in root.adjacent) {
		if (n.visited === false) {
			search(n);
		}
	}
}
```

### 📍 너비 우선 탐색(BFS)

- 두 노드 사이의 최단 경로 혹은 임의의 경로를 찾고 싶을 때
- 큐(queue) 사용
  - 큐를 이용해서 반복적 형태로 구현하는 것이 가장 잘 동작함

```jsx
function search(Node root) {
	Queue queue = new Queue();
	root.marked = true;
	queue.enqueue(root); // 큐의 끝에 추가함

	while (!queue.isEmpty()) {
		Node r = queue.dequeue(); // 큐의 앞에서 뽑아냄
		visit(r);
		for each (Node n in r.adjacent) {
			if (n.marked === false) {
				n.marked = true;
				queue.enqueue(n);
			}
		}
	}
}
```

### 📍 양방향 탐색

- 출발지와 도착지 사이에 최단 경로를 찾을 때 사용됨
- 기본적으로 출발지와 도착지 두 노드에서 동시에 너비 우선 탐색을 수행한 뒤, 두 탐색 지점이 충돌하는 경우에 경로를 찾는 방식

### 길찾기 문제

- 방문체크 필요
- 각 칸이 노드
- 상하좌우 4방향의 간선

```python
dy = [0, 1, 0, -1]
dx = [1, 0, -1, 0]
chk = [[False] * 100 for _ in range(100)]
N = int(input())

def is_valid_coord(y, x):
	return 0 <= y < N and 0 <= x < N

def bfs(start_y, start_x):
	q = deque()
	q.append((start_y, start_x))
	while len(q) > 0:
		y, x = q.popleft()
		chk[y][x] = True
		for k in range(4):
			ny = y + dy[k]
			nx = x + dx[k]
			if is_valid_coord(ny, nx) and not chk[ny][nx]:
				q.append((ny, nx))

def dfs(y, x):
	chk[y][x] = True
	for k in range(4):
		ny = y + dy[k]
		nx = x + dx[k]
		if is_valid_coord(ny, nx) and not chk[ny][nx]:
			dfs(ny, nx)
```
