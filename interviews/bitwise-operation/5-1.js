/**
 * 삽입
 */
function insertBits(N, M, i, j) {
  // 1단계: 마스크 생성
  const allOnes = ~0; // 모든 비트가 1인 수
  const left = allOnes << (j + 1); // j번째 비트 이후를 모두 1로 설정
  const right = (1 << i) - 1; // i번째 비트까지를 1로 설정
  const mask = left | right; // N에서 j부터 i까지의 비트를 0으로 설정할 마스크

  // 2단계: N 정리
  const nCleared = N & mask; // N에서 j부터 i까지 비트를 0으로 설정

  // 3단계: M의 위치 조정
  const mShifted = M << i; // M을 i만큼 왼쪽으로 시프트

  // 4단계: 삽입
  return nCleared | mShifted; // N에 M 삽입
}

{
  // 예제 입력
  const N = 0b10000000000;
  const M = 0b10011;
  const i = 2;
  const j = 6;

  // 결과 출력
  console.log(insertBits(N, M, i, j).toString(2));
}
