## DFS/BFS

- 그래프를 탐색하기 위한 대표적인 두 가지 알고리즘

### 🫧 문제풀이

- [타겟 넘버](../programmers/%ED%83%80%EA%B2%9F%20%EB%84%98%EB%B2%84.ipynb)
- [네트워크](../programmers/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC.ipynb)

### 🧷 그래프

1. 인접 행렬: 2차원 배열로 그래프의 연결 관계를 표현

```py
INF = 999999999
graph = [
  [0, 7, 5]
  [7, 0, INF]
  [5, INF, 0]
]
```

- 2차원 리스트 이용
- 메모리 낭비

2. 인접 리스트: 리스트로 그래프의 연결 관계를 표현

```py
graph = [[] for _ in range(3)]
graph[0].append((1, 7))
graph[0].append((2, 5))
graph[1].append((0, 7))
graph[2].append((0, 5))
```

- 메모리 효율적

---

<br />

## 📑 DFS

- 스택 or 재귀함수
  - 스택 자료구조에 기초 -> 재귀 함수를 이용했을 때 매우 간결하게 구현 가능
- 최적해라는 보장 없음
- 그래프 규모 클 때
- 특정 목표 노드를 찾을 때
- 깊이 우선 탐색

  - 그래프에서 깊은 부분을 우선적으로 탐색

- O(N)

- [예제](DFS/5-4.py)

### 🫧 문제풀이

- [음료수 얼려 먹기](DFS/5-1.py)
- [여행경로](../programmers/%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C.ipynb)
- [장애물 인식 프로그램](../softeer/%EC%9E%A5%EC%95%A0%EB%AC%BC_%EC%9D%B8%EC%8B%9D_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8.py)

---

<br />

## 📑 BFS

- 큐 자료구조 이용
- 항상 최적해임을 보장
- 그래프 규모가 작을 때
- 최단 경로를 찾을 때
- 너비 우선 탐색
- 가까운 노드부터 탐색
- O(N)
- 일반적인 경우 실제 수행 시간은 DFS보다 좋은 편

- [예제](BFS/5-3.py)

### 🫧 문제풀이

- [미로 탈출](BFS/5-2.py)
- [전력망을 둘로 나누기](../programmers/%EC%A0%84%EB%A0%A5%EB%A7%9D%EC%9D%84_%EB%91%98%EB%A1%9C_%EB%82%98%EB%88%84%EA%B8%B0.ipynb)
- [게임 맵 최단거리](../programmers/%EA%B2%8C%EC%9E%84_%EB%A7%B5_%EC%B5%9C%EB%8B%A8%EA%B1%B0%EB%A6%AC.ipynb)
- [단어 변환](../programmers/%EB%8B%A8%EC%96%B4_%EB%B3%80%ED%99%98.ipynb)
- [아이템 줍기](../programmers/%EC%95%84%EC%9D%B4%ED%85%9C%20%EC%A4%8D%EA%B8%B0.ipynb)
