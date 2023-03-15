// 대문자로 통일

function solution1(str) {
  let answer;
  answer = str.toUpperCase();
  return answer;
}

function solution2(str) {
  let answer = "";
  for (let x of str) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }
  return answer;
}

function solution3(str) {
  let answer = "";
  for (let x of str) {
    const num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}

console.log(solution3("ItisTimeToStudy"));
