/**
 * Array 속성
 */
{
  const arr = [1, 2, 3];
  arr.length; // 길이
}

/**
 * Array 메서드
 */
{
  const arr = [1, 2, 3];
  arr.push(4); // 뒤에 삽입
  arr.unshift(4); // 앞에 삽입 ⭐️
  arr.pop(4); // 삭제
}

/**
 * 원하는 길이/값으로 배열 초기화
 */
{
  let visited = new Array(8).fill(0); // 1차원
  const arr1 = Array.from(Array(5), () => new Array(2)); // 2차원
}

/**
 * 최솟값, 최댓값
 */
{
  // 상수 선언
  min = Number.MAX_SAFE_INTEGER; // 최솟값 구하기
  max = Number.MIN_SAFE_INTEGER; // 최댓값 구하기

  // 메서드
  Math.max(width, height);
  Math.max(...arr);
}

/**
 * set
 */
{
  const set = new Set([1, 2]);
  set.size; // 길이
}