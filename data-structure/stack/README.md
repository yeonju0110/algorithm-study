## 스택

- 삽입/삭제: O(1)
- 선입후출, 후입선출 (FILO, LIFO)
- Python은 리스트 사용

```py
stack = []
stack.append(5)
stack.pop()

print(stack) # 최하단 원소부터
print(stack[::-1]) # 최상단 원소부터

while len(s) > 0:
	print(s[-1])
	s.pop(-1) # s.pop()과 같음
```

```py
class Stack(list) :
		push = list.append
		pop = list.pop

		def is_empty(self) :
				if not self :
						return True
				else :
						return False

stack = Stack()
stack.push(1)
print("stack", stack)
stack.push(2)
print("stack", stack)
stack.push(3)
print("stack", stack)
stack.pop()
print("stack", stack)
```
