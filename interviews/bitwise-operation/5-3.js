function longestSequenceAfterFlip(n) {
  if (~n === 0) return parseInt(Math.log2(n)) + 1; // 모든 비트가 1이면, 비트 길이 반환

  let currentLength = 0; // 현재 1의 연속 길이
  let previousLength = 0; // 이전 1의 연속 길이
  let maxLength = 1; // 최대 길이 (최소한 하나의 비트를 0에서 1로 바꿀 수 있으므로 1로 시작)

  while (n !== 0) {
    if ((n & 1) === 1) {
      // 현재 비트가 1이면, 현재 길이 증가
      currentLength++;
    } else if ((n & 1) === 0) {
      // 현재 비트가 0이면
      // 다음 비트도 0인 경우 이전 길이를 0으로 리셋, 아니면 현재 길이를 이전 길이로 설정
      previousLength = (n & 2) === 0 ? 0 : currentLength;
      currentLength = 0; // 현재 길이 리셋
    }
    // 최대 길이 갱신 (현재 길이 + 이전 길이 + 1 (비트 하나를 0에서 1로 변경))
    maxLength = Math.max(maxLength, previousLength + currentLength + 1);
    n >>>= 1; // 우측으로 비트 이동
  }

  return maxLength;
}

// 예제 실행
console.log(longestSequenceAfterFlip(1775)); // 정수 예제: 1775 (11011101111)
