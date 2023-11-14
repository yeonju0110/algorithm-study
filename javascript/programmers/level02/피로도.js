// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  const n = dungeons.length;
  const visited = new Array(n).fill(0);

  let answer = 0;

  function dfs(userHealth, count) {
    answer = Math.max(count, answer);

    for (let i = 0; i < n; i++) {
      [minHealth, exhaustion] = dungeons[i];

      if (userHealth >= minHealth && !visited[i]) {
        visited[i] = 1;
        dfs(userHealth - exhaustion, count + 1);
        visited[i] = 0;
      }
    }
  }

  dfs(k, 0);

  return answer;
}
