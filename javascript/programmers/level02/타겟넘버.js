// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  const n = numbers.length;
  let answer = 0;

  function dfs(value, depth) {
    if (depth === n) {
      if (value === target) {
        answer += 1;
      }
      return;
    }

    const current = numbers[depth];
    dfs(value + current, depth + 1);
    dfs(value - current, depth + 1);
  }

  dfs(0, 0);

  return answer;
}
