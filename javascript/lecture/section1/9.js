// A를 #으로

function solution1(str) {
  return str.replaceAll("A", "#");
}

function solution2(str) {
  return str.replace(/A/g, "#");
}

function solution3(str) {
  let ans = "";
  for (let x of str) {
    if (x === "A") ans += "#";
    else ans += x;
  }
  return ans;
}
