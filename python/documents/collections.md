# collections

- [공식문서](https://docs.python.org/ko/3.10/library/collections.html)
- 파이썬의 범용 내장 컨테이너 dict, list, set 및 tuple에 대한 대안을 제공하는 특수 컨테이너 데이터형을 구현함
- 유용한 자료구조를 제공: deque, Counter
- nametuple: 이름 붙은 필드를 갖는 튜플 서브 클래스를 만들기 위한 팩토리 함수
- deque: 양쪽 끝에서 빠르게 추가와 삭제를 할 수 있는 리스트류 컨테이너
- ChainMap: 여러 매핑의 단일 뷰를 만드는 딕셔너리류 클래스
  - 여러 개의 리스트, 딕셔너리, 튜플들을 묶을 수 있음
- Counter: 해시 가능한 객체를 세는 데 사용하는 딕셔너리 서브 클래스
  - 어떠한 객체를 분해해서 그 구성요소의 갯수를 셈
- OrderedDict: 항목이 추가된 순서를 기억하는 딕셔너리 서브 클래스
  - 순서가 있는 딕셔너리.
- defaultdict: 누락된 값을 제공하기 위해 팩토리 함수를 호출하는 딕셔너리 서브 클래스
  - key값이 없을 때 default값을 정해서 새로 생성해줌
- UserDict: 더 쉬운 딕셔너리 서브 클래싱을 위해 딕셔너리 객체를 감싸는 래퍼
- UserList: 더 쉬운 리스트 서브 클래싱을 위해 리스트 객체를 감싸는 래퍼
- UserString: 더 쉬운 문자열 서브 클래싱을 위해 문자열 객체를 감싸는 래퍼

## 📑 deque

- deque는 가장 앞, 뒤쪽에 원소를 추가, 제거할 때 모두 시간 복잡도가 `O(1)`이다.
  - 리스트는 `O(N)`, `O(1)`이다.
- maxlen도 지정해줄 수 있음

  ```python
      from collections import deque

      l = [''] * 3
      cache = deque(l, maxlen=3)
      cache.append('hello')
      print(cache) # ['', '', 'hello']

  from collections import deque

  data = deque([2, 3, 4])
  data.appendleft(1)
  data.append(5)

  print(data) # deque([1, 2, 3, 4, 5])
  print(list(data)) # 리스트 자료형으로 변환 [1, 2, 3, 4, 5]
  ```

  - rotate(): 순회 가능

  ```python
  deq = deque('abcde')
  deq # deque(['a', 'b', 'c', 'd', 'e'])
  deq.rotate(1)
  deq # deque(['e', 'a', 'b', 'c', 'd'])
  ```

<br />

### 메서드

---

- `remove(city)` : 어디에 있는 지워줌
- `popleft()` 첫 번째 원소 제거
- `pop()` 마지막 원소 제거
- `appendleft(x)` 첫 번째 인덱스에 원소 x 삽입
- `append(x)` 마지막 인덱스에 원소 삽입

<br />

## 📑 Counter

- 원소별 등장 횟수를 세는 기능이 필요할 때 사용
- 객체의 요소 개수를 key와 value값으로

```python
from collections import Counter

counter = Counter(['red', 'blue', 'red', 'green', 'blue', 'blue'])

print(counter['blue']) # 3
print(counter['green']) # 1
print(dict(counter)) # 사전 자료형으로 변환 {'red': 2, 'blue': 3, 'green': 1}
```

<br />

### values

---

- counter.values() → value값만 반환해 줌
  <br />

## 📑 namedtuple

- 튜플처럼 immutable
- 이름을 통해 데이터로 접근 가능
- 메모리 활용 최적화(성능상에 이점이 있음)
  - 활용하려는 자료형에 비해 어느정도 성능상에 이점이 있다는 것은 시간 측정 필요.

```py
l = [10, 20, 30]
t = (l, 10, 20)
l[2] = 100
t # ([10, 20, 100], 10, 20)
```

```py
# Basic example
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(11, y=22)
p[0] + p[1] # 33
p # Point(x=11, y=22)
p.x, p.y # (11, 22)
p[x] # NO!!
i, j = p
i, j # (10, 22)
```
