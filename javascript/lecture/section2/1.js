// 큰 수 출력하기

function solution1(arr) {
  let answer = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }

  return answer;
}

console.log(solution1([7, 3, 9, 5, 6, 12]));
