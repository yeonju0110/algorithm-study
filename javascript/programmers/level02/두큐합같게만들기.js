/**
 * 문제: https://school.programmers.co.kr/learn/courses/30/lessons/118667
 */

/**
 * 1트: dfs -> 시간 초과
 * 다시 생각해보니 정말 무식하게 풀었다!
 */
{
  function sum(arr) {
    return arr.reduce((v, acc) => v + acc, 0);
  }

  function solution(queue1, queue2) {
    let answer = Number.MAX_SAFE_INTEGER;

    function dfs(q1, q2, total1, total2, n) {
      if (!q1.length || !q2.length || n > queue1.length * 4) {
        return;
      }

      if (total1 === total2) {
        answer = Math.min(answer, n);
        return;
      }

      dfs(q1.slice(1), [...q2, q1[0]], total1 - q1[0], total2 + q1[0], n + 1);
      dfs([...q1, q2[0]], q2.slice(1), total1 + q2[0], total2 - q2[0], n + 1);
    }

    dfs(queue1, queue2, sum(queue1), sum(queue2), 0);

    if (answer === Number.MAX_SAFE_INTEGER) {
      return -1;
    }
    return answer;
  }
}

/**
 * 2트: 투포인터라는 힌트를 받고,,
 */
{
  function sum(arr) {
    return arr.reduce((v, acc) => v + acc, 0);
  }

  function solution(queue1, queue2) {
    const queue = [...queue1, ...queue2];
    const n = queue1.length;

    let sum1 = sum(queue1);
    const sum2 = sum(queue2);

    if (sum1 === sum2) {
      return 0;
    }

    const total_sum = sum1 + sum2;

    if (total_sum % 2 !== 0) {
      return -1;
    }

    const half_sum = total_sum / 2;
    let cnt = 0;
    let left = 0;
    let right = n;

    // 전체 배열의 길이가 2n이므로, 한 포인터 당 최대 2n번의 이동이 필요
    // 따라서, 총 4n만큼의 작업을 수행한 뒤에도 두 큐의 합을 같게 만들지 못했다면 그 이후에는 이미 탐색했던 구간을 다시 탐색하는 것이므로 의미가 없음
    while (cnt <= 4 * n) {
      if (sum1 === half_sum) {
        return cnt;
      }

      if (sum1 > half_sum) {
        sum1 -= queue[left];
        left++;
      } else if (sum1 < half_sum) {
        sum1 += queue[right];
        right++;
      }

      cnt++;
    }

    return -1;
  }
}
