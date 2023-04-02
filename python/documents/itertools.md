# itertools

- [공식문서](https://docs.python.org/ko/3.8/library/itertools.html)

- [itertools](#itertools)
  - [무한 이터레이터](#--------)
  - [📑 1. count](#---1-count)
  - [📑 2. cycle](#---2-cycle)
  - [📑 3. repeat](#---3-repeat)
  - [가장 짧은 입력 시퀀스에서 종료되는 이터레이터](#-------------------------)
  - [📑 1. groupby](#---1-groupby)
  - [📑 2. dropwhile](#---2-dropwhile)
  - [📑 3. tee(it, n)](#---3-tee-it--n-)
  - [📑 4. zip_longest](#---4-zip-longest)
  - [조합형 이터레이터 (순열과 조합)](#------------------)
  - [📑 1. product](#---1-product)
  - [📑 2. permutations](#---2-permutations)
  - [📑 3. combinations](#---3-combinations)
  - [📑 4. combinations_with_replacement](#---4-combinations-with-replacement)

<br />
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

## 가장 짧은 입력 시퀀스에서 종료되는 이터레이터

---

## 📑 1. groupby

- 클러스터링 해줌
- 정렬 후에 수행해야 중복을 피할 수 있음

```py
[k for k, g in itertools.groupby('AAAABBBCCDAABBB')]
# 출력: ['A', 'B', 'C', 'D', 'A', 'B']

[list(g) for k, g in itertools.groupby('AAAABBBCCDAABBB')]
# [['A', 'A', 'A', 'A'],
# ['B', 'B', 'B', 'B'],
#  ['C', 'C'],
#  ['D'],
#  ['A', 'A'],
#  ['B', 'B', 'B']]

# 정렬 후
str = 'AAAABBBCCDAABBB'
str = sorted(str)

[k for k, g in itertools.groupby(str)]
# 출력: ['A', 'B', 'C', 'D']
```

## 📑 2. dropwhile

- takewhile <-> dropwhile (순회하면서 멈춤✨)
- filter와 반대라고 생각하면 안됨 (filter는 조건에 맞는 값을 출력)
- false인 값부터 저장을 시작함

```py
list(itertools.dropwhile(lambda x:x <= 5, range(10)))
# 출력: [6, 7, 8, 9]
list(itertools.dropwhile(lambda x: x<5, [1,4,6,4,1]))
# 출력: [6, 4, 1]

```

## 📑 3. tee(it, n)

- 두 번 참조는 안됨!
- 원본의 제네레이터를 실행시켜도 나머지 복제본들의 다 참조가 끊어짐
- it: iterable
- n: 복사본 개수

```py
a, b = itertools.tee(range(10), 2)
list(a)
# 출력: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
list(b)
# 출력: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
list(a)
# 출력: [] ✨
```

## 📑 4. zip_longest

```py
list(itertools.zip_longest('ABCD', 'xy', fillvalue='-'))
# 출력: [('A', 'x'), ('B', 'y'), ('C', '-'), ('D', '-')]

# zip과의 차이
list(zip('ABCD', 'xy'))
# 출력: [('A', 'x'), ('B', 'y')]
```

## 조합형 이터레이터 (순열과 조합)

---

## 📑 1. product

- 모든 요소들을 하나씩 매핑해줌
- 같은 요소도 매핑해줌

```py
list(itertools.product('ABCD', repeat=2))
# 출력
# [('A', 'A'),
#  ('A', 'B'),
#  ('A', 'C'),
#  ('A', 'D'),
#  ('B', 'A'),
#  ('B', 'B'),
#  ('B', 'C'),
#  ('B', 'D'),
#  ('C', 'A'),
#  ('C', 'B'),
#  ('C', 'C'),
#  ('C', 'D'),
#  ('D', 'A'),
#  ('D', 'B'),
#  ('D', 'C'),
#  ('D', 'D')]
```

## 📑 2. permutations

- 중복을 허락함

```py
list(itertools.permutations('ABCD', 2))
# 출력
# [('A', 'B'),
#  ('A', 'C'),
#  ('A', 'D'),
#  ('B', 'A'),
#  ('B', 'C'),
#  ('B', 'D'),
#  ('C', 'A'),
#  ('C', 'B'),
#  ('C', 'D'),
#  ('D', 'A'),
#  ('D', 'B'),
#  ('D', 'C')]
```

## 📑 3. combinations

- 조합의 갯수
- 개별 요소의 반복을 허용하지 않음
- 클래스이므로 객체 초기화 이후에는 `리스트 자료형으로 변환`하여 사용
- ex. 리스트 ['A', 'B', 'C']에서 3개(r = 3)를 뽑아 나열하는 모든 경우를 출력
-

```py
list(itertools.combinations('ABCD', 2))
# 출력: [('A', 'B'), ('A', 'C'), ('A', 'D'), ('B', 'C'), ('B', 'D'), ('C', 'D')]
```

### 📑 4. combinations_with_replacement

- 개별 요소의 반복을 허용함

```py
list(itertools.combinations('ABCD', 2))
# 출력
# [('A', 'A'),
#  ('A', 'B'),
#  ('A', 'C'),
#  ('A', 'D'),
#  ('B', 'B'),
#  ('B', 'C'),
#  ('B', 'D'),
#  ('C', 'C'),
#  ('C', 'D'),
#  ('D', 'D')]
```

\*\* 순열과 조합은 collections의 count와 많이 사용됨
