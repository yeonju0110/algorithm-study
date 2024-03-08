function drawLine(screen, width, x1, x2, y) {
  let startOffset = x1 % 8; // x1의 바이트 내 오프셋
  let firstFullByte = x1 / 8; // 첫 번째 전체 바이트
  if (startOffset !== 0) {
    firstFullByte++;
  }

  let endOffset = x2 % 8; // x2의 바이트 내 오프셋
  let lastFullByte = x2 / 8; // 마지막 전체 바이트
  if (endOffset !== 7) {
    lastFullByte--;
  }

  // 전체 바이트를 검은색으로 설정
  for (let b = firstFullByte; b <= lastFullByte; b++) {
    screen[(width / 8) * y + b] = 0xff; // 0xFF는 모든 비트가 1인 바이트
  }

  // 시작 바이트와 끝 바이트에 대한 마스크 생성
  let startMask = 0xff >> startOffset;
  let endMask = ~(0xff >> (endOffset + 1));

  // 한 바이트 내에서 선이 시작하고 끝나는 경우
  if (x1 / 8 === x2 / 8) {
    let mask = startMask & endMask;
    screen[(width / 8) * y + x1 / 8] |= mask;
  } else {
    // 시작 바이트에 선을 그림
    if (startOffset !== 0) {
      let byteNumber = (width / 8) * y + firstFullByte - 1;
      screen[byteNumber] |= startMask;
    }
    // 끝 바이트에 선을 그림
    if (endOffset !== 7) {
      let byteNumber = (width / 8) * y + lastFullByte + 1;
      screen[byteNumber] |= endMask;
    }
  }
}
