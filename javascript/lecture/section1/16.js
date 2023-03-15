// 중복문자제거

function solution1(str) {
  let answer;
  let arr = str.split("");
  let set = new Set(arr);
  answer = [...set].join("");

  return answer;
}

function solution2(str) {
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }

  return answer;
}

function solution3(str) {
  let answer = "";

  for (let x of str) {
    if (!answer.includes(x)) answer += x;
  }

  return answer;
}
console.log(solution1("ksetkset"));
