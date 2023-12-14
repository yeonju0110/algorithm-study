/**
 * 문제: https://www.acmicpc.net/problem/1913
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input[0];
let target = input[1];

// 상 우 하 좌
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const map = Array.from(Array(Number(n)), () => new Array(Number(n)).fill(0));

let [x, y] = [Math.floor(n / 2), Math.floor(n / 2)];
let direction = 0;
let cnt = 0;
let max = 1;
let ls = 0;

for (let i = 1; i <= n ** 2; i++) {
  map[x][y] = i;
  x += dx[direction % 4];
  y += dy[direction % 4];
  cnt++;

  if (cnt === max) {
    direction++;
    cnt = 0;
    ls++;
  }

  if (ls == 2) {
    max++;
    ls = 0;
  }
}

let result = [0, 0];
for (let i = 0; i < n; i++) {
  let result_arr = [];
  for (let j = 0; j < n; j++) {
    result_arr += map[i][j] + " ";
    if (map[i][j] === Number(target)) {
      result = [i + 1, j + 1];
    }
  }
  console.log(result_arr);
}

console.log(`${result[0]} ${result[1]}`);
