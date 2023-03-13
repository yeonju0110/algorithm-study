// 문자 찾기

function solution1(str, t) {
  let cnt = 0;
  for (let x of str) {
    if (x === t) cnt++;
  }

  return cnt;
}

function solution2(str, t) {
  let ans;
  ans = str.split(t);

  return ans.length - 1;
}
