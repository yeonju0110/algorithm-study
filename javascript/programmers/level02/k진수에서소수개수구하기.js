/**
 * 문제: https://school.programmers.co.kr/learn/courses/30/lessons/92335
 * 시간은 좀 걸렸지만 품
 */
function convert10toK(n, k) {
  let kn = [];

  while (n) {
    const rest = n % k;
    const quotient = Math.floor(n / k);
    n = quotient;
    kn.unshift(rest);
  }

  return kn;
}

function getPermutations(kn) {
  let permutations = [];
  let current = [];

  for (let i = 0; i < kn.length; i++) {
    // 0일 경우
    if (!kn[i]) {
      if (current.length) {
        permutations.push(current);
      }
      current = [];
      continue;
    }

    current.push(kn[i]);

    // 마지막 원소일 경우
    if (i === kn.length - 1) {
      permutations.push(current);
    }
  }
  return permutations;
}

function isPrime(n) {
  n = Number(n.join(""));

  if (n === 1) {
    return false;
  }

  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(n, k) {
  // 1. 10 -> k진수로 변환
  const kn = convert10toK(n, k);

  // 2. 가능한 순열 만들기
  const permutations = getPermutations(kn);

  // 3. 소수 확인
  let result = 0;
  permutations.forEach((num) => {
    if (isPrime(num)) {
      result += 1;
    }
  });

  return result;
}
