/**
 * 문제: https://www.acmicpc.net/problem/16918
 */
const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [r, c, n] = input[0].split(" ").map((e) => +e);

const TIMEOUT = 3;
const BOMB = "O";
const NOT_BOMB = ".";

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let map = Array.from({ length: r }, () => Array(c).fill(null));
let times = Array.from({ length: r }, () => Array(c).fill(0));

for (let i = 1; i <= r; i++) {
  const current = input[i].split("");

  for (let j = 0; j < c; j++) {
    map[i - 1][j] = current[j];

    if (current[j] === BOMB) {
      times[i - 1][j] = TIMEOUT;
    }
  }
}

for (let t = 2; t <= n; t++) {
  const isEven = t % 2 === 0;

  // 폭탄 설치
  if (isEven) {
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (map[i][j] === NOT_BOMB) {
          map[i][j] = BOMB;
          times[i][j] = t + TIMEOUT;
        }
      }
    }
  }

  // 폭탄 제거
  if (!isEven) {
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (times[i][j] === t) {
          map[i][j] = NOT_BOMB;

          for (let k = 0; k < 4; k++) {
            const nx = i + dx[k];
            const ny = j + dy[k];

            if (nx < 0 || nx >= r || ny < 0 || ny >= c) {
              continue;
            }

            if (map[nx][ny] === BOMB && times[nx][ny] !== t) {
              map[nx][ny] = NOT_BOMB;
              times[nx][ny] = 0;
            }
          }
        }
      }
    }
  }
}

for (let i = 0; i < r; i++) {
  let arr = "";
  for (let j = 0; j < c; j++) {
    arr += map[i][j];
  }
  console.log(arr);
}
