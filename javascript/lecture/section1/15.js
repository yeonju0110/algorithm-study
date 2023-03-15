// 가운데 문자 출력

function solution1(str) {
  let answer;
  let l = str.length;
  let mid = Math.floor(l / 2);
  if (l % 2 === 1) answer = str[Math.floor(l / 2)];
  else answer = str[mid - 1] + str[mid];

  return answer;
}

function solution2(str) {
  let answer;
  let l = str.length;
  let mid = Math.floor(l / 2);
  if (l % 2 === 1) answer = str.substring(mid, mid + 1);
  else answer = str.substring(mid - 1, mid + 1);

  return answer;
}

function solution3(str) {
  let answer;
  let l = str.length;
  let mid = Math.floor(l / 2);
  if (l % 2 === 1) answer = str.substr(mid, 1);
  else answer = str.substr(mid - 1, 2);

  return answer;
}

console.log(solution2("study"));
console.log(solution3("good"));
