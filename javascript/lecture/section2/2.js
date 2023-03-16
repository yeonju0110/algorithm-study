// 보이는 학생

function solution1(arr) {
  let answer = 0,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    if (x > max) {
      answer++;
      max = x;
    }
  }

  return answer;
}

function solution2(arr) {
  let answer = 1,
    max = arr[0];

  for (let x of arr) {
    if (x > max) {
      answer++;
      max = x;
    }
  }

  return answer;
}

console.log(solution2([130, 135, 148, 140, 145, 150, 150, 153]));
