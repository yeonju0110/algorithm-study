// 10부제

function solution1(d, arr) {
  let x,
    ans = 0;
  for (let i = 0; i < arr.length; i++) {
    x = (arr[i] + "").split("");
    if (Number.parseInt(x[x.length - 1]) === d) {
      ans++;
    }
  }

  return ans;
}

function solution2(d, arr) {
  let ans = 0;
  for (let x of arr) {
    if (x % 10 === d) {
      ans++;
    }
  }

  return ans;
}
