/**
 * 문제: https://school.programmers.co.kr/learn/courses/30/lessons/87390
 */

/**
 * 1트: 메모리 초과
 */
{
  function solution(n, left, right) {
    // 1. 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채우기
    let maps = Array.from(new Array(n), () => new Array(n).fill(0));
    for (let i = 1; i <= n; i++) {
      let lastIdx = i - 1;
      for (let x = 0; x <= lastIdx; x++) {
        maps[lastIdx][x] = i;
        maps[x][lastIdx] = i;
      }
    }

    // 2. 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만들기
    let newArrays = [];
    for (let i = 0; i < n; i++) {
      newArrays.push(...maps[i]);
    }

    // 3.  arr[left], arr[left+1], ..., arr[right]만 남기기
    const answer = newArrays.slice(left, right + 1);

    return answer;
  }
}

/**
 * 2트
 */
function solution(n, left, right) {
  // 1. 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채우기
  let maps = Array.from(new Array(n), () => new Array(n).fill(0));
  for (let i = 1; i <= n; i++) {
    let lastIdx = i - 1;
    for (let x = 0; x <= lastIdx; x++) {
      maps[lastIdx][x] = i;
      maps[x][lastIdx] = i;
    }
  }

  // 2. 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만들기
  let newArrays = [];
  const leftRow = Math.floor((left - 1) / n); // 여기를 수정해봄
  const leftColumn = (left - 1) % n;
  const rightRow = Math.floor((right - 1) / n);
  const rightColumn = (right - 1) % n;

  for (let i = leftRow; i <= rightRow; i++) {
    if (i === leftRow) {
      for (let j = leftColumn + 1; j < n; j++) {
        newArrays.push(maps[i][j]);
      }
    } else if (i === rightRow) {
      for (let j = 0; j <= rightColumn + 1; j++) {
        newArrays.push(maps[i][j]);
      }
    } else {
      newArrays.push(...maps[i]);
    }
  }

  return newArrays;
}

/**
 * 3트: 정답 확인
 * ... 시키는 대로 하는 게 아니었다!
 */
{
  function solution(n, left, right) {
    let answer = [];

    for (let i = left; i <= right; i++) {
      const divide = Math.floor(i / n);
      const rest = i % n;

      answer.push(Math.max(divide, rest) + 1);
    }
    return answer;
  }
}
