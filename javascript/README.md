# Coding Test for JavaScript

## [배열](#🌈-배열)

- [forEach](#💫-foreach)
- [map](#💫-map)
- [filter](#💫-filter)
- [reduce](#💫-reduce)

## [Math](#🌈-math)

- [최솟값, 최댓값 구하기](#💫-최솟값-최댓값-구하기)

<br />
<br />

## 🌈 배열

<br />

### 💫 forEach

---

```js
a = [10, 11, 12, 13, 14, 15];
a.forEach(
  function (v, i) {
    console.log(v, i, this);
  },
  [1, 2]
);
// 출력: 10 0 [1, 2], 11 1 [1, 2], 12 2 [1, 2], 13 3 [1, 2], ...
```

<br />

### 💫 map

---

- 새로운 배열 생성
- return 값을 반환함
- `무조건 원본 배열과 길이가 같음`
  - return값을 받지 않으면 undefined를 push함

```js
a = [10, 11, 12, 13, 14, 15];

let ans = a.map(
  function (v, i) {
    return v * v;
  },
  [1, 2]
);
console.log(ans);
// 출력: 100, 121, 144, 169, ...

let ans = a.map(
  function (v, i) {
    if (v % 2 === 0) return v;
  },
  [1, 2]
);
console.log(ans);
// 출력: 100, undefined, 144, undefined, ...
```

<br />

### 💫 filter

---

- 새로운 배열 생성
- callback 함수가 참을 return한 요소로 새로운 배열 만듬
- 원본 배열과 길이가 같지 않을 수 있음

```js
a = [10, 11, 12, 13, 14, 15];

let ans = a.filter(
  function (v, i) {
    return v % 2 === 0;
  },
  [1, 2]
);
console.log(ans);
// 출력: 10, 12, ...
```

<br />

### 💫 reduce

---

- 어떠한 값을 생산해서 return함
- return한 값이 다시 acc가 됨

```js
a = [10, 11, 12, 13, 14, 15];

let ans = a.reduce(function (acc, v) {
  return acc + v;
}, 0);
console.log(ans);
// 출력: 10, 12, ...
```

### 💫 replace

---

- 인자: 정규표현식 or 문자열

1. 원래는 첫번째 일치하는 요소만 바꿔줌

   ```jsx
   s = s.replace(/A/, "#");
   s = s.replace("A", "#");
   // B#NANA
   ```

2. 모든 일치하는 요소를 바꿔주는 법

   - g를 뒤에 붙이기

     ```jsx
     s = s.replace(/A/g, "#");
     ```

   - replaceAll 사용

     ```jsx
     s = s.replaceAll("A", "#");
     ```

3. 소문자만 남기기 (특수문자, 공백 제거)

   ```jsx
   s = s.toLowerCase().replace(/[^a-z]/g, "");
   ```

<br />
<br />

## 🌈 Math

```js
Math.ceil() / Math.floor() / Math.round();
Math.pow(10, 2) / 10 ** 2;
Math.sqrt(2);
```

<br />

### 💫 최솟값, 최댓값 구하기

---

1. 최대 정수, 최소 정수 이용
   ```js
   min = Number.MAX_SAFE_INTEGER; // 최솟값 구하기
   max = Number.MIN_SAFE_INTEGER; // 최댓값 구하기
   ```
2. Math.min(), Math.max()
   ```js
   Math.min(...arr); // ✨
   Math.max(1, 3, 2);
   ```
3. Function.prototype.apply
   ```js
   let answer = Main.min.apply(null, arr);
   ```
4. Array.reduce()
   - 이렇게 하는 법도 있다고만 알아두기
   ```js
   arr.reduce((a, b) => {
     return Math.max(a, b);
   });
   ```
