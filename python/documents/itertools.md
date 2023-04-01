# itertools

- [공식문서](https://docs.python.org/ko/3.8/library/itertools.html)

## 📑 combinations

---

- 조합의 갯수
- 클래스이므로 객체 초기화 이후에는 `리스트 자료형으로 변환`하여 사용
- ex. 리스트 ['A', 'B', 'C']에서 3개(r = 3)를 뽑아 나열하는 모든 경우를 출력

  ```python
  from itertools import combinations

  data = ['A', 'B', 'C'] # 데이터 준비
  result = list(combinations(data, 2))

  print(result) # [('A', 'B'), ('A', 'C'), ('B', 'C')]
  ```

<br />

## 무한 이터레이터

---

## 📑 1. count

- count(10) => 10 11 12 13 14 ...
- count(2.5 0.5) => 2.5 3.0 3.5 ...

```py

import itertools

for c, s in zip(itertools.count(0, 0.5), 'abc'):
    print(f'{c}, {s}')
# 0, a / 0.5, b / 1.0, c

```

<br />

## 📑 2. cycle

- 순회함
- cycle('ABCD') --> A B C D A B C D ...

```py

import itertools

for c, s in zip(itertools.cycle(range(2)), 'abcdefgh'):
    print(f'{c}, {s}')
# 0, a / 1, b / 0, c / 1, d / 0, e / 1, f / 0, g / 1, h

```

## 📑 3. repeat

- 반복함
- list(map(pow, range(10), [2, 2, 2, 2, 2])) 을 아래와 같이 표현할 수 있음

```py
list(map(pow, range(10), itertools.repeat(2)))
# 출력: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# 문자열도 가능
list(itertools.repeat('abc', 3))
# 출력: ['abc', 'abc', 'abc']
```

## 📑 4. groupby

- [k for k, g in itertools.groupby('AAAABBBCCDAABBB')]
  - 출력: ['A', 'B', 'C', 'D', 'A', 'B']
