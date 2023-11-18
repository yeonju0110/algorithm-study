/**
 * object ⭐️
 */
{
  //
  const dict = {}; // 생성
  dict[key].history; // 접근 방법 1) 변수일 땐 `[]` 2) 그 자체일 땐 `.`

  // key값 존재 확인 후 추가: true or false
  if (key in dict) {
    dict[key].push("bye");
  } else {
    dict[key] = ["hello"];
  }

  // 제거
  delete dict["fee"]; // 제대로 삭제 되면 true, 아니면 false

  // 반복문
  for (const key in dict) {
    dict[key] += 1;
  }

  // key값
  const keys = Objects.keys(dict); // 가져오기
  const sortedKeys = Objects.keys(dict).sort(); // key값 정렬
  const length = Objects.keys(dict).length(); // dictionary 길이 구하기

  // 복사
  const user2 = Object.assign({}, user);
}

/**
 * Object.entries(obj)
 */
{
  const object1 = {
    a: "apple",
    b: "banana",
    c: "cocoa",
  };

  let [key, value] = Object.entries(object1);
  for (const [key, value] of Object.entries(object1)) {
    console.log(key, value);
  }
}
