const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, C] = input[0].split(" ").map(Number);
const homes = input.splice(1).map(Number);
homes.sort();

let start = 1;
let end = homes[homes.length - 1] - homes[0];
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let available_count = 1;
  let now = homes[0];

  for (let i = 1; i < N; i++) {
    if (homes[i] >= now + mid) {
      available_count += 1;
      now = homes[i];
    }
  }

  if (available_count >= C) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}

console.log(result);
