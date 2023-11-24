# 📑 이진 탐색 (이분 탐색)

## 순차 탐색

- 리스트 안에 있는 특정한 데이터를 찾기 위해, 앞에서부터 데이터를 하나씩 차례대로 확인
- 보통 정렬되지 않은 리스트에서 데이터를 찾아야 할 때 사용
- 최악의 경우: O(N)
- [코드](/python/binary-search/7-1.py)

## 이진 탐색

### 📍 개념

- 검색 범위를 반으로 좁혀가며 정렬된 목록에서 특정 요소를 빠르게 찾는 알고리즘
- 데이터를 반으로 쪼개면서 탐색하는 방식 (소수점 이하 버리기: 4.5->4)

### 📍 동작 방식 및 구현 방법

- ‘이분 탐색의 범위는 무엇으로 할지’ 와 ‘이분 탐색의 기준을 무엇으로 할지’
- 위치 변수 3개를 사용함: 시작점, 끝점, 중간점
  - right = mid - 1
  - left = mid + 1
- 찾으려는 데이터와 중간점 위치에 있는 데이터를 반복적으로 비교하여 탐색 범위를 줄여나감.

1. [재귀 함수](/python/binary-search/7-2.py)
2. [반복문](/python/binary-search/7-3.py)

### 📍 전제조건

- 전제조건: 데이터 정렬
  - 데이터가 무작위일 때는 사용 불가

### 📍 시간 복잡도: O(logN)

- 한 번 확인할 때마다 확인하는 원소의 개수가 절반씩 줄어듬
- 탐색 범위가 2,000만을 넘어가면 이진 탐색으로 문제에 접근해보기
  - 다량의 데이터 검색은 이진 탐색 알고리즘을 이용해 효과적으로 처리할 수 있음

### 📍 파라메트릭 서치 유형

- 최적화 문제를 결정 문제(예,아니오)로 바꾸어 해결하는 기법
- 재귀적보단 반복문을 이용해 구현하면 더 간결하게 풀 수 있음
- ex.
  - 조건을 만족하는 가장 큰 값을 찾으라는 최적화 문제 -> 이진 탐색으로 결정 문제를 해결하면서 범위를 좁혀갈 수 있음
  - 이진 탐색을 이용하여 해결

1. 1000만 이상을 넘어가면 이진 탐색으로 접근해볼 생각을 먼저해야한다.

### 📍 트리 자료구조

- 그래프 자료구조의 일종

### 📍 이진 탐색 트리

- 트리 자료구조 중에서 가장 간단한 형태
- 이진 탐색이 동작할 수 있도록 고안된, 효율적인 탐색이 가능한 자료구조이다.
- 루트 노드부터 방문
- 특징
  1. 부모 노드보다 왼쪽 자식 노드가 작다.
  2. 부모 노드보다 오른쪽 자식 노드가 크다.
     즉, 왼쪽 자식 노드 < 부모 자식 노드 < 오른쪽 자식 노드

#### 🫧 문제

- [부품 찾기 - 재귀, 반복문](/python/binary-search/7-5.py)
- [부품 찾기 - 계수정렬, 집합](/python/binary-search/7-6.py)
- [떡볶이 떡 만들기](/python/binary-search/7-7.py)