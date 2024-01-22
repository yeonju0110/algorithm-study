/**
 * 중복이 없는가:
- 문자열이 주어졌을 때，이 문자열에 같은 문자가 중복되어 등장하는지 확인하는 알고리즘을 작성하라.
- 자료구조를 추가로 사용하지 않고 풀 수 있는 알고리즘 또한 고민하라.
 * 답변:
- ASCII 문자열인지 유니코드 문자열인지 물어 봐야 함 -> ASCII 문자열이라는 가정이 없다면 저장 공간의 크기를 늘려야 할 수도
 */
{
  // 1: 시간 복잡도 O(n^2) / 공간 복잡도 O(n)
  function isUniqueChars(str) {
    let arr = []; // 공간 복잡도 최대 n

    for (const character of str) {
      // n번 반복
      // ⭐️ includes 메서드는 현재 문자가 배열에 이미 존재하는 지 확인 (n번)
      if (arr.includes(character)) {
        return false;
      } else {
        arr.push(character);
      }
    }

    return true;
  }

  // 2: 시간 복잡도 O(n) / 공간 복잡도 O(1)
  function isUniqueChars2(str) {
    if (str.length > 128) {
      return false;
    }

    let char_set = new Array(128).fill(false); // 공간의 크기가 상수로 고정되어 있음
    // n번 반복
    for (let i = 0; i < str.length; i++) {
      let val = str[i].charCodeAt();
      if (char_set[val]) {
        return false;
      }

      char_set[val] = true;
    }

    return true;
  }

  // 3: 문자열 내의 각 문자를 다른 모든 문자와 비교 -> 시간 복잡도: O(n^2) / 공간 복잡도 O(1)
  // 4. 미리 정렬 O(nlogn) 후 인접한 문자가 동일한지 검사 -> 많은 정렬 알고리즘이 공간을 추가로 쓴다는 사실에 주의

  console.log("📍 중복이 없는가");
  console.log(isUniqueChars2("aaa"));
  console.log(isUniqueChars2("abc"));
}

/**
 * 순열 확인:
- 문자열 두 개가 주어졌을 때 이 둘이 서로 순열 관계에 있는지 확 인하는 메서드를 작성하라.
 * 답변:
- 대소문자를 구별해서 따져야 하는지
- 공백을 어떻게 처리해야 하는지 (문자 하나로 취급할지)
 */
{
  // 1: 정렬하기 -> 시간 복잡도 O(nlogn) / 공간 복잡도 (n) -> 최적은 아니지만 실용성이 좋음
  function isPermutations(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    function sortString(str) {
      return [...str].sort().join("");
    }

    return sortString(s) === sortString(t);
  }

  // 2: 문자열에 포함된 문자의 출현 횟수가 같은지 검사하기 -> 시간 복잡도 O(n) / 공간 복잡도 O(1)
  function isPermutations2(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    let letters = new Array(128).fill(0);

    for (let i = 0; i < s.length; i++) {
      let val = s[i].charCodeAt();
      letters[val] += 1;
    }

    for (let i = 0; i < s.length; i++) {
      let val = t[i].charCodeAt();
      letters[val] -= 1;
      if (letters[val] < 0) {
        return false;
      }
    }
    return true;
  }

  console.log("📍 순열 확인");
  console.log(isPermutations2("dog", "god")); // true
  console.log(isPermutations2("dog", "ggd")); // false
}

/**
 * URL화:
- 문자열에 들어 있는 모든 공백을 ‘%20’으로 바꿔 주는 메서드를 작성하라.
- 최종적으로 모든 운자를 다 담을 수 있을 만큼 충분한 공간이 이미확보되어 있으며
- 문자열의 최종 길이가 함께 주어진다고 가정해도 된다
 * 답변:
- 문자열을 뒤에서부터 거꾸 로 편집해 나가기
*/
{
  function replaceSpaces(str) {
    return str.split(" ").join("%20");
  }

  // 정규표현식 사용하기
  function replaceSpaces2(str) {
    return str.replace(/ /g, "%20");
  }

  console.log("📍 URL화");
  console.log(replaceSpaces("Mr John Smith"));
}

/**
 * 회문 순열:
 * 주어진 문자열이 회문 (palindrome)의 순열인지 아닌지 확인하 는 함수를 작성하라.
 * 회문이란 앞으로 읽으나 뒤로 읽으나 같은 단어 혹은 구절을 의미하며,
 * 순열이란 문자열을 재배치하는 것을 뜻한다. 회문이 꼭 사전에 등장하는 단어로 제한될 필요는 없다.
 */
{
  function isPalindrome(str) {
    const formattedStr = [...str].filter((char) => char !== " ").join("");
    const reverseStr = [...formattedStr].reverse().join("");

    return formattedStr === reverseStr;
  }

  console.log("📍 회문 순열");
  console.log(isPalindrome("taco cat"));
  console.log(isPalindrome("abcde"));
}

/**
 * 하나 빼기:
 * 문자열을 편집하는방법에는 세 가지 종류가 있다.
 * 문자삽입，문 자 삭제， 문자 교체. 문자열 두 개가 주어졌을 때，
 * 문자열을 같게 만들기 위 한 편집 횟수가 1회 이내 인지 확인하는 함수를 작성하라.
 */
{
  function oneEditAway(first, second) {
    if (first.length === second.length) {
      return oneEditReplace(first, second);
    } else if (first.length + 1 === second.length) {
      return oneEditInsert(first, second);
    } else if (first.length - 1 === second.length) {
      return oneEditInsert(second, first);
    }
    return false;
  }

  function oneEditReplace(s1, s2) {
    let foundDifference = false;
    for (let i = 0; i < s1.length; i++) {
      if (s1.charAt(i) !== s2.charAt(i)) {
        if (foundDifference) {
          return false;
        }
        foundDifference = true;
      }
    }
    return true;
  }

  function oneEditInsert(s1, s2) {
    let index1 = 0;
    let index2 = 0;
    while (index2 < s2.length && index1 < s1.length) {
      if (s1.charAt(index1) !== s2.charAt(index2)) {
        if (index1 !== index2) {
          return false;
        }
        index2++;
      } else {
        index1++;
        index2++;
      }
    }
    return true;
  }

  console.log("📍 하나 빼기");
  console.log(oneEditAway("pale", "ple"));
  console.log(oneEditAway("pale", "bake"));
}

{
  function oneEditAway(first, second) {
    // 길이 체크
    if (Math.abs(first.length - second.length) > 1) {
      return false;
    }

    // 길이가 짧은 문자열과 긴 문자열 찾기
    let sl = first.length < second.length ? first : second;
    let s2 = first.length < second.length ? second : first;

    let index1 = 0;
    let index2 = 0;
    let foundDifference = false;

    while (index2 < s2.length && index1 < sl.length) {
      if (sl.charAt(index1) !== s2.charAt(index2)) {
        // 반드시 첫 번째로 다른 문자여야 함
        if (foundDifference) {
          return false;
        }
        foundDifference = true;

        // 길이가 같은 경우 교체의 경우 짧은 문자열의 포인터를 증가
        if (sl.length === s2.length) {
          index1++;
        }
      } else {
        index1++; // 동일한 경우 짧은 문자열의 포인터를 증가
      }
      index2++; // 긴 문자열의 포인터는 언제나 증가
    }

    return true;
  }

  console.log("📍 하나 빼기");
  console.log(oneEditAway("pale", "ple"));
  console.log(oneEditAway("pale", "bake"));
}
/**
 * 문자열 압축:
 * 반복되는문자의 개수를세는 방식의 기본적인 운자열 압축 메 서드를 작성하라.
 * 예를 들어 문자열 aabccccaaa를 압축하면 a2blc5a3이 된다.
 * 만약 ‘압축된’ 문자열의 길이가 기존 문자열의 길이보다 길다면 기존 문자열을 반환해야 한다.
 * 문자열은 대소문자 알파뱃(a-z)으로만 이루어져 있다.
 */
{
  function comprehensionString(str) {
    str = [...str];

    let answer = [];
    answer.push(str[0]);
    answer.push(1);

    for (let i = 1; i < str.length; i++) {
      if (str[i] !== answer[answer.length - 2]) {
        answer.push(str[i]);
        answer.push(1);
      } else {
        answer[answer.length - 1] += 1;
      }
    }
    return answer.join("");
  }

  console.log("📍 문자열 압축");
  console.log(comprehensionString("aabcccccaaa"));
}

/**
 * 행렬 회전:
 * 이미지를 표현하는 NXN 행렬이 있다.
 * 이미지의 각 픽셀은 4바 이트로 표현된다.
 * 이때， 이미지를 90도 회전시키는 메서드를 작성하라.
 * 행렬을 추가로 사용하지 않고서도 할 수 있겠는가?
 */
{
  function rotate(matrix) {
    if (matrix.length === 0 || matrix.length !== matrix[0].length) {
      return false;
    }

    const n = matrix.length;

    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
      let first = layer;
      let last = n - 1 - layer;

      for (let i = first; i < last; i++) {
        let offset = i - first;
        let top = matrix[first][i];

        // 왼쪽 • 위쪽
        matrix[first][i] = matrix[last - offset][first];
        // 아래쪽 • 왼쪽
        matrix[last - offset][first] = matrix[last][last - offset];
        // 오른쪽 • 아래쪽
        matrix[last][last - offset] = matrix[i][last];
        // 위쪽 • 오른쪽
        matrix[i][last] = top; // 오른쪽 • 미리 저장해 놓은 top
      }
    }

    return true;
  }

  console.log("📍 행렬 회전");
  console.log(rotate(["1", "1", "1", "1"]));
}

/**
 * 0 행렬:
 * MXN 행 렬의 한 원소가 0일 경우，
 * 해당 원소가 속한 행과 열의 모든 원소를 0으로 설정하는 알고리즘을 작성하라.
 */
{
  function columnArray() {
    //
  }

  console.log("📍 0 행렬");
  console.log(columnArray());
}

/**
 * 문자열 회전:
 * 한 단어가 다른 문자열에 포함되어 있는지 판별하는 i5Sub 5tring이라는 메서드가 있다고 하자.
 * 51과 52의 두 문자열이 주어졌고， 52가 51을 회전시킨 결과인지 판별하고자 한다
 * (가령 ‘waterbottle’은 ‘erbottlewat’ 을 회전시켜 얻을 수 있는 문자열이다).
 * i5Sub5tring 메서드를 한 번만 호출 해서 판별할 수 있는 코드를 작성하라.
 */
{
  function isRotation(s1, s2) {
    const len = s1.length;

    // s1과 s2의 길이가 같고 빈 문자열이 아닌지 확인
    if (len === s2.length && len > 0) {
      // s1과 s1을 합친 결과를 새로운 버퍼에 저장
      const s1s1 = s1 + s1;
      return isSubstring(s1s1, s2);
    }

    return false;
  }

  function isSubstring(s1, s2) {
    // s2가 s1의 부분 문자열인지 확인
    return s1.includes(s2);
  }

  console.log("📍 문자열 회전");
  console.log(isRotation("ㅈㅁ"));
}
