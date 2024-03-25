/**
 * 풀이 1: O(nlogn)
 */
{
  function sortValleyPeak(arr) {
    // 배열을 오름차순으로 정렬
    arr.sort((a, b) => a - b);

    // 짝수 인덱스에서 시작해서 각 짝수 위치에 있는 원소와 바로 다음 원소를 바꿈
    for (let i = 1; i < arr.length; i += 2) {
      // 현재 원소와 다음 원소를 교환
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }

    return arr;
  }

  const arr = [5, 3, 1, 2, 3];
  console.log(sortValleyPeak(arr)); // [2, 1, 3, 3, 5]
}

/**
 * 풀이 2: O(n)
 */
{
  function sortValleyPeak(array) {
    for (let i = 1; i < array.length; i += 2) {
      let biggestIndex = maxIndex(array, i - 1, i, i + 1);
      if (i !== biggestIndex) {
        swap(array, i, biggestIndex);
      }
    }
  }

  function maxIndex(array, a, b, c) {
    let len = array.length;
    let aValue = a >= 0 && a < len ? array[a] : Number.MIN_SAFE_INTEGER;
    let bValue = b >= 0 && b < len ? array[b] : Number.MIN_SAFE_INTEGER;
    let cValue = c >= 0 && c < len ? array[c] : Number.MIN_SAFE_INTEGER;

    let max = Math.max(aValue, Math.max(bValue, cValue));
    if (aValue === max) return a;
    else if (bValue === max) return b;
    else return c;
  }

  function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }

  // 예시 사용
  let array = [0, 1, 4, 7, 8, 9];
  sortValleyPeak(array);
  console.log(array); // 배열이 "valley"와 "peak" 형태로 재정렬됨
}
