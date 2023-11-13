function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

function permutations(arr, path, visited, answers) {
  const num = Number(path.join(""));

  if (isPrime(num)) {
    answers.push(num);
  }

  arr.forEach((a, idx) => {
    if (visited[idx]) {
      return;
    }

    path.push(a);
    visited[idx] = 1;
    permutations(arr, path, visited, answers);
    path.pop();
    visited[idx] = 0;
  });
}

function solution(numbers) {
  numbers = [...numbers];
  let visited = new Array(numbers.length).fill(0);
  let answers = [];

  permutations([...numbers], [], visited, answers);

  return new Set(answers).size;
}
