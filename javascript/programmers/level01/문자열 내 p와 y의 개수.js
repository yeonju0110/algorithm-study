// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution1(s) {
  let [np, ny] = [0, 0];
  for (let x of s.toLowerCase()) {
    if (x === "p") np++;
    if (x === "y") ny++;
  }

  return np === ny;
}

function solution2(s) {
  const np = s.toLowerCase().split("p").length - 1;
  const ny = s.toLowerCase().split("y").length - 1;

  return np === ny;
}

function solution3(s) {
  let np = s.match(/p/gi);
  let ny = s.match(/y/gi);

  !!np ? (np = np.length) : (np = 0);
  !!ny ? (ny = ny.length) : (ny = 0);

  return np === ny;
}

function solution4(s) {
  return (s.match(/p/gi) || []).length == (s.match(/y/gi) || []).length;
}
