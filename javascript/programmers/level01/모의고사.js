function solution(answers) {
  let result = [0, 0, 0];
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  answers.forEach((answer, idx) => {
    students.forEach((student, studentIdx) => {
      if (student[idx % student.length] === answer) {
        result[studentIdx] += 1;
      }
    });
  });

  const maxResult = Math.max(...result);
  const winners = [];

  result.forEach((v, i) => {
    if (v === maxResult) {
      winners.push(i + 1);
    }
  });

  return winners;
}
