/**
 * 문제: https://www.acmicpc.net/problem/17212
 */
const fs = require("fs");
const money = fs.readFileSync("/dev/stdin").toString().trim();

let dp = new Array({ length: 100_001 }).fill(Number.MAX_SAFE_INTEGER);

dp[0] = 0; // 이거 안해줘서 틀렸었움,,
dp[1] = 1;
dp[2] = 1;
dp[3] = 2;
dp[4] = 2;
dp[5] = 1;
dp[6] = 2;
dp[7] = 1;

for (let i = 8; i <= money; i++) {
  dp[i] = Math.min(dp[i - 7], dp[i - 5], dp[i - 2], dp[i - 1]) + 1;
}

console.log(dp[money]);
