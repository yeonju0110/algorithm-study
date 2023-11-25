/**
 * 속성
 */
{
  const arr = [1, 2, 3];
  arr.length; // 길이
}

/**
 * 메서드
 */
{
  const arr = [1, 2, 3];
  arr.push(4); // 뒤에 삽입
  arr.pop(4); // 삭제
  arr.unshift(4); // 앞에 삽입 ⭐️
  arr.shift(4); // 앞에 제거 ⭐️
  // note!! shift, unshift are slower than pop, push
}

/**
 * splice
 */
{
  fruits.push("🍑", "🍋");
  console.log(fruits); // '🍎', '🍌', '🍓', '🍑', '🍋'
  fruits.splice(1, 1); // index1부터 1개 삭제
  console.log(fruits); // '🍎', '🍓', '🍑', '🍋'
  fruits.splice(1, 1, "🍏", "🍉"); // 0으로 하면 지우지 않고 추가만 가능
  console.log(fruits); // '🍎', '🍏', '🍉', '🍑', '🍋'
}

/**
 * combine
 */
{
  const fruits2 = ["🍐", "🥥"];
  const newFruits = fruits.concat(fruits2);
  console.log(newFruits); // '🍎', '🍏', '🍉', '🍑', '🍋', '🍐', '🥥'
}

/**
 * forEach
 */
{
  let a = [10, 11, 12, 13, 14, 15];
  a.forEach(
    function (v, i) {
      console.log(v, i, this);
    },
    [1, 2]
  );
  // 출력:
  // 10 0 [1,2] \n 11 1 [1,2] \n 12 2 [1,2] \ 13 3 [1,2] \ 14 4 \ 15 5
}

/**
 * sort
 */
{
  arr.sort(); // ascii 코드 순이라서, 10 11 2 3 순으로 정렬됨
  arr.sort((a, b) => a - b); // 오름차순
  arr.sort((a, b) => b - a); // 내림차순
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
}

/**
 * 원하는 길이/값으로 배열 초기화
 */
{
  let visited = new Array(8).fill(0); // 1차원
  const arr1 = Array.from(Array(5), () => new Array(2)); // 2차원
}

/**
 * searching
 */
{
  console.log(fruits); // '🍎', '🍏', '🍉', '🍑', '🍋', '🍎'
  console.log(fruits.indexOf("🍎")); // 0: 제일 첫번째로 해당하는 값을 만나면
  console.log(fruits.indexOf("🥥")); // -1: 해당하는 값 없음

  console.log(fruits.lastIndexOf("🍎")); // 5: 제일 마지막에 나오는 값
  console.log(fruits.includes("🍎")); // true
}

/**
 * 전체 멤버를 number로 변경
 */
{
  const [n, k] = array.map(Number);
}
