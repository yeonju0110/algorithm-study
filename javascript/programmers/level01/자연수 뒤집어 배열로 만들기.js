// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12932/solution_groups?language=javascript&type=all

function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((num) => parseInt(num));
}
