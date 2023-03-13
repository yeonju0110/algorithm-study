// 최솟값 구하기

function solution1(arr) {
  return Math.min(...arr);
}

function solution2(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
}

function solution3(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
}

function solution4(arr) {
  return Math.min.apply(null, arr);
}
