// 점수계산

function solution1(arr) {
  let answer = arr[0],
    w = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 1 && arr[i - 1] === 1) w++;
    else w = 1;
    answer += arr[i] * w;
  }

  return answer;
}

function solution2(arr) {
  let answer = 0,
    cnt = 0;

  for (let x of arr) {
    if (x === 1) cnt++;
    else cnt = 0;
    answer += cnt;
  }

  return answer;
}

function solution3(arr) {
  let answer = 0,
    cnt = 0;

  answer = arr.reduce((acc, cur) => {
    if (cur === 1) cnt++;
    else cnt = 0;
    return acc + cnt;
  });

  return answer;
}

console.log(solution3([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
