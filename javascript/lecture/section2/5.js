// 등수 구하기

function solution1(arr) {
  let answer = [],
    cnt = 1;

  for (let i = 0; i < arr.length; i++) {
    cnt = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) cnt++;
    }
    answer.push(cnt);
  }
  return answer;
}

function solution2(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
}

console.log(solution2([87, 89, 92, 100, 76]));
console.log(solution2([87, 92, 92, 92, 76]));
