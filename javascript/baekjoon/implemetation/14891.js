/**
 * 문제: https://www.acmicpc.net/problem/14891
 * 풀이 방법: 구현
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const GEAR_LENGTH = 4;
let gears = input
  .slice(0, GEAR_LENGTH)
  .map((gear) => gear.split("").map(Number));
let k = Number(input[GEAR_LENGTH]);

const rotate_gear = (gear, direction) => {
  if (direction === 0) {
    return gear;
  }

  if (direction === 1) {
    let tmp = gear[7];
    gear.pop();
    gear = [tmp, ...gear];
  } else {
    let tmp = gear[0];
    gear.shift();
    gear = [...gear, tmp];
  }

  return gear;
};

for (let i = 0; i < k; i++) {
  let [gear_idx, direction] = input[i + GEAR_LENGTH + 1].split(" ").map(Number);
  gear_idx = gear_idx - 1;

  // 0: 회전 안함, 1: 시계 방향, -1: 반시계 방향
  let gears_rotation = new Array(GEAR_LENGTH).fill(0);
  gears_rotation[gear_idx] = direction;

  // 커지는 방향으로
  for (let j = gear_idx; j < GEAR_LENGTH - 1; j++) {
    if (gears[j][2] !== gears[j + 1][6] && gears_rotation[j] !== 0) {
      const current_direction = -gears_rotation[j];

      gears_rotation[j + 1] = current_direction;
    }
  }

  // 작아지는 방향으로
  for (let k = gear_idx; k > 0; k--) {
    if (gears[k][6] !== gears[k - 1][2] && gears_rotation[k] !== 0) {
      const current_direction = -gears_rotation[k];

      gears_rotation[k - 1] = current_direction;
    }
  }

  for (let i = 0; i < GEAR_LENGTH; i++) {
    gears[i] = rotate_gear(gears[i], gears_rotation[i]);
  }
}

let answer = 0;
for (let i = 0; i < GEAR_LENGTH; i++) {
  if (gears[i][0] === 1) {
    answer += 2 ** i;
  }
}

console.log(answer);
