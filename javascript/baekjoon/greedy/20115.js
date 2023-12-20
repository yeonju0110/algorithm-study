/**
 * 문제: https://www.acmicpc.net/problem/20115
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
let drinks = input[1].split(" ").map(Number);

drinks.sort((a, b) => a - b);

let sum = drinks[drinks.length - 1];
for (let i = 0; i < N - 1; i++) {
  sum += drinks[i] / 2;
}

console.log(sum);
