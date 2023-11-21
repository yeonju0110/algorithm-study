/**
 * 문제: https://school.programmers.co.kr/learn/courses/30/lessons/118666
 * type: 구현
 */

function determineType(A, B) {
  const [typeA, numberA] = A;
  const [typeB, numberB] = B;

  if (numberA > numberB) {
    return typeA;
  } else if (numberB > numberA) {
    return typeB;
  }

  let types = [typeA, typeB];
  types.sort();
  return types[0];
}

function solution(survey, choices) {
  const BASE = 4;
  let personalType = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    const [disagree, agree] = survey[i].split("");
    const answer = choices[i];

    if (answer === BASE) {
      continue;
    }

    if (answer < BASE) {
      personalType[disagree] += BASE - answer;
    } else if (answer > BASE) {
      personalType[agree] += answer - BASE;
    }
  }

  let answer = "";

  const { R, T, C, F, J, M, A, N } = personalType;
  answer += determineType(["R", R], ["T", T]);
  answer += determineType(["C", C], ["F", F]);
  answer += determineType(["J", J], ["M", M]);
  answer += determineType(["A", A], ["N", N]);

  return answer;
}
