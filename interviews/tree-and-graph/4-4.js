class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * 균형 확인:
 * 이진 트리가 균형 잡혀있는지 확인하는 함수를 작성하라.
 * 이 문제에서 균형 잡힌 트리란 모든노드에 대해서 왼쪽 부분 트리의 높이와
 * 오른쪽 부분트리의 높이의 차이가 최대 하나인 트리를 의미한다.
 *
 * 답안:
 * - 각 노드에 대해 왼쪽 부분 트리와 오른쪽 부분 트리의 높이를 계산하고,
 * - 이 두 높이의 차이가 최대 1이 되는지 확인해야 함
 */
function isBalanced(root) {
  return checkHeight(root) !== -1;
}

function checkHeight(node) {
  if (node === null) {
    return 0; // 빈 트리의 높이는 0
  }

  // 왼쪽 부분 트리의 높이 확인
  let leftHeight = checkHeight(node.left);
  if (leftHeight === -1) {
    return -1; // 왼쪽 부분 트리가 균형이 깨졌다면 바로 -1 반환
  }

  // 오른쪽 부분 트리의 높이 확인
  let rightHeight = checkHeight(node.right);
  if (rightHeight === -1) {
    return -1; // 오른쪽 부분 트리가 균형이 깨졌다면 바로 -1 반환
  }

  // 왼쪽과 오른쪽 부분 트리의 높이 차이 확인
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1; // 높이 차이가 1보다 크면 -1 반환
  }

  // 현재 노드를 포함하여 트리의 높이 반환
  return Math.max(leftHeight, rightHeight) + 1;
}

{
  // 예시1: 균형 잡힌 트리
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  //    1
  //   / \
  //  2   3
  // / \ / \
  // 4  5 6  7

  console.log(isBalanced(root)); // true
  // checkHeight(1) 호출:
  //  checkHeight(2) 호출:
  //      checkHeight(4) 호출: 리프 노드이므로 0 + 1 = 1 반환
  //      checkHeight(5) 호출: 리프 노드이므로 0 + 1 = 1 반환
  //      왼쪽과 오른쪽 높이의 차이가 0이므로 균형 잡힘, 1 + 1 = 2 반환
  //  checkHeight(3) 호출:
  //      checkHeight(6) 호출: 리프 노드이므로 0 + 1 = 1 반환
  //      checkHeight(7) 호출: 리프 노드이므로 0 + 1 = 1 반환
  //      왼쪽과 오른쪽 높이의 차이가 0이므로 균형 잡힘, 1 + 1 = 2 반환
  //  루트의 왼쪽과 오른쪽 높이의 차이가 0이므로 균형 잡힘, 2 + 1 = 3 반환
}

{
  // 예시2: 균형이 약간 깨진 트리
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.left.left.left = new TreeNode(8);

  console.log(isBalanced(root)); // true
}

{
  // 예시3: 균형 깨진 트리
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.left.left = new TreeNode(4);

  console.log(isBalanced(root)); // false
}
