/**
 * 문제: https://www.acmicpc.net/problem/16935
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, r] = input[0].split(" ");

let a = [];
for (let i = 1; i <= n; i++) {
  a.push(input[i].split(" "));
}

const calculations = input[input.length - 1].split(" ");

function transposeMatrix(maps) {
  return maps[0].map((_, index) => maps.map((row) => row[index]));
}

function reverseRows(maps) {
  return maps.map((row) => row.reverse());
}

function reverseColumns(maps) {
  return maps.reverse();
}

function calc1(maps) {
  return reverseColumns(maps);
}

function calc2(maps) {
  return reverseRows(maps);
}

function calc3(maps) {
  return transposeMatrix(reverseColumns(maps));
}

function calc4(maps) {
  return transposeMatrix(reverseRows(maps));
}

function divideFourGroups(maps) {
  const [y, x] = [maps.length, maps[0].length];
  const halfY = Math.floor(y / 2);
  const halfX = Math.floor(x / 2);

  return [
    maps.slice(0, halfY).map((row) => row.slice(0, halfX)),
    maps.slice(0, halfY).map((row) => row.slice(halfX)),
    maps.slice(halfY).map((row) => row.slice(halfX)),
    maps.slice(halfY).map((row) => row.slice(0, halfX)),
  ];
}

function calc5(maps) {
  const groups = divideFourGroups(maps);

  return [
    ...groups[3].map((row, idx) => [...row, ...groups[0][idx]]),
    ...groups[2].map((row, idx) => [...row, ...groups[1][idx]]),
  ];
}

function calc6(maps) {
  const groups = divideFourGroups(maps);

  return [
    ...groups[1].map((row, idx) => [...row, ...groups[2][idx]]),
    ...groups[0].map((row, idx) => [...row, ...groups[3][idx]]),
  ];
}

for (let i = 0; i < calculations.length; i++) {
  num = Number(calculations[i]);
  switch (num) {
    case 1:
      a = calc1(a);
      break;
    case 2:
      a = calc2(a);
      break;
    case 3:
      a = calc3(a);
      break;
    case 4:
      a = calc4(a);
      break;
    case 5:
      a = calc5(a);
      break;
    case 6:
      a = calc6(a);
      break;
    default:
      throw new Error("연산 종류 오류");
  }
}

for (let i = 0; i < a.length; i++) {
  console.log(a[i].join(" "));
}
