/**
 * 문제: https://www.acmicpc.net/problem/15886
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, movements] = input;
let cnt = 0;

for (let i = 0; i < movements.length - 1; i++) {
  if (movements[i] === "E" && movements[i + 1] === "W") {
    cnt++;
  }
}

console.log(cnt);
