/**
 * 문제: https://www.acmicpc.net/problem/9081
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = input[0];
const words = input.slice(1);

function findLowIndex(word) {
  for (let k = word.length - 1; k >= 1; k--) {
    if (word[k] > word[k - 1]) {
      return k - 1;
    }
  }
  return -1;
}

function findChangedAlphabet(currentAlphabet, searchWord) {
  const sortedSearchWord = [...searchWord].sort();
  for (let k = 0; k < sortedSearchWord.length; k++) {
    if (currentAlphabet < sortedSearchWord[k]) {
      return sortedSearchWord[k];
    }
  }
  return null;
}

for (let i = 0; i < t; i++) {
  const word = words[i];
  let lowIndex = findLowIndex(word);

  if (lowIndex === -1) {
    console.log(word);
    continue;
  }

  const currentAlphabet = word[lowIndex];
  const searchWord = word.slice(lowIndex + 1);
  const changedAlphabet = findChangedAlphabet(currentAlphabet, searchWord);

  let sortedSearchWord = [...searchWord].sort((a, b) => (a > b ? 1 : -1));

  const removedIdx = sortedSearchWord.indexOf(changedAlphabet);
  if (removedIdx > -1) {
    sortedSearchWord.splice(removedIdx, 1);
  }

  sortedSearchWord.push(currentAlphabet);

  const sortedWord = [...sortedSearchWord].sort((a, b) => (a > b ? 1 : -1));

  console.log(word.slice(0, lowIndex) + changedAlphabet + sortedWord.join(""));
}
