# 📑 다이나믹 프로그래밍 (동적 계획법)

## 📍 개념

- 한 번 계산한 문제는 다시 계산하지 않도록 하는 알고리즘
- 컴퓨터를 활용하여 해결하기 어려운 문제, 특히 최적의 해를 구하기에 시간과 메모리가 많이 필요한 문제에 적용됨
- 약간 더 많은 메모리 공간을 사용하여 연산 속도를 크게 향상시킬 수 있는 기법
- **다이나믹 프로그래밍을 사용하기 위한 조건:**
  1. 큰 문제를 작은 문제로 나눌 수 있어야 한다.
  2. 작은 문제에서 구한 정답은 그것을 포함하는 큰 문제에서도 동일하다.

## 📍 예시

### [피보나치 수열](/python/이코테/dp/8-2.py)

- 피보나치 수열의 점화식을 통해 다이나믹 프로그래밍의 개념을 이해할 수 있음
- 점화식: F(n) = F(n-1) + F(n-2), 초기값: F(0) = 0, F(1) = 1

- `메모이제이션 기법`

  - DP를 구현하는 방법 중 하나로, 한 번 계산한 결과를 메모리 공간에 저장하여 중복 계산을 피하는 기법 = 캐싱
  - 메모이제이션 구현 방법: 한 번 계산한 정보를 리스트에 저장

## 📍 다이나믹 프로그래밍과 분할 정복의 차이점

- 다이나믹 프로그래밍은 작은 문제들이 서로 영향을 미치는 경우에 사용됨
- 분할 정복은 피벗값이 바뀌면 이전에 피벗값을 다시 처리하지 않는 특징이 있음
- 재귀함수 대신 반복문을 사용하는 것이 효율적일 때도 있음

## 📍 시간 복잡도

- O(N)

## 📍 풀이 방법

### 1. 탑다운 방식 (하향식)

- 큰 문제를 해결하기 위해 작은 문제를 호출하는 방식
- 구현: 재귀
- 저장 방식: 메모이제이션
- 장점: 직관적이라 코드 가독성이 좋다
- 단점: 재귀함수 호출을 많이 해서 느릴 수 있다
- 예시 코드: [재귀](/python/이코테/dp/8-3.py)

### 2. 보텀업 방식 (상향식) -> DP의 전형적인 형태 ✨

- 작은 문제부터 차근차근 답을 도출하는 방식
- 구현: 반복문
- 저장 방식: 타뷸레이션
- 장점: 시간과 메모리를 좀 더 아낄 수도 있다
- 단점: DP테이블 채워 나가는 순서를 알아야 한다
- 예시 코드: [반복문](/python/이코테/dp/8-4.py)

  ```py
  # 피보나치 수열 by 반복
  # 앞서 계산된 결과를 저장하기 위한 DP 테이블 초기화
  d = [0] * 100

  # 첫 번째 피보나치 수와 두 번째 피보나치 수는 1
  d[1] = 1
  d[2] = 1
  n = 99

  # 피보나치 함수 반복문으로 구현 -> 보텀엄
  for i in range(3, n + 1):
      d[i] = d[i - 1] + d[i - 2]

  print(d[n])
  ```

  - DP 테이블: 결과 저장용 리스트

<br />

### 🫧 문제 풀이

- [1로 만들기](/python/이코테/dp/8-5.py)
- [개미 전사](/python/이코테/dp/8-6.py)
- [바닥 공사](/python/이코테/dp/8-7.py)
- [효율적인 화폐 구성](/python/이코테/dp/8-8.py)

### 삼각수

<img width="795" alt="image" src="https://github.com/yeonju0110/algorithm-study/assets/97719273/afd7676d-deef-486a-937b-ad16545ef85f">

- nCr
- bino(n, 0) = 1
- bino(n, n) = 1
- bino(n, r) = bino(n - 1, r - 1) + bino(n - 1, r)
