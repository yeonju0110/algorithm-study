// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution1(N, stages) {
  let answer = [];
  let n = 1;
  let cnt = 0;
  let users = stages.length;
  while (n <= N) {
    for (let x of stages) {
      if (x === n) {
        cnt++;
      }
    }
    answer.push({ stage: n, ratio: cnt / users });
    users -= cnt;
    n++;
    cnt = 0;
  }

  answer.sort((a, b) => b.ratio - a.ratio);

  return answer.map((a) => a.stage);
}

function solution2(N, stages) {
  let answer = [];
  let remainUsers = stages.length;

  for (let i = 1; i <= N; i++) {
    let notClear = stages.filter((user) => user === i).length;
    answer.push({ stage: i, ratio: notClear / remainUsers });
    remainUsers -= notClear;
  }

  answer.sort((a, b) => b.ratio - a.ratio);

  return answer.map((a) => a.stage);
}

function solution3(N, stages) {
  let answer = [];
  let remainUsers = stages.length;

  for (let i = 1; i <= N; i++) {
    let notClear = stages.filter((user) => user === i).length;
    answer.push([i, notClear / remainUsers]);
    remainUsers -= notClear;
  }

  answer.sort(([, a], [, b]) => b - a);
  return answer.map(([a, b]) => a);
}
