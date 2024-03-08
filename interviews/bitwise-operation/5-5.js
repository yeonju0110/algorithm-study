function isPowerOfTwoOrZero(n) {
  return (n & (n - 1)) == 0;
}

// 예제 실행
console.log(isPowerOfTwoOrZero(4)); // true, 4는 2의 거듭제곱
console.log(isPowerOfTwoOrZero(6)); // false, 6는 2의 거듭제곱이 아님
console.log(isPowerOfTwoOrZero(0)); // true, 0은 특별 케이스로 처리
