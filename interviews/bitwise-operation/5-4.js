function getNextSmallest(n) {
  let c = n;
  let c0 = 0;
  let c1 = 0;

  // 0의 개수를 계산 (오른쪽 끝 '1'까지)
  while ((c & 1) === 0 && c !== 0) {
    c0++;
    c >>= 1;
  }

  // 1의 개수를 계산
  while ((c & 1) === 1) {
    c1++;
    c >>= 1;
  }

  // 오류: 모두 1인 경우
  if (c0 + c1 === 31 || c0 + c1 === 0) {
    return -1;
  }

  let p = c0 + c1; // 변경할 위치

  n &= ~0 << (p + 1); // p 이후를 0으로 변경
  let mask = (1 << (c1 + 1)) - 1; // c1+1개의 1 생성
  n |= mask << (c0 - 1); // 오른쪽에 c1+1개의 1 추가

  return n;
}

function getNextLargest(n) {
  let c = n;
  let c0 = 0;
  let c1 = 0;

  // 1의 개수를 계산
  while ((c & 1) === 1) {
    c1++;
    c >>= 1;
  }

  // 오류: n이 0이면 종료
  if (c === 0) return -1;

  // 0의 개수를 계산 (오른쪽 끝 '1'까지)
  while ((c & 1) === 0 && c !== 0) {
    c0++;
    c >>= 1;
  }

  let p = c0 + c1; // 변경할 위치

  n |= 1 << p; // p 위치에 1 추가
  n &= ~((1 << p) - 1); // p 이하를 0으로 변경
  n |= (1 << (c1 - 1)) - 1; // 가장 오른쪽에 c1-1개의 1 추가

  return n;
}

// 예제 실행
let n = 13948; // 예: 13948의 2진수는 11011001111100
console.log(`Next smallest: ${getNextSmallest(n)}`);
console.log(`Next largest: ${getNextLargest(n)}`);
