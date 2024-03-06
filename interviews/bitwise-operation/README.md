# 👩🏻‍💻 비트 조작

## 비트 조작 트릭들

![](https://github.com/yeonju0110/algorithm-study/assets/97719273/af49d014-cfc1-4779-94ff-7e8b028cf215)

## 2의 보수와 음수

### 보수를 계산하는 법

![](https://github.com/yeonju0110/algorithm-study/assets/97719273/861a25af-9cb4-425e-9b42-c8ded3885215)

### 4비트 정수값

![](https://github.com/yeonju0110/algorithm-study/assets/97719273/f104d84a-40a5-488c-8b2a-80f4925645aa)

- 왼쪽 절대값 + 오른쪽 절대값 = 2^3
- 부호비트를 뺀 왼쪽과 오른쪽의 2진수 값은 항상 같음

## 산술 우측 시프트 vs 논리 우측 시프트

### 1. 산술 우측 시프트

- `>>` 연산과 같음
- 2로 나눈 결과와 같음
- 비트를 오른쪽으로 옮기긴 하지만 부호비트는 바뀌지 않음

![](https://github.com/yeonju0110/algorithm-study/assets/97719273/43992330-615a-4a00-9cc9-65046252e508)

```java
int repeatedArithmeticShift(int x, int count) {
	for (int i 0; i <count; i++) {
		x >>= 1; // 1만큼 산술 시프트 return x;
	}
	return x;
}
```

### 2. 논리 우측 시프트

- `>>>` 연산과 같음
- 부호비트가 0으로

![](https://github.com/yeonju0110/algorithm-study/assets/97719273/cfc999fb-04e0-42d5-bff2-d803e84a44c5)

```java
int repeatedLogicalShift(int x, int count) {
	for (int i =0; i < count; i++) {
		x >>>= 1; // 1만큼 논리 시프드 return x;
	}
	return x;
}
```

## 기본적인 비트 조작: 비트값 확인 및 채워넣기

### 비트값 확인

```java
boolean getBit(int num, int i) {
	return ((num & (1 << i)) != 0);
}
```

- **목적**: 정수 `num`에서 `i`번째 비트가 1인지 0인지를 확인
- **방법**:

```java
getBit(5, 2)
```

- 5의 2진수 표현은 `0101`
- `1 << 2`는 `0100`
- `0101 & 0100`은 `0100`으로, 0이 아니므로 `true`를 반환함.
- 즉, 5의 2번째 비트는 1임

### 비트값 채워넣기

```java
int setBit(int num, int i) {
	return num **|** (1<< i);
}
```

- **목적**: 정수 `num`의 `i`번째 비트를 1로 설정함
- **방법**: `1`을 `i`번 왼쪽으로 시프트하여 `i`번째 위치에 1비트를 놓고, 이를 `num`과 OR 연산(`|`)

```java
setBit(5, 1)
```

- 5의 2진수 표현은 `0101`
- `1 << 1`은 `0010`
- `0101 | 0010`은 `0111`으로, 2진수로 7
- 즉, 5의 1번째 비트를 설정한 결과는 7

### 비트값 삭제하기

**1번**

```java
int clearBit(int num, int i) {
    int mask =~(1 << i);
    return num & mask;
}
```

- **목적**: 정수 `num`의 `i`번째 비트를 '0'으로 설정
- **방법**: `1`을 `i`번 왼쪽으로 시프트한 후, 이 값을 반전시킨 마스크를 만들고, 이 마스크와 `num`을 AND 연산

```java
clearBit(7, 1);
```

- 7의 2진수 표현은 `0111`
- `1 << 1`은 `0010`이고, `~(0010)`은 `1101`
- `0111 & 1101`은 `0101`으로, 2진수로 5임. 즉, 7에서 1번째 비트를 '0'으로 지우면 5가 됨

**2번**

```java
int clearBitsMSBthroughI(int num, int i) {
	int mask =(1 << i) - 1;
	return num & mask;
}
```

- **목적**: 정수 `num`에서 최상위 비트(MSB)부터 `i`번째 비트까지를 '0'으로 설정함.
- **방법**: `1 << i`를 하여 `i`번째 비트 이하의 값들을 '1'로 만들고, 그 값을 1 감소시켜 마스크를 생성한 후, 이 마스크와 `num`을 AND 연산

```java
clearBitsMSBthroughI(15, 2);
```

- 15의 2진수 표현은 `1111`
- `1 << 2`는 `0100`이고, `0100 - 1`은 `0011`
- `1111 & 0011`은 `0011`으로, 2진수로 3임
- 즉, 15에서 최상위 비트부터 2번째 비트까지를 '0'으로 지우면 3이 됨

**3번**

```java
int clearBitslthrough0(int num, int i) {
	int mask =(-1 << (i + 1));
	return num & mask;
}
```

- **목적**: 정수 `num`의 `i`번째 비트부터 0번째 비트까지를 '0'으로 설정
- **방법**: `1`을 `i + 1`번 왼쪽으로 시프트하여 마스크를 생성한 후, 이 마스크와 `num`을 AND 연산

```java
clearBitsIthrough0(15, 1);
```

- 15의 2진수 표현은 `1111`
- `1`은 2진수로 `1111`이고, `1 << (1 + 1)`은 `1100`
- `1111 & 1100`은 `1100`으로, 2진수로 12
- 즉, 15에서 1번째 비트부터 0번째 비트까지를 '0'으로 지우면 12가 됨

### 비트값 바꾸기

```jsx
int updateBit(int num, int i, boolean bitIsl) {
	int value = bitIsl ? 1 0;
	int mask =~(1 << i);
	return (num &mask) I (value<< i);
}
```

- **목적**: 정수 `num`의 `i`번째 비트를 주어진 값(`bitIs1`)으로 업데이트함
- **방법**:

```java
updateBit(5, 1, false)
```

- 5의 2진수 표현은 `0101`
- `1 << 1`은 `0010`이고, `~(0010)`은 `1101`
- `0101 & 1101`은 `0101`으로, 1번째 비트를 0으로 만드는 중간 단계
- `false`가 주어졌으므로, `0 << 1`은 `0000`
- 따라서 최종 결과는 `0101 | 0000`이며, 이는 `0101`
- 즉, 5에서 1번째 비트를 0으로 업데이트하려 했으나 이미 0이므로 결과는 변하지 않고 5가 됨
