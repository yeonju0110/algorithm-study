/**
 * 문제: https://www.acmicpc.net/problem/17836
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, T] = input[0].split(" ").map(Number);

let maps = [];
for (let i = 1; i <= n; i++) {
  maps.push(input[i].split(" "));
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let visited = Array.from({ length: n }, () => new Array(m).fill(0));
let sword = Number.MAX_SAFE_INTEGER;

function bfs() {
  let queue = [[0, 0]];
  visited[0][0] = 1;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    if (maps[x][y] === "2") {
      sword = n - 1 - x + (m - 1 - y) + visited[x][y] - 1;
    }

    if (x === n - 1 && y === m - 1) {
      return Math.min(visited[x][y] - 1, sword);
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }

      if (maps[nx][ny] !== "1" && visited[nx][ny] === 0) {
        queue.push([nx, ny]);
        visited[nx][ny] = visited[x][y] + 1;
      }
    }
  }

  return sword;
}

let answer = bfs(0, 0);

if (answer > T) {
  console.log("Fail");
} else {
  console.log(answer);
}
