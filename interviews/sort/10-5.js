function search(strings, str, first, last) {
  if (first > last) {
    return -1;
  }

  let mid = Math.floor((last + first) / 2);

  // mid가 비어 있으면, 가장 가까운 비어 있지 않은 문자열을 찾음
  while (strings[mid] === "" && mid < strings.length) {
    let left = mid - 1;
    let right = mid + 1;

    if (left < first && right > last) {
      return -1; // 양쪽 모두 비어 있으면 탐색 종료
    }

    if (right <= last && strings[right] !== "") {
      mid = right;
      break;
    } else if (left >= first && strings[left] !== "") {
      mid = left;
      break;
    }

    right++;
    left--;
  }

  // 문자열을 확인한 뒤, 필요하면 재귀 호출 수행
  if (str === strings[mid]) {
    // 찾았다!
    return mid;
  } else if (strings[mid] < str) {
    // 오른쪽 탐색
    return search(strings, str, mid + 1, last);
  } else {
    // 왼쪽 탐색
    return search(strings, str, first, mid - 1);
  }
}

function searchString(strings, str) {
  if (!strings || !str || str === "") {
    return -1;
  }
  return search(strings, str, 0, strings.length - 1);
}

// 예시 사용
const strings = [
  "at",
  "",
  "",
  "",
  "ball",
  "",
  "",
  "car",
  "",
  "",
  "dad",
  "",
  "",
];
const str = "ball";
console.log(searchString(strings, str)); // 'ball'의 인덱스 출력, 배열에 따라 달라질 수 있음
