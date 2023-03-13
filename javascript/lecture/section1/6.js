// 홀수

function solution1(arr) {
  let sum,
    min,
    ans = [];
  const arr2 = arr.filter((x) => (x %= 2) === 1);
  sum = arr2.reduce((pre, cur) => pre + cur);
  min = Math.min(...arr2);
  ans.push(sum, min);

  return ans;
}
