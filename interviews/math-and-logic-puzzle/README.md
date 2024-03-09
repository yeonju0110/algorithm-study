# 🧩 수학과 논리 퍼즐

## 소수

- 모든 자연수는 소수의 곱으로 나타낼 수 있음

$$
84 = 2^2 * 3^1 * 5^0 * 7^1 * 11^0 * 13^0 * 17^0 * ...
$$

- 위의 수식에서 많은 소수의 지수 부분이 0임

### 가분성 (divisibility)

- 어떤 수 x로 y를 나눌 수 있다.
- `mod(y, x) = 0`
- `x를 소수의 곱으로 분할했을 때 나열되는 모든 소수`는
  `y를 소수의 곱으로 분할하였을 때 나열되는 모든 소수들의 부분집합`이어야 한다.
- $x = 2^{j0} * 3^{j1} * 5^{j2} * 7^{j3} * 11^{j4} \\ y = 2^{k0} * 3^{k1} * 5^{k2} * 7^{k3} * 11^{k4}일때$
  x 가 y 로 나누어 떨어지면  $i, j_i <= k_i$ 를 만족한다.
- **최대공약수**
  $gcd(x,y) = 2^{min(j0, k0)} * 3^{min(j1, k1)} * 5^{min(j2, k2)} * ...$
- **최소공배수**
  $lcm(x,y) = 2^{max(j0, k0)} * 3^{max(j1, k1)} * 5^{max(j2, k2)} * ...$
- **gcd \* lcm**
  = $2^{min(j0, k0)} * 2^{max(j0, k0)} * 3^{min(j1, k1)} * 3^{max(j1, k1)}  * ...$
  = $2^{min(j0, k0) + max(j0, k0)} * 3^{min(j1, k1) + max(j1, k1)}  * ...$
  = $2^{j0+k0} * 3^{j1+k1} * ...$
  =$2^{j0} * 2^{k0} * 3^{j1} * 3^{k1}$
  = xy

### 소수 판별

- 가장 단순한 방법
  - 2에서 n-1까지 루프를 돌면서 나누어지는 경우가 있는지 확인해 보는 것
- 좀 더 개선한 방법

  - 루프를 n이 아닌 n의 제곱근까지만!
  - 이유
    - 모든 숫자 a는 그에 대한 보수 b`(a*b = n)`가 반드시 존재하기 때문
    - 3에서 이미 검사했기 때문에 6까지 검사할 필요가 없음
      ![](https://github.com/yeonju0110/algorithm-study/assets/97719273/360b6b13-7719-44de-b4fc-ae75185f4394)

  ```python
  import math

  def primeNaive(n: int) -> bool:
  	if n < 2:
  		return False

  	sqrt: int = int(math.sqrt(n))

  	for i in range(2, sqrt + 1):
  		if n % i == 0:
  			return False

  	return True
  ```

### 소수 목록 만들기: 에라토스테네스의 체

- 소수 목록을 만드는 굉장히 효율적인 방법
- ‘소수가 아닌 수들은 반드시 다른 소수로 나누어진다’ 라는 사실에 기반해 동작

```python
def sieveOfEratosthenes(max_val: int) -> List[bool]:
    flags: List[bool] = [True] * (max_val + 1)
    init(flags) # 0과 1번 인댁스를 제외한 모든 원소값을 true로 초기화한다.

    prime: int = 2
    while prime <= sqrt(max_val):
        crossOff(flags, prime) # prime의 배수들을 지워나간다.
        prime = getNextPrime(flags, prime) # 그다음 true로 세팅된 인텍스를 잦는다.

    return flags

def init(flags: List[bool]) -> None:
    flags[0] = flags[1] = False

    for i in range(2, len(flags)):
        flags[i] = True

def crossOff(flags: List[bool], prime: int) -> None:
    for i in range(prime * prime, len(flags), prime):
        flags[i] = False

def getNextPrime(flags: List[bool], prime: int) -> int:
    next_prime: int = prime + 1

    while next_prime < len(flags) and not flags[next_prime]:
        next_prime += 1

    return next_prime
```

### 더 개선할 방법

- 배열에 홀수만 저장하는 방법
  - 장점: 메모리 공간을 반으로 줄일 수 있음

## 확률

### A**∩**B의 확률

- 베이즈 정리

$$
P(A∩B)=P(B|A)P(A)=P(A|B)P(B) \ 이므로\\ P(A
|B) = P(B|A)P(A)/P(B)와\ 같다.
$$

### A**∪**B의 확률

$$
P(A∪B) = P(A) + P(B) - P(A∩B)
$$

### 독립성

- 독립 사건?
  - 한 사건의 발생과 다른 사건의 발생 사이에 아무런 관계가 없는 경우
- A와 B가 독립사건이라면,
  - A가 B에 아무런 영향을 끼치지 않으므로,
  - P(B|A) = P(B)가 됨
  - 따라서 P(A∩B) = P(A)P(B)가 됨

### 상호 배타성

- 상호 배타적?
  - 한 사건이 일어난 경우 다른 사건은 발생할 수 없는 경우
  - 즉, P(A∩B) = 0이 됨
    $$
    P(A∪B) = P(A) + P(B) - P(A∩B) \\ P(A∪B) = P(A) + P(B) - 0 \\ P(A∪B) = P(A) + P(B)
    $$
  - P(A∪B) = P(A) + P(B) - P(A∩B)
  - P(A∪B) = P(A) + P(B) - P(A∩B)

### 독립성과 상호 배타성은 완전히 다른 개념이다.

- `상호 배타성`: 한 사건이 발생하면 다른 사건이 발생할 수 없음
- `독립성`: 한 사건의 발생 여부가 다른 사건에 아무런 영향도 미치지 않아야 함

1. 두 사건의 확률이 전부 0보다 클 경우엔,
   - `상호 배타성`과 `독립성`을 동시에 만족시킬 수는 없음
2. 두 사건 중 하나의 확률이 0이라면,
   - 두 사건은 `독립적` + `상호 배타적`임
