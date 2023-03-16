// 중복단어제거

function solution1(arr) {
  let answer = [];

  for (let x of arr) {
    if (!answer.includes(x)) answer.push(x);
  }

  return answer;
}

function solution2(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) answer.push(arr[i]);
  }
  return answer;
}

function solution3(arr) {
  let answer;

  answer = arr.filter((word, i) => arr.indexOf(word) === i);

  return answer;
}

console.log(solution3(["good", "time", "good", "time", "student"]));
