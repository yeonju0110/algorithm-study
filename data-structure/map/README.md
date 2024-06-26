# 맵 Map (Dictionary)

- Key, Value 쌍을 갖는다
- 삽입/삭제: Python O(1) ⇒ hash, C++ O(logN) ⇒ red-black tree

```python
m = {}
m["a"] = 40
m["b"] = 100
m["c"] = 50

for k in m:
	print(k, m[k])
```

## 📑 딕서녀리 (사전 자료형)

- key와 value의 쌍을 데이터로 가지는 자료형
- 순서가 있음
- 내부적으로 해시 테이블을 이용
  - 데이터의 검색 및 수정을 O(1)의 시간에 처리할 수 있음
  - 리스트보다 훨씬 빠르게 동작

```py
data = dict()
data['사과'] = 'Apple'
data['바나나'] = 'Banana'
data['코코넛'] = 'Coconut'

print(data) # {'사과': 'Apple', '바나나': 'Banana', '코코넛': 'Coconut'}
```

- 사전 자료형에 특정한 원소가 있는지 검사할 때: `원소 in 사전`

```py
data = dict()
data['사과'] = 'Apple'
data['바나나'] = 'Banana'
data['코코넛'] = 'Coconut'

if '사과' in data:
    print("'사과'를 키로 가지는 데이터 존재!")
```

\*\* iterable 자료형 - 순차적인 정보를 담는 자료형들 (리스트, 문자열, 튜플) - in 문법 사용 가능

### 🧷 사전 자료형 관련 메서드

📍 keys() : 키 데이터만 뽑아서 리스트로 이용
📍 values() : 값 데이터만 뽑아서 리스트로 이용

```py
data = dict()
data['사과'] = 'Apple'
data['바나나'] = 'Banana'
data['코코넛'] = 'Coconut'

key_list = data.keys()
value_list = data.values()
print(key_list) # dict_keys(['사과', '바나나', '코코넛'])
print(value_list) # dict_values(['Apple', 'Banana', 'Coconut"])

for key in key_list:
    print(data[key])
```

---

<br />

#### **딕셔너리 Value값을 기준으로 정렬**

- 딕셔너리에 items() 메서드를 사용해주면 {"key" : value }의 형태를 [(key, value)]의 형태로 만들어 준다.
- 이를 sorted해주면 **key값을 기준**으로 오름차순으로 정렬한다.
- **value값으로 정렬**하려면 lambda를 사용해주면 된다.

```python
sorted(d.items(), key=lambda x : x[1])
```
