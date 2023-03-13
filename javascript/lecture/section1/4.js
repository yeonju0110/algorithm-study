// 1부터 N까지 합 출력하기

function solution1(N) {
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    answer += i;
  }
  return answer;
}
