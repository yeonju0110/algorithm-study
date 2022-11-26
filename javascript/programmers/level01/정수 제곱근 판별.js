// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12934/solution_groups?language=javascript

function solution(n) {
  const x = Math.sqrt(n);
  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}
