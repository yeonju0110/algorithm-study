/**
 * 문제: https://www.acmicpc.net/problem/17128
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, Q] = input[0].split(" ").map(Number);
let cows = input[1].split(" ").map(Number);
let qs = input[2].split(" ").map(Number);

let original_sum = 0;

for (let i = 0; i < N; i++) {
  original_sum +=
    cows[i % N] * cows[(i + 1) % N] * cows[(i + 2) % N] * cows[(i + 3) % N];
}

let result = [];
for (let i = 0; i < qs.length; i++) {
  const fake_cow_idx = qs[i] - 1;

  let idxs = [
    fake_cow_idx - 3,
    fake_cow_idx - 2,
    fake_cow_idx - 1,
    fake_cow_idx + 1,
    fake_cow_idx + 2,
    fake_cow_idx + 3,
  ];
  idxs = idxs.map((idx) => {
    if (idx < 0) {
      return (idx + N) % N;
    } else {
      return idx % N;
    }
  });

  let changed_sum = 0;
  for (let k = 0; k < 4; k++) {
    changed_sum += cows[idxs[k]] * cows[idxs[k + 1]] * cows[idxs[k + 2]];
  }

  const answer = original_sum - 2 * cows[fake_cow_idx] * changed_sum;
  result.push(answer);

  cows[fake_cow_idx] = -cows[fake_cow_idx];
  original_sum = answer;
}

console.log(result.join("\n"));
