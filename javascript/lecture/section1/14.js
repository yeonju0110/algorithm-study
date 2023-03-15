// 가장 긴 문자열

function solution1(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
}

function solution2(arr) {
  let answer;

  let lengths = arr.map((str) => str.length);
  let max = Math.max(...lengths);
  answer = arr.filter((str) => str.length === max)[0];

  return answer;
}

console.log(solution2(["teacher", "time", "student", "beautiful", "good"]));
