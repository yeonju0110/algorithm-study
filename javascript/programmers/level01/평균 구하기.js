// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  return arr.reduce((sum, v) => (sum += v), 0) / arr.length;
}
