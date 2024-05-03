/**
 * 하위 트리 확인:
 * 두 개의 커다란 이진 트리 T1과 T2가 있다고 하자.
 * T1이 T2 보다 훨씬 크다고 했을 때， T2가 T1의 하위 트리 (subtree)인지 판별승}는 알고리즘을 만들라.
 * T1 안에 있는 노드 n의 하위 트리가 T2와 동일하면, T2는 T1의 하위트리다.
 * 다시말해，T1에서 노드 n의 아래쪽을 끊어냈을때 그 결과가 T2와 동일해야 한다.
 *
 * 풀이:
 * - 첫 번째 단계: T1에서 T2의 루트와 일치하는 노드를 찾음
 * - 두 번째 단계: 해당 노드를 루트로 하는 T1의 하위 트리와 T2가 구조적으로 동일한지 확인
 */
function isSubtree(T1, T2) {
  // T2가 비어있는 트리인 경우, 항상 T1의 하위 트리로 간주
  if (T2 === null) {
    return true;
  }

  // T1을 순회하면서 T2의 루트와 일치하는 노드를 찾기
  return searchTree(T1, T2);
}

function searchTree(T1, T2) {
  // T1이 비어있는 경우, T2는 T1의 하위 트리가 될 수 없음
  if (T1 === null) {
    return false;
  }

  // T1의 현재 노드가 T2의 루트와 일치하는 경우, 두 트리의 구조를 비교
  if (T1.value === T2.value && matchTree(T1, T2)) {
    return true;
  }

  // 왼쪽 또는 오른쪽 서브트리에서 T2의 루트와 일치하는 노드를 계속 찾음
  return searchTree(T1.left, T2) || searchTree(T1.right, T2);
}

function matchTree(T1, T2) {
  // T1과 T2가 동시에 비어있는 경우, 구조적으로 동일하다고 간주
  if (T1 === null && T2 === null) {
    return true;
  }

  // T1 또는 T2 중 하나만 비어있거나 값이 다른 경우, 구조적으로 다름
  if (T1 === null || T2 === null || T1.value !== T2.value) {
    return false;
  }

  // 왼쪽과 오른쪽 서브트리가 모두 구조적으로 동일한지 재귀적으로 확인
  return matchTree(T1.left, T2.left) && matchTree(T1.right, T2.right);
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

  const T1 = new Node(1);
  T1.left = new Node(2);
  T1.right = new Node(3);
  T1.left.left = new Node(4);
  T1.left.right = new Node(5);

  const T2 = new Node(2);
  T2.left = new Node(4);
  T2.right = new Node(5);

  console.log(isSubtree(T1, T2)); // true
}
