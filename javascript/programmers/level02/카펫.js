// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

function solution(brown, yellow) {
  var answer = [];
  let divisor = [];

  // 1. yellow 약수 구하기
  for (i = 1; i <= yellow ** 0.5; i++) {
    if (yellow % i == 0) {
      divisor.push([i, yellow / i]);
    }
  }

  // 2. 완전 탐색
  divisor.forEach((v) => {
    const width = Math.max(...v);
    const height = Math.min(...v);
    const brownGuess = (width + height) * 2 + 4;
    if (brown === brownGuess) {
      answer = [width + 2, height + 2];
    }
  });

  return answer;
}
