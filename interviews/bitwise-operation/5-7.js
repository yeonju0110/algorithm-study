function swapOddEvenBits(x) {
  let evenMask = 0x55555555; // 짝수 번째 비트를 선택하는 마스크 (32비트에서 01010101...)
  let oddMask = 0xaaaaaaaa; // 홀수 번째 비트를 선택하는 마스크 (32비트에서 10101010...)

  let evenBits = x & evenMask; // 짝수 번째 비트만 추출
  let oddBits = x & oddMask; // 홀수 번째 비트만 추출

  evenBits <<= 1; // 짝수 번째 비트를 왼쪽으로 1 시프트 (홀수 위치로 이동)
  oddBits >>>= 1; // 홀수 번째 비트를 오른쪽으로 1 시프트 (짝수 위치로 이동)

  return evenBits | oddBits; // 조정된 비트들을 합침
}

// 예제 실행
let num = 0b101010; // 예를 들어, 2진수로 101010 (10진수로 42)
console.log(swapOddEvenBits(num).toString(2)); // 출력: 010101 (10진수로 21)
