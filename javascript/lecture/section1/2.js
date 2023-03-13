// 삼각형 판별하기

function solution1(a, b, c) {
  const arr = [a, b, c];
  let sum, max;

  sum = arr.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  max = Math.max(...arr);

  if (sum - max > max) {
    return "YES";
  }
  return "NO";
}
