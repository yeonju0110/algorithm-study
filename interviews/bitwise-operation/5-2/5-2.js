function binaryToString(num) {
  // 1. 먼저 주어진 숫자가 0과 1 사이에 있는지 확인
  if (num >= 1 || num <= 0) {
    return "ERROR";
  }

  // 2. 결과를 저장할 문자열 result를 "."으로 초기화
  let result = "."; // 소수점 아래의 2진수를 표현하기 때문에 문자열은 소수점으로 시작

  // 3. 2진수 변환
  //   각 반복에서 num에 2를 곱하고,
  //   그 결과가 1 이상이면 결과 문자열에 "1"을 추가하고,
  //   1 미만이면 "0"을 추가
  //   이 과정은 숫자가 0이 되거나 결과 문자열의 길이가 32를 초과할 때까지 계속됨
  while (num > 0) {
    // 문자열 길이가 32를 넘으면 종료
    if (result.length >= 32) {
      return "ERROR";
    }

    // 2를 곱해가며 이진수 추출
    let r = num * 2;
    if (r >= 1) {
      result += "1";
      num = r - 1;
    } else {
      result += "0";
      num = r;
    }
  }
  return result;
}

{
  // EX 1.
  console.log(binaryToString(0.5)); // 0.1
  /**
     * 풀이
      - 초기 num 값은 0.5
      - num에 2를 곱하면 1.0이 됨.
          - 결과는 1 이상이므로 결과 문자열에 "1"을 추가하고,
          - num을 1.0 - 1로 업데이트하여 0.0이 됨
      - 이제 num이 0이 되었으므로 변환 과정이 종료
      - 결과 문자열은 ".1"이 되며, 이는 0.5의 정확한 2진수 표현
     */
}

{
  // EX 2.
  console.log(binaryToString(0.72)); // ERROR .1011100001010001111010111000010
  /** 
     * 풀이 결과: ERROR
      - 0.72와 같은 실수는 2진수로 정확하게 표현할 때 무한 반복되는 패턴을 가짐
      - 이 과정은 결코 0에 도달하지 않음
      - 반복되는 패턴으로 인해 결과 문자열의 길이가 계속 증가하게 되고,
              결국 32비트의 길이 제한에 도달하게 됨
     */
}

function binaryToString2(num) {
  // 1. 먼저 주어진 숫자가 0과 1 사이에 있는지 확인
  if (num >= 1 || num <= 0) {
    return "ERROR";
  }

  // 2. 결과를 저장할 문자열 result를 "."으로 초기화
  let binary = "."; // 소수점 아래의 2진수를 표현하기 때문에 문자열은 소수점으로 시작
  let frac = 0.5;

  while (num > 0) {
    // 길이 제한 설정: 문자 단위로 32
    if (binary.length > 32) {
      return "ERROR";
    }

    // 3. 2진수 변환
    //   각 반복에서 num에 2를 곱하고,
    //   그 결과가 1 이상이면 결과 문자열에 "1"을 추가하고,
    //   1 미만이면 "0"을 추가
    //   이 과정은 숫자가 0이 되거나 결과 문자열의 길이가 32를 초과할 때까지 계속됨
    if (num >= frac) {
      binary += "1";
      num -= frac;
    } else {
      binary += "0";
    }

    frac /= 2;
  }

  return binary;
}
