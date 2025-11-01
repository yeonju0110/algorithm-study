# 📝 문제 풀이 보고서 
> [Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/description/)

## ⏱️ 문제 풀이 시간
- 총 소요 시간: **60분**

---

## 📊 문제 난이도
- [ ] 🟢 쉬움
- [x] 🟡 보통
- [ ] 🔴 어려움

---

## ⚙️ 사용한 알고리즘
- DFS (Depth-First Search)
- 메모이제이션 (Top-Down DP)

---

## 💡 풀이 과정 (생각의 흐름)

### 1단계: 문제 분석 및 접근법 고민
- **첫 번째 생각**: DFS로 모든 경로를 탐색하면?
  - 각 단계마다 8방향 선택 가능
  - k번 이동 → 8^k 경우의 수
  - k=100일 때 8^100 → **시간초과 확실함..**
  
- **두 번째 생각**: 중복 계산이 많을 것 같은데?
  - 예: (0,0) → (1,2) → (3,3) / (0,0) → (2,1) → (3,3)
  - 두 경로 모두 (3,3)에서 남은 이동 횟수가 같다면?
  - 그 이후의 확률 계산은 동일함!
  
- **해결책**: 메모이제이션으로 중복 제거
  - 상태 정의: `(x, y, 남은 이동 횟수)`
  - 각 상태는 한 번만 계산
  - 시간복잡도: 8^k → n² × k로 줄일 수 있다!!!

### 2단계: 상태 정의 및 Base Case
- **DP 상태**: `dfs(x, y, cnt)` = (x,y)에서 시작해 cnt번 이동 후 보드에 남을 확률
- **Base Case**: `cnt == 0` → 더 이상 움직이지 않음 → 보드에 남아있으므로 `1.0`
- **점화식**: 
  ```
  dfs(x, y, cnt) = Σ (1/8) × dfs(nx, ny, cnt-1)
                   (nx, ny)가 보드 안일 때
  ```

### 3단계: 구현 시 주의사항
- **`@lru_cache(maxsize=None)`**: 무제한 캐싱 (maxsize 작으면 재계산 발생)
- **확률 계산**: 각 방향으로 갈 확률 1/8을 곱해줌
- **보드 체크**: 0 ≤ nx < n, 0 ≤ ny < n

---

## 💻 최종 코드

### 풀이 1: Top-Down DP (메모이제이션) - 107ms ⏱️

```python
from functools import lru_cache

class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        directions = [(-2, -1), (-1, -2), (-2, 1), (-1, 2), 
                      (1, -2), (2, -1), (1, 2), (2, 1)]
        
        @lru_cache(maxsize=None)  
        def dfs(x, y, cnt):
            # Base case: 이동 완료
            if cnt == 0:
                return 1.0
            
            prob = 0.0
            for dx, dy in directions:
                nx, ny = x + dx, y + dy
                
                # 보드 안에 있으면 재귀 호출
                if 0 <= nx < n and 0 <= ny < n:
                    prob += (1/8) * dfs(nx, ny, cnt - 1)
            
            return prob
        
        return dfs(row, column, k)
```

### 📈 복잡도 분석

#### 시간 복잡도: **O(n² × k)**
- 가능한 상태 수: n × n × k (위치 × 남은 이동 횟수)
- 각 상태당 8방향 탐색: O(8) = O(1)
- 메모이제이션으로 각 상태는 1번만 계산

#### 공간 복잡도: **O(n² × k)**
- `@lru_cache`가 저장하는 상태 수

#### 실제 수치 (최악의 경우)
- n=25, k=100
- 상태 수: 25 × 25 × 100 = 62,500
- 충분히 빠름! ✅

---

## 🔄 다른 풀이: Bottom-Up DP - 78ms ⚡

### 접근법의 차이점
- **Top-Down**: "미래에서 현재로" - 재귀로 역추적
- **Bottom-Up**: "현재에서 미래로" - 반복문으로 시뮬레이션

### 핵심 아이디어
1. 각 단계마다 보드의 모든 위치에 대한 확률 저장
2. k번 반복하며 확률을 다음 위치로 전파
3. 최종적으로 모든 위치의 확률 합산

### 코드 구현

```python
class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        directions = [(-2, -1), (-1, -2), (-2, 1), (-1, 2), 
                      (1, -2), (2, -1), (1, 2), (2, 1)]
        
        # prev[i][j] = 현재 단계에서 (i,j)에 있을 확률
        prev = [[0] * n for _ in range(n)]
        prev[row][column] = 1.0  # 시작 위치는 100%
        
        # k번 이동 시뮬레이션
        for _ in range(k):
            curr = [[0] * n for _ in range(n)]
            
            for i in range(n):
                for j in range(n):
                    if prev[i][j] > 0:  # 나이트가 있다면
                        for dx, dy in directions:
                            ni, nj = i + dx, j + dy
                            if 0 <= ni < n and 0 <= nj < n:
                                # 확률 전파: 현재 확률 × (1/8)
                                curr[ni][nj] += prev[i][j] / 8
            
            prev = curr
        
        # 모든 위치의 확률 합 = 보드에 남을 총 확률
        return sum(sum(row) for row in prev)
```

### 동작 과정 예시 (n=3, k=2, row=0, column=0)

#### 초기 상태
```
prev = [
  [1.0, 0, 0],
  [0,   0, 0],
  [0,   0, 0]
]
```

#### 한 번 이동 후 (k=1)
```
(0,0) → (1,2): 확률 1.0/8 = 0.125
(0,0) → (2,1): 확률 1.0/8 = 0.125

curr = [
  [0,     0,   0    ],
  [0,     0,   0.125],
  [0,   0.125, 0    ]
]
```

#### 두 번 이동 후 (k=2)
```
(1,2) → (0,0): 0.125/8 = 0.015625
(1,2) → (2,0): 0.125/8 = 0.015625
(2,1) → (0,0): 0.125/8 = 0.015625
(2,1) → (0,2): 0.125/8 = 0.015625

curr = [
  [0.03125, 0, 0.015625],
  [0,       0,        0 ],
  [0.015625, 0,      0 ]
]

총 확률 = 0.0625 ✓
```

### 📈 복잡도 분석

#### 시간 복잡도: **O(n² × k)**
- k번 반복
- 각 반복마다 n² 위치 탐색
- 각 위치에서 8방향 체크

#### 공간 복잡도: **O(n²)** ✨
- 2개의 n×n 배열만 사용 (prev, curr)
- **메모리 최적화!** (Top-Down은 O(n²k))

---

## 🔍 두 풀이 비교

| 구분 | Top-Down (재귀) | Bottom-Up (반복) |
|------|----------------|-----------------|
| **방향** | 미래 → 현재 | 현재 → 미래 |
| **구현** | 재귀 + 메모이제이션 | 반복문 + 2차원 배열 |
| **시간** | O(n²k) | O(n²k) |
| **공간** | O(n²k) | **O(n²)** ✨ |
| **실행 시간** | 107ms | **78ms** ⚡ |
| **장점** | 직관적, 구현 쉬움 | 메모리 효율적, 더 빠름 |
| **단점** | 재귀 오버헤드 | 코드가 약간 복잡 |
