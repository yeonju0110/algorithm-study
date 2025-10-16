# 🐍 파이썬 코테 문법 & 라이브러리 정리

## 📚 목차
1. [기본 자료구조 및 연산](#-1-기본-자료구조-및-연산)
2. [문자열 처리](#-2-문자열-처리)
3. [숫자 및 진수 변환](#-3-숫자-및-진수-변환)
4. [고급 자료구조](#-4-고급-자료구조)
5. [함수형 프로그래밍](#-5-함수형-프로그래밍)
6. [수학 및 알고리즘](#-6-수학-및-알고리즘)
7. [기타 유용한 기능들](#-7-기타-유용한-기능들)
8. [외부 라이브러리](#-8-외부-라이브러리)
9. [코테 활용 팁](#-9-코테-활용-팁)

---

## 📚 1. 기본 자료구조 및 연산

### 📑 1.1 리스트 (List)

#### 기본 메서드
```python
# 리스트 메서드 확인
dir([1, 2, 3, 4])
# ['append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

#### 주요 메서드들

**append vs extend**
```python
# append : 리스트 끝에 원소를 추가 (리스트 자체를 추가)
x = [1,2,3,4]
x.append([3,4])
print(x)  # [1, 2, 3, 4, [3, 4]]

# extend : 리스트 끝에 모든 원소 추가 (개별 원소들을 추가)
x = [1,2,3,4]
x.extend([3,4])
print(x)  # [1, 2, 3, 4, 3, 4]
```

**copy (얕은 복사)**
```python
# 원본에 영향을 주지 않기 위해서 사용
x = [1, 2, 3, 4]
y = x.copy()
y.extend([3,4])
print(x)  # [1, 2, 3, 4]
print(y)  # [1, 2, 3, 4, 3, 4]

# 얕은 복사 vs 깊은 복사
import copy

# 얕은 복사 (1차원만 복사)
arr1 = [1, 2, 3, 4]
arr2 = arr1.copy()  # 또는 arr1[:]

# 깊은 복사 (중첩된 구조까지 완전 복사)
arr1 = [[1, 2], [3, 4]]
arr2 = copy.deepcopy(arr1)
```

**기타 유용한 메서드들**
```python
x = [1, 6, 3, 6, 5, 6, 7]

# count: 특정 원소의 개수
x.count(6)  # 3

# index: 특정 원소의 위치
x.index(6)  # 1

# insert: 특정 위치에 원소 삽입
x.insert(2, 5)  # [1, 6, 5, 3, 6, 5, 6, 7]

# pop: 특정 위치의 원소 삭제 (기본값: 마지막)
x.pop(1)  # 6 반환, x = [1, 5, 3, 6, 5, 6, 7]

# remove: 특정 원소 삭제 (첫 번째만)
x.remove(6)  # x = [1, 5, 3, 5, 6, 7]

# clear: 모든 원소 삭제
x.clear()  # []

# 특정 요소 제거 방법들
del x[0]        # 인덱스로 제거
x.pop(0)        # 인덱스로 제거하고 반환
x.remove(값)     # 값으로 제거
x.clear()       # 모두 제거
```

#### 정렬
```python
x = [10, 5, 8]

# sort: 원본을 직접 정렬 (반환값: None)
y = x.sort()
print(x)  # [5, 8, 10]
print(y)  # None

# sorted: 원본 보존하고 정렬된 새 리스트 반환
x = [10, 5, 8]
y = sorted(x)
print(x)  # [10, 5, 8]
print(y)  # [5, 8, 10]

# 정렬 기준 설정
testCase = ['abc', 'def', 'hello world', 'hello', 'python']
sorted(testCase, key=len, reverse=True)  # 길이 기준 내림차순
# ['hello world', 'python', 'hello', 'abc', 'def']
```

#### 역순
```python
x = [10, 5, 8]

# reverse: 원본을 직접 뒤집기
y = x.reverse()
print(x)  # [8, 5, 10]
print(y)  # None

# reversed: 원본 보존하고 뒤집힌 iterator 반환
x = [10, 5, 8]
y = reversed(x)
print(list(x))  # [10, 5, 8]
print(list(y))  # [8, 5, 10]
```

#### 리스트 고급 활용
```python
# 리스트에 요소의 포함 여부 확인
fruits = ['apple', 'banana', 'cherry']

if 'apple' in fruits:
    print('포함')
else:
    print('미포함')

if 'apple' not in fruits:
    print('미포함')
else:
    print('포함')

# sum 함수로 합 구하기
numbers = [1, 2, 3, 4, 5]
total = sum(numbers)  # 15

# 각 원소에 연산 적용
r = [1, 1, 7, 4]
x1, y1, x2, y2 = map(lambda x: x * 2, r)  # [2, 2, 14, 8]
```

### 📑 1.2 딕셔너리 (Dictionary)

```python
d = {'one':'하나', 'two':'둘'}

# 주요 메서드들
d.keys()    # dict_keys(['one', 'two'])
d.values()  # dict_values(['하나', '둘'])
d.items()   # dict_items([('one', '하나'), ('two', '둘')])

# get: 키가 없어도 에러 없이 기본값 반환
d.get('three', '없음')  # '없음'

# 딕셔너리 컴프리헨션
square_dict = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

### 📑 1.3 집합 (Set)

```python
s = {'1', '2', '3', '4', '5', '6'}

# 주요 메서드들
s.add(7)        # 원소 추가
s.discard(7)    # 원소 제거 (없어도 에러 없음)
s.remove(7)     # 원소 제거 (없으면 KeyError 발생)
'1' in s        # True

# remove vs discard 차이점
s = {1, 2, 3, 4, 5}

# discard: 원소가 없어도 에러 없음
s.discard(10)   # 에러 없음, s = {1, 2, 3, 4, 5}

# remove: 원소가 없으면 KeyError 발생
# s.remove(10)  # KeyError: 10

# 안전한 제거 방법
if 10 in s:
    s.remove(10)

# 집합 연산
판콜에이 = {'A', 'B', 'C'}
타이레놀 = {'A', 'B', 'D'}

print(판콜에이.difference(타이레놀))      # 차집합: {'C'}
print(판콜에이.intersection(타이레놀))   # 교집합: {'B', 'A'}
print(판콜에이.union(타이레놀))          # 합집합: {'B', 'A', 'D', 'C'}

# 집합 컴프리헨션
unique_squares = {x**2 for x in range(-3, 4)}  # {0, 1, 4, 9}

# 교집합, 합집합 연산자
set1 = {1, 2, 3}
set2 = {2, 3, 4}
교집합 = set1 & set2  # {2, 3}
합집합 = set1 | set2  # {1, 2, 3, 4}
```

### 📑 1.4 튜플 (Tuple)

```python
# 튜플은 불변(immutable) 자료형
t = (1, 2, 3)
# t[0] = 10  # 에러! 튜플은 수정 불가

# 튜플 언패킹
a, b, c = (1, 2, 3)
print(a, b, c)  # 1 2 3

# 여러 변수에 동시 할당
x, y = 10, 20
```

---

## 📚 2. 문자열 처리

### 📑 2.1 기본 문자열 메서드

#### replace
```python
# 문자열 치환
b = "hello world"
b = b.replace("world", "python")  # "hello python"

# 메서드 체이닝 가능
str(i).replace('1', '#').replace('0', ' ')
```

#### split & join
```python
# split: 문자열을 리스트로 분할
'1 2 3 4 5 6 7'.split()  # ['1', '2', '3', '4', '5', '6', '7']

# join: 리스트를 문자열로 결합
''.join(['A', 'B', 'C', 'D', 'E'])  # 'ABCDE'

# 문자열을 리스트로 변환
chars = list('ABCDE')  # ['A', 'B', 'C', 'D', 'E']
```

#### 대소문자 변환
```python
text = "Hello World"
text.lower()  # 'hello world'
text.upper()  # 'HELLO WORLD'
```

#### 문자열 검사
```python
text = 'Hello'

# startswith: 특정 문자열로 시작하는지 확인
text.startswith('He')  # True

# endswith: 특정 문자열로 끝나는지 확인
text.endswith('lo')    # True
```

### 📑 2.2 문자열 포맷팅

#### format 함수
```python
# 천 단위 구분자
format(10000000000, ',')  # '10,000,000,000'

# 지수 표기법
format(10000000000, 'e')  # '1.000000e+10'

# 16진수
format(10000000000, 'x')  # '2540be400'

# 정렬 및 패딩
format(100000, '0>020,.4f')  # 오른쪽 정렬: '00000000100,000.0000'
format(100000, '0<020,.4f')  # 왼쪽 정렬: '100,000.000000000000'
format(100000, '0=020,.4f')  # 가운데 정렬: '000,000,100,000.0000'
```

#### 문자열 패딩
```python
# zfill: 앞에 0으로 채우기
"3".zfill(3)  # '003'

# rjust: 오른쪽 정렬하며 채우기
"123".rjust(5, "a")  # 'aa123'

# f-string으로 0 패딩 처리
mm, ss = 5, 3
f"{mm:02d}:{ss:02d}"  # '05:03'

# 다양한 패딩 예시
number = 7
f"{number:03d}"    # '007' (3자리, 0으로 패딩)
f"{number:05d}"    # '00007' (5자리, 0으로 패딩)
f"{number:>5d}"    # '    7' (5자리, 공백으로 오른쪽 정렬)
f"{number:<5d}"    # '7    ' (5자리, 공백으로 왼쪽 정렬)
f"{number:^5d}"    # '  7  ' (5자리, 공백으로 가운데 정렬)

# 시간 포맷팅 예시
hours, minutes, seconds = 1, 5, 30
time_str = f"{hours:02d}:{minutes:02d}:{seconds:02d}"  # '01:05:30'

# 소수점 자릿수와 함께 패딩
price = 123.45
f"{price:08.2f}"   # '00123.45' (8자리, 소수점 2자리, 0 패딩)
```

### 📑 2.3 문자열 카운팅

```python
# 문자열에서 특정 문자 개수 세기
str(i).count('8')  # 문자열 i에서 '8'의 개수

# 숫자 배열에서 특정 숫자 개수 세기
str(list(range(1, 101))).count('8')  # 1~100에서 '8'의 개수
```

### 📑 2.4 아스키 코드 변환

```python
# 문자 → 숫자
ord('a')  # 97

# 숫자 → 문자
chr(97)   # 'a'
```

### 📑 2.5 정규표현식

```python
import re

# 기본 패턴 매칭
testcase = ['1S2D*3T', '1D2S#10S']
패턴 = re.compile(r'([0-9]|10)([SDT])([\*\#]?)')
패턴.findall(testcase[1])  # [('1', 'D', ''), ('2', 'S', '#'), ('10', 'S', '')]

# 두 글자씩 분할
패턴 = re.compile(r'[a-z]{2}')
패턴.findall('france')  # ['fr', 'an', 'ce']

# 집합으로 변환
str1_set = set(패턴.findall(str1))  # {'fr', 'ce', 'an'}

# 변수 사용 가능
for i in range(1, len(s)//2+1):
    패턴 = f'[a-z]{{{i}}}'
    패턴 = re.compile(패턴)

# 문자열 치환
new_id = re.sub('[\.]+', '.', new_id)  # 연속된 점을 하나로

# 문자열에서 숫자 추출
text = "I have 123 apples and 456 oranges"
numbers = re.findall(r'\d+', text)  # ['123', '456']
numbers_int = [int(x) for x in numbers]  # [123, 456]
```

### 📑 2.6 문자열 고급 처리

```python
# 문자열 뒤집기
text = "hello"
reversed_text = text[::-1]  # "olleh"

# 문자열 회문 확인
def is_palindrome(s):
    return s == s[::-1]

# 문자열 압축 (Run Length Encoding)
def compress_string(s):
    if not s:
        return ""
    
    result = []
    count = 1
    current_char = s[0]
    
    for i in range(1, len(s)):
        if s[i] == current_char:
            count += 1
        else:
            result.append(f"{current_char}{count}")
            current_char = s[i]
            count = 1
    
    result.append(f"{current_char}{count}")
    return ''.join(result)

print(compress_string("aabcccccaaa"))  # "a2b1c5a3"
```

---

## 📚 3. 숫자 및 진수 변환

### 📑 3.1 기본 숫자 연산

#### 올림, 반올림, 내림
```python
import math

# 올림
math.ceil(4.2)   # 5

# 내림
math.floor(4.8)  # 4

# 반올림
round(4.5)       # 4 (파이썬의 round는 banker's rounding)
round(1.23456, 2)  # 1.23

# 포맷팅으로 반올림
print("{:.2f}".format(1.23456789))  # 1.23
print(f"{1.2345:.2f}")  # 1.23
```

#### divmod 함수
```python
# 몫과 나머지를 동시에 구하는 내장함수
divmod(8, 3)  # (2, 2)
```

### 📑 3.2 진수 변환

#### 10진수 → 2진수, 8진수, 16진수
```python
# 1. bin(), oct(), hex() 내장함수 사용
b = bin(60)  # 0b111100
o = oct(60)  # 0o74
h = hex(60)  # 0x3c

# 접두사 제거
b = bin(60)[2:]  # 111100
o = oct(60)[2:]  # 74
h = hex(60)[2:]  # 3c

# 2. format() 내장함수 사용
b = format(60, '#b')  # 0b111100
o = format(60, '#o')  # 0o74
h = format(60, '#x')  # 0x3c

# 접두사 제거
b = format(60, 'b')  # 111100
o = format(60, 'o')  # 74
h = format(60, 'x')  # 3c
```

#### n진수 → 10진수
```python
# int(string, base)
b = int('0b111100', 2)  # 60
o = int('0o74', 8)      # 60
h = int('0x3c', 16)     # 60
b2 = int('101', 2)      # 5
```

#### n진수 → n진수
```python
o = oct(0b111100)  # 0o74
h = hex(0b111100)  # 0x3c
s = str(0b111100)  # 60
```

#### 문자열.format()를 사용한 진수 변환
```python
s = "2진수: {0:#b}, 8진수: {0:#o}, 10진수: {0:#d}, 16진수: {0:#x}".format(60)
# 2진수: 0b111100, 8진수: 0o74, 10진수: 60, 16진수: 0x3c

s = "2진수: {0:b}, 8진수: {0:o}, 10진수: {0:d}, 16진수: {0:x}".format(60)
# 2진수: 111100, 8진수: 74, 10진수: 60, 16진수: 3c
```

### 📑 3.3 비트 연산

```python
# 비트 논리 연산자
bin(9 | 30)  # 0b11110
bin(9 | 30)[2:]  # 11110 (앞의 2개 제거)

# 비트 연산자들
# & (AND), | (OR), ^ (XOR), ~ (NOT)
```

### 📑 3.4 토글

```python
# 1. NOT을 사용한 방식 (값이 부울일 경우)
x = not x

# 2. XOR을 사용한 방식 (값이 0과 1일 경우)
x ^= 1
```

---

## 📚 4. 고급 자료구조

### 📑 4.1 collections 모듈

#### deque (양방향 큐)
```python
from collections import deque

# 기본 사용법
data = deque([2, 3, 4])
data.appendleft(1)  # 앞에 추가
data.append(5)      # 뒤에 추가
print(data)  # deque([1, 2, 3, 4, 5])

# 주요 메서드
data.popleft()      # 앞에서 제거
data.pop()          # 뒤에서 제거
data.remove(3)      # 특정 값 제거

# 최대 길이 제한
cache = deque(['', '', ''], maxlen=3)
cache.append('hello')
print(cache)  # deque(['', '', 'hello'], maxlen=3)

# 회전
deq = deque('abcde')
deq.rotate(1)  # deque(['e', 'a', 'b', 'c', 'd'])
```

#### Counter (카운터)
```python
from collections import Counter

# 기본 사용법
counter = Counter(['red', 'blue', 'red', 'green', 'blue', 'blue'])
print(counter['blue'])    # 3
print(counter['green'])   # 1
print(dict(counter))      # {'red': 2, 'blue': 3, 'green': 1}

# Counter 간 연산
def solution(participant, completion):
    cnt1 = Counter(participant)
    cnt2 = Counter(completion)
    return list((cnt1 - cnt2).keys())[0]

# 값만 반환
counter.values()  # dict_values([2, 3, 1])
```

#### defaultdict (기본값 딕셔너리)
```python
from collections import defaultdict

# 기본값이 리스트인 딕셔너리
graph = defaultdict(list)
for s, e in tickets:
    graph[s].append(e)

# 기본값이 정수인 딕셔너리
count_dict = defaultdict(int)
count_dict['key'] += 1  # 키가 없어도 0으로 시작
```

#### namedtuple (이름 있는 튜플)
```python
from collections import namedtuple

# 기본 사용법
Point = namedtuple('Point', ['x', 'y'])
p = Point(11, y=22)
print(p.x, p.y)  # 11 22
print(p[0] + p[1])  # 33

# 언패킹 가능
i, j = p
print(i, j)  # 11 22
```

### 📑 4.2 itertools 모듈

#### 순열과 조합
```python
import itertools

# 순열 (permutations) - 순서 중요, 중복 허용
list(itertools.permutations('ABCD', 2))
# [('A', 'B'), ('A', 'C'), ('A', 'D'), ('B', 'A'), ('B', 'C'), ('B', 'D'), ('C', 'A'), ('C', 'B'), ('C', 'D'), ('D', 'A'), ('D', 'B'), ('D', 'C')]

# 조합 (combinations) - 순서 무관, 중복 불허
list(itertools.combinations('ABCD', 2))
# [('A', 'B'), ('A', 'C'), ('A', 'D'), ('B', 'C'), ('B', 'D'), ('C', 'D')]

# 중복 조합 (combinations_with_replacement) - 순서 무관, 중복 허용
list(itertools.combinations_with_replacement('ABCD', 2))
# [('A', 'A'), ('A', 'B'), ('A', 'C'), ('A', 'D'), ('B', 'B'), ('B', 'C'), ('B', 'D'), ('C', 'C'), ('C', 'D'), ('D', 'D')]

# 데카르트 곱 (product) - 모든 조합
list(itertools.product('ABCD', repeat=2))
# [('A', 'A'), ('A', 'B'), ('A', 'C'), ('A', 'D'), ('B', 'A'), ('B', 'B'), ...]

# 여러 배열의 데카르트 곱
list(itertools.product([1, 2], ['a', 'b'], [True, False]))
# [(1, 'a', True), (1, 'a', False), (1, 'b', True), (1, 'b', False), 
#  (2, 'a', True), (2, 'a', False), (2, 'b', True), (2, 'b', False)]

# 좌표계 생성 예시
x_coords = [0, 1, 2]
y_coords = [0, 1, 2]
coordinates = list(itertools.product(x_coords, y_coords))
# [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
```

#### 그룹화 및 필터링
```python
# groupby: 연속된 같은 값들을 그룹화
[k for k, g in itertools.groupby('AAAABBBCCDAABBB')]
# ['A', 'B', 'C', 'D', 'A', 'B']

[list(g) for k, g in itertools.groupby('AAAABBBCCDAABBB')]
# [['A', 'A', 'A', 'A'], ['B', 'B', 'B'], ['C', 'C'], ['D'], ['A', 'A'], ['B', 'B', 'B']]

# dropwhile: 조건이 False가 되는 지점부터 반환
list(itertools.dropwhile(lambda x: x <= 5, range(10)))
# [6, 7, 8, 9]
```

#### 무한 이터레이터
```python
# count: 무한 카운터
for c, s in zip(itertools.count(0, 0.5), 'abc'):
    print(f'{c}, {s}')
# 0, a / 0.5, b / 1.0, c

# cycle: 순환 반복
for c, s in zip(itertools.cycle(range(2)), 'abcdefgh'):
    print(f'{c}, {s}')
# 0, a / 1, b / 0, c / 1, d / 0, e / 1, f / 0, g / 1, h

# repeat: 반복
list(itertools.repeat('abc', 3))  # ['abc', 'abc', 'abc']
```

### 📑 4.3 heapq 모듈 (우선순위 큐)

```python
import heapq

# 최소 힙 (기본)
heap = []
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 4)
heapq.heappush(heap, 2)

print(heapq.heappop(heap))  # 1 (가장 작은 값)
print(heapq.heappop(heap))  # 2

# 최대 힙 구현 (음수 사용)
max_heap = []
heapq.heappush(max_heap, -3)
heapq.heappush(max_heap, -1)
heapq.heappush(max_heap, -4)
print(-heapq.heappop(max_heap))  # 4 (가장 큰 값)

# 리스트를 힙으로 변환
data = [3, 1, 4, 1, 5, 9, 2, 6]
heapq.heapify(data)  # O(n) 시간에 힙으로 변환

# n번째 큰/작은 원소 찾기
heapq.nlargest(3, [1, 8, 2, 23, 7, -4, 18, 23, 42, 37, 2])  # [42, 37, 23]
heapq.nsmallest(3, [1, 8, 2, 23, 7, -4, 18, 23, 42, 37, 2])  # [-4, 1, 2]
```

### 📑 4.4 bisect 모듈 (이진 탐색)

```python
import bisect

# 정렬된 리스트에 원소 삽입
arr = [1, 3, 5, 7, 9]
bisect.insort(arr, 4)  # [1, 3, 4, 5, 7, 9]

# 삽입 위치 찾기
pos = bisect.bisect_left([1, 3, 5, 7, 9], 4)  # 2 (4가 들어갈 위치)
pos = bisect.bisect_right([1, 3, 5, 7, 9], 4)  # 2 (4가 들어갈 위치)

# 범위 내 원소 개수 찾기
def count_in_range(arr, left, right):
    left_pos = bisect.bisect_left(arr, left)
    right_pos = bisect.bisect_right(arr, right)
    return right_pos - left_pos

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(count_in_range(arr, 3, 7))  # 5 (3, 4, 5, 6, 7)
```

---

## 📚 5. 함수형 프로그래밍

### 📑 5.1 내장 함수

#### map (매핑)
```python
# 함수를 각 원소에 적용
def square(x):
    return x ** 2

list(map(square, range(5)))  # [0, 1, 4, 9, 16]
list(map(lambda x: x**2, range(5)))  # [0, 1, 4, 9, 16]

# 여러 시퀀스 동시 처리
list(map(pow, range(5), itertools.repeat(2)))  # [0, 1, 4, 9, 16]
```

#### filter (필터링)
```python
# 조건에 맞는 원소만 필터링
def is_even(x):
    return x % 2 == 0

list(filter(is_even, range(10)))  # [0, 2, 4, 6, 8]
list(filter(lambda x: x % 2 == 0, range(10)))  # [0, 2, 4, 6, 8]

# 리스트 컴프리헨션으로도 가능
[i for i in range(10) if i % 2 == 0]  # [0, 2, 4, 6, 8]
```

#### zip (묶기)
```python
# 여러 시퀀스를 튜플로 묶기
x = ['a','b','c']
y = [1,3,2]
list(zip(x,y))  # [('a', 1), ('b', 3), ('c', 2)]

# 여러 시퀀스 동시 처리
list(zip(['a', 'b', 'c', 'd'], [1, 2, 3, 4], [10, 20, 30, 40], 'ABCD'))
# [('a', 1, 10, 'A'), ('b', 2, 20, 'B'), ('c', 3, 30, 'C'), ('d', 4, 40, 'D')]
```

#### enumerate (인덱스와 값)
```python
x = ['one','two','three']

# 인덱스와 값 함께 반환
for i, value in enumerate(x):
    print(i, value)
# 0 one / 1 two / 2 three

# 시작값 지정
for i, value in enumerate(x, 2):
    print(i, value)
# 2 one / 3 two / 4 three
```

#### abs (절댓값)
```python
abs(-1)   # 1
abs(0)    # 0
abs(-15)  # 15
```

### 📑 5.2 람다 함수

```python
# 정렬 기준 설정
data = [(1, 2), (3, 1), (2, 3)]
sorted(data, key=lambda x: x[1])  # 두 번째 원소 기준 정렬
sorted(data, key=lambda x: x[1]-x[0])  # 두 수의 차 기준 정렬

# 딕셔너리 정렬
answer = {'a': 3, 'b': 1, 'c': 2}
sorted(answer, key=lambda x: answer[x])  # value 기준 정렬

# 복수 기준 정렬
data = [(1, 2), (1, 1), (2, 1)]
sorted(data, key=lambda x: (x[0], -x[1]))  # 첫 번째 오름차순, 두 번째 내림차순

# 딕셔너리로 함수 매핑
계산식 = {
    'S': lambda 값: 값,
    'D': lambda 값: 값**2,
    'T': lambda 값: 값**3,
}
점수 = 계산식['S'](5)  # 5
```

### 📑 5.3 all() 함수

```python
# 모든 것이 참인지 확인
all([True, True, True, True, True])   # True
all([True, False, True, True, True])  # False

# 활용 예시
numbers = [2, 4, 6, 8]
all(n % 2 == 0 for n in numbers)  # True (모든 수가 짝수)
```

---

## 📚 6. 수학 및 알고리즘

### 📑 6.1 최댓값/최솟값

```python
# 기본 사용법
max([1, 2, 3, 4])  # 4
min([1, 2, 3, 4])  # 1

# 딕셔너리에서 활용
x = {8: 1, 3: 9, -2: 1, 10: -1}

# 키 기준 최댓값
max(x)  # 10

# 값 기준 최댓값
max(x, key=lambda k: x[k])  # 3 (값이 9인 키)
x[max(x, key=lambda k: x[k])]  # 9

# 값 기준 최솟값
min(x, key=lambda k: x[k])  # 10 (값이 -1인 키)
x[min(x, key=lambda k: x[k])]  # -1
```

### 📑 6.2 소수 구하기 (에라토스테네스의 체)

```python
def sieve_of_eratosthenes(n):
    # 0과 1은 소수가 아니므로 False, 나머지는 True로 초기화
    is_prime = [False, False] + [True] * (n - 1)
    primes = []
    
    for i in range(2, n + 1):
        if is_prime[i]:
            primes.append(i)
            # i의 배수들을 모두 False로 변경
            for j in range(2 * i, n + 1, i):
                is_prime[j] = False
    
    return primes

# 사용 예시
primes = sieve_of_eratosthenes(1000)
print(primes)  # [2, 3, 5, 7, 11, 13, ...]
```

### 📑 6.3 큐와 스택 구현

#### 큐 (Queue)
```python
# 리스트로 큐 구현
class Queue:
    def __init__(self):
        self.queue = []
    
    def push(self, n):
        return self.queue.append(n)
    
    def pop(self):
        if len(self.queue) == 0:
            return -1
        return self.queue.pop(0)
    
    def empty(self):
        return len(self.queue) == 0
    
    def size(self):
        return len(self.queue)

# 사용 예시
q = Queue()
q.push(1)
q.push(2)
q.push(3)
print(q.pop())  # 1
print(q.pop())  # 2
```

#### 스택 (Stack)
```python
# 리스트로 스택 구현
class Stack:
    def __init__(self):
        self.stack = []
    
    def push(self, n):
        return self.stack.append(n)
    
    def pop(self):
        if len(self.stack) == 0:
            return -1
        return self.stack.pop()
    
    def empty(self):
        return len(self.stack) == 0
    
    def size(self):
        return len(self.stack)

# 사용 예시
s = Stack()
s.push(1)
s.push(2)
s.push(3)
print(s.pop())  # 3
print(s.pop())  # 2
```

---

## 📚 7. 기타 유용한 기능들

### 📑 7.1 리스트 컴프리헨션 고급 활용

```python
# 중첩 리스트 컴프리헨션
matrix = [[i + j for j in range(3)] for i in range(3)]
# [[0, 1, 2], [1, 2, 3], [2, 3, 4]]

# 조건부 리스트 컴프리헨션
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]

# 중첩 반복문
pairs = [(i, j) for i in range(3) for j in range(3)]
# [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
```

### 📑 7.2 슬라이싱 고급 활용

```python
arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 기본 슬라이싱
arr[2:7]      # [2, 3, 4, 5, 6]
arr[2:7:2]    # [2, 4, 6] (2씩 건너뛰기)
arr[::-1]     # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (역순)

# 리스트 회전
def rotate_left(arr, k):
    return arr[k:] + arr[:k]

def rotate_right(arr, k):
    return arr[-k:] + arr[:-k]

arr = [1, 2, 3, 4, 5]
print(rotate_left(arr, 2))   # [3, 4, 5, 1, 2]
print(rotate_right(arr, 2))  # [4, 5, 1, 2, 3]

# 2차원 배열 슬라이싱
matrix = [[i + j for j in range(5)] for i in range(5)]
# 행 슬라이싱
row_slice = matrix[1:3]  # 1, 2번째 행
# 열 슬라이싱
col_slice = [row[1:3] for row in matrix]  # 각 행의 1, 2번째 열
```

### 📑 7.3 수학 관련 유용한 함수들

```python
import math

# 최대공약수, 최소공배수
def gcd(a, b):
    return math.gcd(a, b)

def lcm(a, b):
    return abs(a * b) // math.gcd(a, b)

# 팩토리얼
math.factorial(5)  # 120

# 제곱근
math.sqrt(16)  # 4.0

# 올림, 내림, 반올림
math.ceil(4.2)   # 5
math.floor(4.8)  # 4
round(4.5)       # 4 (파이썬의 round는 banker's rounding)

# 거듭제곱
pow(2, 3)        # 8
2 ** 3           # 8
pow(2, 3, 5)     # 3 (2^3 mod 5)

# 로그
math.log(8, 2)   # 3.0 (log₂8)
math.log10(100)  # 2.0 (log₁₀100)

# 상수
math.pi  # 3.141592653589793
math.e   # 2.718281828459045

# C++14의 기준 나눗셈
int(7 / 3)  # 2 (정수 나눗셈)
```

### 📑 7.4 시간 복잡도 최적화 팁

```python
# 1. set을 활용한 빠른 검색 (O(1))
# 나쁜 예: O(n)
if item in list_data:  # 리스트에서 검색

# 좋은 예: O(1)
if item in set_data:  # 집합에서 검색

# 2. 딕셔너리 get 메서드 활용
# 나쁜 예
if key in dict_data:
    value = dict_data[key]
else:
    value = default_value

# 좋은 예
value = dict_data.get(key, default_value)

# 3. 리스트 컴프리헨션 vs 반복문
# 나쁜 예
result = []
for i in range(10):
    if i % 2 == 0:
        result.append(i * 2)

# 좋은 예
result = [i * 2 for i in range(10) if i % 2 == 0]

# 4. 문자열 연결 최적화
# 나쁜 예: O(n²)
result = ""
for char in chars:
    result += char

# 좋은 예: O(n)
result = "".join(chars)
```

---

## 📚 8. 외부 라이브러리

### 📑 8.1 Numpy

#### 배열 합치기
```python
import numpy as np

# 두 배열을 왼쪽에서 오른쪽으로 붙이기
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
np.r_[a, b]  # 또는 np.hstack([a, b]) 또는 np.concatenate((a, b), axis=0)

# 두 배열을 위에서 아래로 붙이기
c = np.array([[1, 2], [3, 4]])
d = np.array([[5, 6], [7, 8]])
np.r_[[c], [d]]  # 또는 np.vstack([c, d]) 또는 np.concatenate((c, d), axis=1)

# 두 개의 1차원 배열을 칼럼으로 세로로 붙여서 2차원 배열 만들기
np.c_[a, b]  # 또는 np.column_stack([a, b])
```

#### 중복되는 원소들의 인덱스 모두 찾기
```python
import numpy as np

b = ['hi', 'hello', 'bye', 'hello', 'hi']
b = np.array(b)
np.where(b == 'hello')[0]  # array([1, 3])
```

### 📑 8.2 Pandas

#### 기본 사용법
```python
import pandas as pd

data = [['Jo', 20], ['Song', 40], ['Joo', 30]]
df = pd.DataFrame(data, columns=['Name', 'Age'])

print(df)
#   Name  Age
# 0  Jo    20
# 1  Song  40
# 2  Joo   30
```

#### 유일성 판별
```python
import pandas as pd

# value_counts(): 열의 각 값에 대한 모든 발생 횟수 반환
data = pd.DataFrame(l)
data[1].value_counts()
# apeach    2
# ryan      1
# tube      1
# con       1
# muzi      1

# 유일성 확인
len(data[1]) == len(data[1].value_counts())
```

---

## 📚 9. 코테 활용 팁

### 자주 사용되는 패턴들

1. **입력 처리**
```python
# 한 줄에 여러 정수 입력
n = list(map(int, input().split()))

# 여러 줄 입력
data = [input().strip() for _ in range(n)]
```

2. **문자열 처리**
```python
# 문자열을 리스트로 변환
chars = list('ABCDE')  # ['A', 'B', 'C', 'D', 'E']

# 리스트를 문자열로 변환
result = ''.join(['A', 'B', 'C'])  # 'ABC'
```

3. **정렬 활용**
```python
# 복수 기준 정렬
data = [(1, 2), (1, 1), (2, 1)]
sorted(data, key=lambda x: (x[0], -x[1]))  # 첫 번째 오름차순, 두 번째 내림차순
```

4. **집합 연산**
```python
# 중복 제거
unique_items = list(set(items))

# 교집합으로 공통 요소 찾기
common = set1.intersection(set2)

# 차집합으로 차이점 찾기
diff = set1.difference(set2)
```

5. **2차원 배열 처리**
```python
# 2차원 배열 생성
n, m = 3, 4
matrix = [[0] * m for _ in range(n)]

# 2차원 배열 회전 (90도)
def rotate_90(matrix):
    return list(zip(*matrix[::-1]))

# 2차원 배열 전치
def transpose(matrix):
    return list(zip(*matrix))
```

6. **그래프 탐색 기본 템플릿**
```python
# BFS 템플릿
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

# DFS 템플릿 (재귀)
def dfs(graph, node, visited):
    visited.add(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
```

7. **동적 프로그래밍 기본 패턴**
```python
# 메모이제이션 데코레이터
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# 2차원 DP 테이블
def dp_2d(n, m):
    dp = [[0] * m for _ in range(n)]
    dp[0][0] = 1
    
    for i in range(n):
        for j in range(m):
            if i > 0:
                dp[i][j] += dp[i-1][j]
            if j > 0:
                dp[i][j] += dp[i][j-1]
    
    return dp[n-1][m-1]
```

8. **이진 탐색 템플릿**
```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# 파라메트릭 서치 (최적화 문제)
def parametric_search(arr, condition):
    left, right = 0, max(arr)
    
    while left < right:
        mid = (left + right + 1) // 2
        if condition(mid):
            left = mid
        else:
            right = mid - 1
    
    return left
```

9. **자주 사용하는 유틸리티 함수들**
```python
# 방향 벡터 (상하좌우)
directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

# 대각선 포함
directions_8 = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]

# 좌표 유효성 검사
def is_valid(x, y, n, m):
    return 0 <= x < n and 0 <= y < m

# 맨하탄 거리
def manhattan_distance(x1, y1, x2, y2):
    return abs(x1 - x2) + abs(y1 - y2)

# 유클리드 거리
def euclidean_distance(x1, y1, x2, y2):
    return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5
```

