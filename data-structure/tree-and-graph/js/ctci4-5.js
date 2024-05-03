class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * BST 검증:
 * 주어진 이진 트리가 이진 탐색 트리인지 확인하는 함수를 작성 하라.
 */
function isValidBST(root) {
  return validate(root, null, null);
}

function validate(node, min, max) {
  // 빈 노드는 BST의 조건을 만족한다고 볼 수 있음
  if (node === null) {
    return true;
  }

  // 현재 노드의 값이 최소값보다 작거나 최대값보다 크면 false 반환
  if (
    (min !== null && node.value <= min) ||
    (max !== null && node.value >= max)
  ) {
    return false;
  }

  // 왼쪽 자식 노드 검사: 현재 노드의 값이 최대값이 됨
  // 오른쪽 자식 노드 검사: 현재 노드의 값이 최소값이 됨
  return (
    validate(node.left, min, node.value) &&
    validate(node.right, node.value, max)
  );
}

{
  // 예시1: 유효한 BST
  const root = new TreeNode(2);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);
  //  2
  // / \
  // 1   3

  console.log(isValidBST(root)); // true

  // 동작과정:
  //  validate(2, null, null)
  //    validate(1, null, 2)를 호출. 1은 이 범위에 속하므로 유효.
  //    validate(3, 2, null)를 호출. 3도 이 범위에 속하므로 유효.
  // => 모든 자식 노드가 유효한 범위 내에 있으므로, 트리는 유효한 BST -> 함수는 true를 반환
}

{
  // 예시2: 유효하지 않은 BST

  const root = new TreeNode(5);
  root.left = new TreeNode(1);
  root.right = new TreeNode(4, new TreeNode(3), new TreeNode(6));
  //     5
  //    / \
  //   1   4
  //      / \
  //     3   6

  console.log(isValidBST(root)); // false

  // 동작과정:
  // validate(5, null, null)
  //  validate(1, null, 5)를 호출. 1은 이 범위에 속하므로 유효
  //  validate(4, 5, null)가 호출.
  //    validate(3, 5, 4)가 호출. 노드 3은 이 범위에 속하지 않으므로, 트리는 유효한 BST가 아님 -> 함수는 false를 반환
}
