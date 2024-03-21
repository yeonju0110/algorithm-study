# 수학

## 유클리드 호제법

```py
def gcd(a, b):
    if a % b == 0:
        return b
    else:
        return gcd(b, a % b)

def lcm(a, b):
	return (a * b) // gcd(a, b)
```
