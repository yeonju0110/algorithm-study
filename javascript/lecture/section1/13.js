// 대소문자 변환

function solution1(str) {
  let answer = "";
  for (let x of str) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }

  return answer;
}

function solution2(str) {
  let answer = "";
  for (let x of str) {
    const num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer += String.fromCharCode(num + 32);
    else answer += String.fromCharCode(num - 32);
  }

  return answer;
}

console.log(solution1("StuDY"));
