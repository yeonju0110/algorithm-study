// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return (n + "").split("").reduce((acc, v) => (acc += parseInt(v)), 0);
}
