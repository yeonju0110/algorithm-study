# Built-in Function

## list

```python
# list
dir([1, 2, 3, 4])
```

```python
Out[-]
['__add__',
 '__class__',
 '__contains__',
 '__delattr__',
 '__delitem__',
 '__dir__',
 '__doc__',
 '__eq__',
 '__format__',
 '__ge__',
 '__getattribute__',
 '__getitem__',
 '__gt__',
 '__hash__',
 '__iadd__',
 '__imul__',
 '__init__',
 '__init_subclass__',
 '__iter__',
 '__le__',
 '__len__',
 '__lt__',
 '__mul__',
 '__ne__',
 '__new__',
 '__reduce__',
 '__reduce_ex__',
 '__repr__',
 '__reversed__',
 '__rmul__',
 '__setattr__',
 '__setitem__',
 '__sizeof__',
 '__str__',
 '__subclasshook__',
 'append',
 'clear',
 'copy',
 'count',
 'extend',
 'index',
 'insert',
 'pop',
 'remove',
 'reverse',
 'sort']
```

- append : 리스트 끝에 원소를 추가

```python
# append
x = [1,2,3,4]
x.append([3,4])
print(x)
```

```python
Out[-]
[1, 2, 3, 4, [3, 4]]
```

- extend : 리스트 끝에 모든 원소 추가

```python
# extend
x = [1,2,3,4]
x.extend([3,4])
print(x)
```

```python
Out[-]
[1, 2, 3, 4, 3, 4]
```

- copy : 원본에 영향을 주지 않기 위해서 사용

```python
x = [1, 2, 3, 4]
y = x
y.extend([3,4])
print(x)
print(y)
```

```python
Out[-]
[1, 2, 3, 4, 3, 4]
[1, 2, 3, 4, 3, 4]
```

```python
x = [1, 2, 3, 4]
y = x.copy()
y.extend([3,4])
print(x)
print(y)
```

```python
Out[-]
[1, 2, 3, 4]
[1, 2, 3, 4, 3, 4]
```

- clear : 리스트 안의 원소 모두 삭제

```python
x = [1, 2, 3, 4, 5]
print(x)
x.clear()
print(x)
```

```python
Out[-]
[1, 2, 3, 4, 5]
[]
```

- count(a) : 리스트 안에 원소 a의 개수 반환

```python
x = [1, 6, 3, 6, 5, 6, 7]
x.count(6)
```

```python
Out[-]
3
```

- index : 리스트 값의 위치를 반환

```python
x = [5, 8, 3]
x.index(8)
```

```python
Out[-]
1
```

- insert (a,b): 리스트의 a위치에 b 원소 삽입

```python
x = [1, 7, 2, 8, 4]
x.insert(2,5)
x
```

```python
Out[-]
[1, 7, 5, 2, 8, 4]
```

- pop : 리스트의 지정한 위치의 원소 삭제

```python
x = [0, 2, 4, 6, 8]
x.pop(1)
x
```

```python
Out[-]
[0, 4, 6, 8]
```

- remove : 리스트에 들어있는 원소 중 지정한 원소 삭제

```python
x = [0, 2, 4, 6, 8]
x.remove(6)
x
```

```python
Out[-]
[0, 2, 4, 8]
```

## format( )

- format(value, format_spec)
- 형식 지정자가 제어하는 주어진 값의 형식화 된 표현을 출력

```python
# 단위 : 원
format(10000000000, ',')
```

```python
Out[-]
'10,000,000,000'
```

```python
# 지수
format(10000000000, 'e')
```

```python
Out[-]
'1.000000e+10'
```

```python
# 16진수
format(10000000000, 'x')
# hex(10000000000) <- 16진수로 변환
```

```python
Out[-]
'2540be400'
```

```python
# 오른쪽 정렬
format(100000, '0>020,.4f')
# 왼쪽 정렬
format(100000, '0<020,.4f')
# 가운데 정렬
format(100000, '0=020,.4f')
```

```python
Out[-]
'00000000100,000.0000'
'100,000.000000000000'
'000,000,100,000.0000'
```

## filter( )

- filter(function, iterable)
- iterable의 각 요소가 true인지 아닌지 확인후 출력

```python
def hojun(value):
    if value % 2 == 0:
        return True
    else:
        return False

list(filter(hojun, range(20)))
```

```python
Out[-]
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

```python
list(filter(lambda x: x % 2 == 0, range(20)))
```

```python
Out[-]
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

```python
[i for i in range(20) if i % 2 == 0]
```

```python
Out[-]
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

```python
len([1, 2, 3, 4])
```

```python
Out[-]
4
```

## map( )

- map(function, iterable, ...)
- 주어진 function를 iterable의 각 항목에 적용하고 결과 목록을 출력

```python
list(map(hojun, range(20)))
list(map(lambda x: x % 2 == 0, range(20)))
list(map(lambda x: x**2, range(20)))
list(map(lambda x: x**2, range(20)))
```

```python
Out[-]
[True, False, True, False, True, False, True, False, True, False, True, False, True, False, True, False, True, False, True, False]
[True, False, True, False, True, False, True, False, True, False, True, False, True, False, True, False, True, False, True, False]
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361]
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361]
```

## zip( )

- zip(\*iterables)
- iterables을 가져와 튜플로 집계하여 출력

```python
x = ['a','b','c']
y = [1,3,2]

z = list(zip(x,y))
print(z)
```

```python
[('a', 1), ('b', 3), ('c', 2)]
```

```python
list(zip(['a', 'b', 'c', 'd'], [1, 2, 3, 4], [10, 20, 30, 40], 'ABCD'))
set(zip(['a', 'b', 'c', 'd'], [1, 2, 3, 4], [10, 20, 30, 40], 'ABCD'))
```

```python
Out[-]
[('a', 1, 10, 'A'), ('b', 2, 20, 'B'), ('c', 3, 30, 'C'), ('d', 4, 40, 'D')]
{('a', 1, 10, 'A'), ('b', 2, 20, 'B'), ('c', 3, 30, 'C'), ('d', 4, 40, 'D')}
```

## max/min( )

- max(iterable, \*iterables, key, default)
- min(arg1, arg2, \*args, key)
- iterable에서 가장 큰 항목을 반환합니다,
- min(iterable, \*iterables, key, default)
- max(arg1, arg2, \*args, key)
- iterable에서 가장 작은 항목을 반환한다

```python
max([1, 2, 3, 4])
min([1, 2, 3, 4])
```

```python
Out[-]
4
1
```

```python
x = {8: 1, 3: 9, -2: 1, 10:-1}

result1 = max(x) # key값의 min
print(result1)

result2 = max(x, key = lambda k: x[k])
print(result2)   # value가 큰 key 값
print(x[result2])# key 값을 적용시킨 value
```

```python
Out[-]
10
3
9
```

```python
x = {8: 1, 3: 9, -2: 1, 10:-1}

result1 = min(x) # key값의 min
print(result1)

result2 = min(x, key = lambda k: x[k])
print(result2)   # value가 가장 작은 key 값
print(x[result2])# key 값을 적용시킨 value
```

```python
Out[-]
-2
10
-1
```

## sort( )

- sort : 리스트의 원본을 직접 정렬

```python
x = [10, 5, 8]
y = x.sort()

print(x)
print(y)
```

```python
Out[-]
[5, 8, 10]
None
```

- sorted : 리스트의 원본은 그대로 보존하고 정렬된 값을 반환

```python
x = [10, 5, 8]
y = sorted(x)
print(x)
print(y)
```

```python
Out[-]
[10, 5, 8]
[5, 8, 10]
```

```python
testCaseOne = ['abc', 'def', 'hello world', 'hello', 'python']
testCaseTwo = 'Life is too short, You need python'.split()
testCaseThree = list(zip('anvfe', [1, 2, 5, 4, 3]))

sorted(testCaseOne, key=len, reverse=True)
sorted(testCaseTwo, key=str.lower)
sorted(testCaseThree, key=lambda x:x[1])
sorted(testCaseThree, key=lambda x:x[0])
```

```python
Out[-]
['hello world', 'python', 'hello', 'abc', 'def']
['is', 'Life', 'need', 'python', 'short,', 'too', 'You']
[('a', 1), ('n', 2), ('e', 3), ('f', 4), ('v', 5)]
[('a', 1), ('e', 3), ('f', 4), ('n', 2), ('v', 5)]
```

```python
5 not in [1, 2, 3, 4, 5]
```

```python
Out[-]
False
```

## reversed( )

- reverse : 리스트에 순서를 거꾸로 뒤집기

```python
x = [10, 5, 8]
y = x.reverse()
print(x)
print(y)
```

```python
Out[-]
[8, 5, 10]
None
```

- reversed : 리스트의 원본은 그대로 보존하고 순서를 거꾸로 뒤집기

```python
x = [10, 5, 8]
y = reversed(x)
print(list(x))
print(list(y))
```

```python
Out[-]
[10, 5, 8]
[8, 5, 10]
```

```python
l = [1, 2, 3, 4, 5]
```

```python
Out[-]
dir(l)
# 'append'
# 'clear'
# 'copy'
# 'count'
# 'extend'
# 'index'
# 'insert'
# 'pop'
# 'remove'
# 'reverse'
# 'sort'
def listChange(x):
    x[0] = 1000

l = [1, 2, 3, 4, 5]
listChange(l.copy())
l
```

## Quque

```python
l = []

l.append(10)
l.append(20)
l.append(30)
l.pop(0)
l.append()
```

```python
#Queue 라이브러리를 이용한 방법
import queue
q = queue.Queue()
q.put(2) # append
q.put(5)
q.put(7)
q.put(8)
print(q.get()) # pop
print(q.get())
print(q.get())
print(q.get())
```

```python
Out[-]
2
5
7
8
```

```python
#리스트 queue
class listq():
    def __init__(self):
        self.queue = []

    def push(self, n ):
        return self.queue.append(n)

    def pop(self):
        if len(self.queue) == 0:
            return -1
        return self.queue.pop(0)

		def printq(self):
        print(self.queue)

    def empty(self):
        if len(self.queue) == 0:
            return print('Yes')
        return print('No')

queue= listq()
queue.push(1)
queue.push(2)
queue.push(3)
queue.empty()
queue.printq()
print(queue.pop())
print(queue.pop())
print(queue.pop())
print(queue.pop())
```

```python
Out[-]
No
[1, 2, 3]
1
2
3
-1
```

## Stack

```python
#스택
l = []

l.append(10)
l.append(20)
l.append(30)
l.pop()
l.append()
```

```python
# 리스트 stack
class list_s():
    def __init__(self):
        self.stack = []

    def push(self, n ):
        return self.stack.append(n)

		def pop(self):
        if len(self.stack) == 0:
            return -1
        return self.stack.pop()

    def printq(self):
        print(self.stack)

    def empty(self):
        if len(self.stack) == 0:
            return print('Yes')
        return print('No')

stack= list_s()
stack.push(1)
stack.push(2)
stack.push(3)
stack.empty()
stack.printq()
print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.pop())
```

```python
Out[-]
No
[1, 2, 3]
3
2
1
-1
```

## 집합

```python
# tuple
t = (1, 2, 3)
dir(t)
```

```python
Out[-]
['__add__',
 '__class__',
 '__contains__',
 '__delattr__',
 '__dir__',
 '__doc__',
 '__eq__',
 '__format__',
 '__ge__',
 '__getattribute__',
 '__getitem__',
 '__getnewargs__',
 '__gt__',
 '__hash__',
 '__init__',
 '__init_subclass__',
 '__iter__',
 '__le__',
 '__len__',
 '__lt__',
 '__mul__',
 '__ne__',
 '__new__',
 '__reduce__',
 '__reduce_ex__',
 '__repr__',
 '__rmul__',
 '__setattr__',
 '__sizeof__',
 '__str__',
 '__subclasshook__',
 'count',
 'index']
```

```python
d = {'one':'하나', 'two':'둘'}
dir(d)
# 'clear',
# 'copy',
# 'fromkeys',
# 'get',
# 'items',
# 'keys',
# 'pop',
# 'popitem',
# 'setdefault',
# 'update',
# 'values'

d.keys()
d.values()
d.items()
```

```python
Out[-]
dict_keys(['one', 'two'])
dict_values(['하나', '둘'])
dict_items([('one', '하나'), ('two', '둘')])
```

```python
dir(s)

# 'add',
# 'clear',
# 'copy',
# 'difference', : 차집합 집합하나.difference(집합둘)
# 'difference_update',
# 'discard',
# 'intersection',
# 'intersection_update',
# 'isdisjoint',
# 'issubset',
# 'issuperset',
# 'pop',
# 'remove',
# 'symmetric_difference',
# 'symmetric_difference_update',
# 'union', : 합집합
# 'update', : 한꺼번에 많은 데이터를 추가

s.add(7)
s.discard(7)
'1' in s
```

```python
Out[-]
{'1', '2', '3', '4', '5', '6', 7}
{'1', '2', '3', '4', '5', '6'}
True
```

```python
판콜에이 = {'A', 'B', 'C'}
타이레놀 = {'A', 'B', 'D'}

print(판콜에이.difference(타이레놀)) #차집합
print(판콜에이.intersection(타이레놀)) #교집합
print(len(판콜에이.intersection(타이레놀))) #교집합
print(판콜에이.union(타이레놀)
```

```python
Out[-]
{'C'}
{'B', 'A'}
2
{'B', 'A', 'D', 'C']
```

```python
# 단톡방에 x마리의 동물이 대화를 하고 있습니다.
# 각각의 동물들이 톡을 전송할 때마다 서버에는 아래와 같이 저장됩니다.
# 1. 단톡방에는 모두 몇 마리의 동물이 있을까요? 톡은 무조건 1회 이상 전송합니다.
# 2. 단톡방에 동물들마다 몇 번의 톡을 올렸을까요?

serverData = '개리 라이캣 개리 개리 라이캣 자바독 자바독 파이 썬'

len(set(serverData.split()))

d = {}
for i in set(serverData.split()):
    print(i, serverData.split().count(i))
    d[i] = serverData.split().count(i)
d
```

```python
Out[-]
라이캣 2
썬 1
파이 1
자바독 2
개리 3
```

## set( )

- set(iterable)

```python
s = set('11122345666')
s
```

```python
Out[-]
{'1', '2', '3', '4', '5', '6'}
```

## split( )

```python
for i in '1 2 3 4 5 6 7'.split():
    print(int(i))

[int(i) for i in '1 2 3 4 5 6 7'.split()]

list(map(int, '1 2 3 4 5 6 7'.split()))
```

```python
1
2
3
4
5
6
7
[1, 2, 3, 4, 5, 6, 7]
```

```python
n = list(map(int, input().split()))
print(n)
```

```python
In[-]
2 1 4
Out[-]
[2, 1, 4]
```

## enumerate( )

- enumerate(iterable, start=0)
- iterable에 counter 추가하고 출력한다

```python
x = ['one','two','three']
for iterable in enumerate(x):
    print(iterable)
for counter , value in enumerate(x):
    print(counter, value)
```

```python
Out[-]
(0, 'one')
(1, 'two')
(2, 'three')
0 one
1 two
2 three

```

```python
x = [10,20,30,40,50]

for i , j in enumerate(x,2):
    print(i , j)
```

```python
Out[-]
2 10
3 20
4 30
5 40
6 50
```

## abs( )

- abs(num)
- 주어진 숫자의 절대 값을 출력

```python
abs(-1)
abs(0)
abs(-15)
```

```python
Out[-]
1
0
15

```
