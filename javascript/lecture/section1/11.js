// 대문자 찾기

function solution1(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    const num = str.charCodeAt(i);
    if (num >= 65 && num <= 90) cnt++;
  }

  return cnt;
}

function solution2(str) {
  let cnt = 0;
  for (let x of str) {
    const num = x.charCodeAt();
    if (num >= 65 && num <= 90) cnt++;
  }

  return cnt;
}

function solution3(str) {
  let cnt = 0;
  for (let x of str) {
    if (x === x.toUpperCase()) cnt++;
  }

  return cnt;
}

// TODO: 정규표현식으로 해보기
