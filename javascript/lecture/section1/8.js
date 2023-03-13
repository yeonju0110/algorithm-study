// 일곱 난쟁이

function solution1(arr) {
  let ans = [];
  let idx = [];
  let sum = arr.reduce((acc, v) => acc + v, 0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let x = arr[i] + arr[j];
      if (sum - x === 100) {
        idx.push([i, j]);
        break;
      }
    }
  }

  ans = arr.filter((v, i) => {
    return !idx[0].includes(i);
  });

  return ans;
}

function solution2(arr) {
  let ans = arr;
  let sum = arr.reduce((acc, v) => acc + v, 0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        return ans;
      }
    }
  }
}
