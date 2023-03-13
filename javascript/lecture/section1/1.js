// 세 수 중 최솟값

function solution1(x, y, z) {
  let min = Number.MAX_SAFE_INTEGER;
  const arr = [x, y, z];

  for (let x of arr) {
    if (x < min) {
      min = x;
    }
  }
  return min;
}

function solution2(x, y, z) {
  const arr = [x, y, z];
  return Math.min(...arr);
}

function solution3(x, y, z) {
  let answer;
  const arr = [x, y, z];
  answer = arr.reduce((a, b) => {
    return Math.min(a, b);
  });

  return answer;
}

function solution4(x, y, z) {
  let answer;
  const arr = [x, y, z];
  answer = Math.min.apply(null, arr);

  return answer;
}
