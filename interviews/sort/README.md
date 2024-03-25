## 널리 사용되는 정렬 알고리즘

> **- 많이 나오는 정렬:** 병합 정렬, 퀵 정렬, 버킷 정렬
> **- 그 외:** 삽입 정렬, 계수 정렬

</aside>

### 버블 정렬 | 평균 및 최악 실행 시간: $O(n^2)$, 메모리: O(1)

- **방법:** 옆에 있는 값과 비교해서 더 작은 값을 앞으로 보내기
  - 배열의 첫 원소부터 순차적으로 진행하며, 현재 원소가 그다음 원소의 값보다 크면 두 원소를 바꾸는 작업을 반복
  - 이런 식으로 배열을 계속 살펴보면서 완전히 정렬된 상태가 될 때까지 반복
- **특징:** 뒤에는 계속 최대값이 가게 됨 ⇒ 1회전 수행할때마다 맨 뒤에 자료는 정렬에서 제외됨
- **시간복잡도:** $O(n^2)$
  - 시간복잡도는 선택정렬과 동일
  - But, 실제로는 더 느리게 작동
  - 이유: 선택정렬과 달리 매번 계속해서 자리를 바꾸는 연산을 수행하기 때문
  - 정렬 알고리즘 중 가장 효율성이 떨어지는 알고리즘

### 선택 정렬 | 평균 및 최악 실행 시간: $O(n^2)$, 메모리: O(1)

- **방법:** 가장 작은 걸 선택해서 가장 앞으로 보내기
  - 선형 탐색하며 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾸는 과정을 반복
  - 첫 번째 데이터부터 시작 ⇒ 그 다음에는 두 번째로 작은 원소를 찾은 뒤 앞으로 보내준다.
    ⇒ 이 작업을 모든 원소가 정렬될 때까지 반복
  - 현재 데이터의 상태와 상관없이 무조건 모든 원소를 비교하고 위치를 바꿈
- **시간복잡도:** $O(n^2)$
  - 처리할 데이터 개수가 많은 경우에는 최대한 피해야 하는 시간복잡도

```jsx
let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < arr.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }

  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}
```

### 병합 정렬 | 평균 및 최악 실행 시간: $O(nlogn)$, 메모리: 상황에 따라 다름

- **방법:** 일단 반으로 나누고 나중에 합쳐서 정렬하기
  - 나눈 절반을 정렬할 때도 같은 알고리즘이 사용됨
  - 결국에는 원소 한 개짜리 배열 두 개를 병합하게 됨
  - 이 알고리즘에서는 ‘병합’을 처리하는 것이 가장 복잡함
- **특징:** ‘합치는 순간’에 정렬함
- **장점**
  - 정확히 반씩 나눈다는 점에서 최악의 경우에도 시간복잡도 `NlogN` 을 유지
    - 퀵 정렬이 가진 한계점을 정확히 보안
    - 사실, 평균적으로 딱히 퀵 정렬보다 빠르지는 않음
- **단점**
  - 기존의 데이터를 담을 추가적인 배열 공간 필요 ▶️ 메모리 활용이 비효율적
- **구현: `투포인터 알고리즘`** 이용

```jsx
function mergeArrays(a, b) {
  let p1 = 0,
    p2 = 0,
    p3 = 0;
  const n = a.length,
    m = b.length;
  const c = new Array(n + m);

  while (p1 < n && p2 < m) {
    if (a[p1] <= b[p2]) {
      c[p3++] = a[p1++];
    } else {
      c[p3++] = b[p2++];
    }
  }

  while (p1 < n) {
    c[p3++] = a[p1++];
  }

  while (p2 < m) {
    c[p3++] = b[p2++];
  }

  return c;
}

// 사용 예
const a = [1, 3, 5]; // 첫 번째 정렬된 배열
const b = [2, 4, 6, 8]; // 두 번째 정렬된 배열
const mergedArray = mergeArrays(a, b);
console.log(mergedArray); // 합쳐진 정렬된 배열 출력
```

### 퀵 정렬 | 실행 시간: 평균 O(nlogn), 최악 O(n^2), 메모리: O(logn)

- **방법:** 특정한 값을 기준으로 큰 숫자와 작은 숫자를 서로 교환한 뒤에 배열을 반으로 나눔
  - 무작위로 선정된 한 원소를 사용하여 배열을 분할하는데,
    - 선정된 원소보다 작은 원소들은 앞에, 큰 원소들은 뒤로 보낸다.
    - 배열 분할 작업은 연속된 스왑(swap) 연산을 통해 효율적으로 수행된다.
  - 기준 값 존재 = 피벗
    - 보통 가장 앞에 있는 값으로 설정
- **시간복잡도**
  - 대표적인 빠른 알고리즘
  - 평균속도: NlogN
    - log2N 은 N이 1,000,000 이면 20임 ! wow! 굉장히 작아짐!!
  - 최악: N^2
    - 배열 분할에 사용되는 원소가 중간값, 적어도 중간값에 가까운 값이 되리라는 보장이 없기 때문에, 정렬 알고리즘이 느리게 동작할 수도 있다.
    - 피벗 값에 따라서 편향되게 분할할 가능성이 있다는 점에서 !
      - 병합 정렬은 정확히 반절씩 나눈다는 점에서 최악의 경우에도 NlogN을 보장함
    - ex) 이미 정렬이 되어있는 경우

```jsx
const arr = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; // 피벗은 첫 번째 원소
  const tail = arr.slice(1); // 피벗을 제외한 배열

  const leftSide = tail.filter((x) => x <= pivot); // 분할된 왼쪽 부분
  const rightSide = tail.filter((x) => x > pivot); // 분할된 오른쪽 부분

  // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행 후, 전체 배열 반환
  return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
}

console.log(quickSort(arr));
```

### 기수 정렬 | 실행 시간: 최악의 경우에도 O(kn) 보장

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4406ce73-069b-47bb-81f9-b70b693cdbd6/d0213004-de9a-45ce-8982-e99a55761187/Untitled.png)

- 기수 정렬 알고리즘은 데이터가 정수(다른 형태의 데이터에 대해서도 마찬가지지 만)처럼 유한한 비트로 구성되어 있는 경우에 사용
- 기수 정렬은 각 자릿수를 순회해 나가면서 각 자리의 값에 따라 그룹을 나눈다.
  - 가령 정수 배열이 주어졌다고 하면 처음에는 첫 번째 자릿수를 기준으로 정렬한다.
  - 따라서 첫 자릿수가 0인 수들은 같은 그룹에 속한다.
  - 그런 다음 각 그룹마다 두 번째 자릿수를 기준으로 다시 정렬을 수행한다.
  - 이 작업을 배열 전체가 정렬될 때까지 모든 자릿수에 대해 반복한다.
- 비교 연산을 사용하는 정렬 알고리즘은 평균적으로 O(nlogn)보다 나은 성능을 보일 수 없으나, 기수 정렬의 수행 시간은 O(kn)이 된다.
  - 여기서 n은 정렬 대상 원소의 개수이고, k는 자릿수의 개수이다.

```jsx
function radixSort(arr) {
  const getMax = (arr) => Math.max(...arr);
  const getDigit = (num, pos) =>
    Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
  const digitCount = (num) =>
    num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
  const mostDigits = (arr) => Math.max(...arr.map(digitCount));

  let maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }

  return arr;
}

const arr = [170, 45, 75, 90, 802, 24, 2, 66];

console.log(radixSort(arr));
```

### 탐색 알고리즘

- 탐색 알고리즘 하면 일반적으로 이진 탐색 (binary search)이 떠오른다.
  - 이진 탐색은 정렬된 배열에서 원소 X를 찾고자 할 때 사용
  - X를 중간에 위치한 원소와 비교한 뒤 x가 중간에 위치한 값보다 작다면 배열의 왼쪽 절반을 재탐색 하고, 크다면 배열의 오른쪽 절반을 재탐색
- 이 과정을 X를 찾거나 부분 배열의 크기가 0이 될 때까지 반복
- 이진 탐색에만 집착하지 않기!
  - 어떤 노드를 찾는 탐색 작업에는 이진 트리를 사용할 수도 있고 해시테이블을 사용할 수도 있음
