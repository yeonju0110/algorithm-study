/**
 * BST 수열:
 * 배열의 원소를 왼쪽에서부터 차례로 트리에 삽입함으로써 이진 탐색 트리를 생성할 수 있다.
 * 이진 탐색 트리 안에서 원소가 중복되지 않는다고 할 때, 해당 트리를 만들어 낼 수 있는 모든 가능한 배열을 출력하라.
 *
 * 이진 탐색 트리:
 * - 모든 왼쪽 자식들 ≤ n < 모든 오른쪽 자식들’ 인 이진 트리
 *
 * 풀이 방법:
 * - 재귀적 접근 방식
 * 각 노드를 루트로 하는 서브트리에서 가능한 모든 배열을 찾고, 이러한 배열들을 조합하여 최종 배열을 생성
 */

function findAllPossibleArrays(node) {
  if (node === null) {
    return [[]]; // 빈 서브트리의 경우 빈 배열을 반환
  }

  let result = [];

  // 서브트리 탐색: 현재 노드의 왼쪽과 오른쪽 서브트리에 대해 재귀적으로 findAllPossibleArrays 함수를 호출하여,
  // 각 서브트리로부터 생성할 수 있는 모든 가능한 배열을 가져옴.
  const leftSequences = findAllPossibleArrays(node.left);
  const rightSequences = findAllPossibleArrays(node.right);

  // 현재 노드의 값을 포함하는 prefix 배열을 생성합니다. 이 값은 각 조합 배열의 첫 번째 원소가 됨
  const prefix = [node.value];

  // 왼쪽과 오른쪽 서브트리의 배열 조합을 모두 탐색
  for (let left of leftSequences) {
    for (let right of rightSequences) {
      const weaved = [];
      weaveArrays(left, right, weaved, prefix);
      result.push(...weaved);
    }
  }

  return result;
}

// 두 배열을 받아, 이들을 모든 가능한 방식으로 "섞어" 결합하는 역할
function weaveArrays(first, second, results, prefix) {
  // 하나의 배열이 빈 경우, 나머지 배열과 prefix를 합쳐서 결과에 추가
  if (first.length === 0 || second.length === 0) {
    const result = prefix.slice(); // prefix의 복사본을 생성
    result.push(...first, ...second);
    results.push(result);
    return;
  }

  // 두 배열 모두 빈 배열이 아닌 경우,
  // 각 배열에서 원소 하나를 선택하여 prefix에 추가하고, 나머지 배열에 대해 weaveArrays 함수를 재귀적으로 호출

  // 첫 번째 배열에서 원소를 하나 추출하고 재귀 호출
  prefix.push(first.shift());
  weaveArrays(first, second, results, prefix);
  first.unshift(prefix.pop()); // 원소를 다시 첫 번째 배열로 되돌림 -> 다음 재귀 호출에서 원소의 순서를 유지하기 위함

  // 두 번째 배열에서도 동일한 작업 수행
  prefix.push(second.shift());
  weaveArrays(first, second, results, prefix);
  second.unshift(prefix.pop()); // 원소를 다시 두 번째 배열로 되돌림
}

{
  // EX
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  // 트리 구성
  const root = new Node(2);
  root.left = new Node(1);
  root.right = new Node(3);

  // 가능한 모든 배열 찾기
  const allPossibleArrays = findAllPossibleArrays(root);
  console.log(allPossibleArrays);
}
