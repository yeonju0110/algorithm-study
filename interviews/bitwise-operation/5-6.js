function bitSwapRequired(a, b) {
  let count = 0;
  let xor = a ^ b; // A와 B의 XOR 연산

  // XOR 결과에서 1의 개수 세기
  while (xor !== 0) {
    count += xor & 1; // XOR 결과의 마지막 비트가 1이면, count 증가
    xor = xor >>> 1; // 비트를 오른쪽으로 이동하여 다음 비트 확인
  }

  return count;
}

// 예제 실행
const A = 29; // 2진수로 11101
const B = 15; // 2진수로 01111
console.log(bitSwapRequired(A, B)); // 출력: 2
