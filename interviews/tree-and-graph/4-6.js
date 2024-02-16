class TreeNode {
  constructor(value = 0, left = null, right = null, parent = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

/**
 * 후속자:
 * 이진 탐색 트리에서 주어진 노드의 ‘다음’ 노드(중위 후속자(in­ order successor))를 찾는 알고리즘을 작성하라.
 * 각 노드에는 부모 노드를 가리키는 링크가 존재한다고 가정하자.
 *
 * 답안:
 * - 중위 순회: 왼쪽 -> 현재 노드 -> 오른쪽
 * - 주어진 노드의 오른쪽 자식이 존재하는 경우와 존재하지 않는 경우를 구분하여 처리해야 함
 *   1) 오른쪽 자식이 존재하는 경우:
 *       - 주어진 노드의 오른쪽 서브트리에서 가장 작은 값을 갖는 노드가 중위 후속자가 됨
 *          - 즉, 오른쪽 서브트리의 가장 왼쪽 노드를 찾으면 됨
 *   2) 오른쪽 자식이 존재하지 않는 경우:
 *      - 주어진 노드의 부모 노드들을 거슬러 올라가면서, 현재 노드가 부모 노드의 왼쪽 자식이 되는 부모 노드를 찾음
 *      -  이 부모 노드가 중위 후속자가 됨
 */
function findMin(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}

function inorderSuccessor(node) {
  if (!node) return null;

  // 오른쪽 자식이 존재하면, 오른쪽 서브트리에서 가장 작은 노드를 찾음
  if (node.right) {
    return findMin(node.right);
  }

  // 오른쪽 자식이 없으면, 부모 노드들을 탐색하며 현재 노드가 부모의 왼쪽 자식이 되는 지점을 찾음
  let parent = node.parent;
  while (parent && node === parent.right) {
    node = parent;
    parent = parent.parent;
  }
  return parent;
}

{
  // 예시 1: 오른쪽 자식이 있는 경우
  //    20
  //   /  \
  //  10  30
  //      /
  //    25

  const root = new TreeNode(20);
  const node10 = new TreeNode(10, null, null, root);
  const node30 = new TreeNode(30, null, null, root);
  root.left = node10;
  root.right = node30;
  const node25 = new TreeNode(25, null, null, node30);
  node30.left = node25;

  console.log(inorderSuccessor(root).value); // 25
}

{
  // 예시 2: 오른쪽 자식이 없고 부모 노드로 올라가야 하는 경우
  //     20
  //     /
  //    10
  //      \
  //      15
  const root = new TreeNode(20);
  const node10 = new TreeNode(10, null, null, root);
  root.left = node10;
  const node15 = new TreeNode(15, null, null, node10);
  node10.right = node15;

  console.log(inorderSuccessor(node15).value); // 20
}

{
  // 예시 3: 트리의 최대값 노드의 중위 후속자
  //      20
  //     /  \
  //    10  30
  const root = new TreeNode(20);
  const node10 = new TreeNode(10, null, null, root);
  const node30 = new TreeNode(30, null, null, root);
  root.left = node10;
  root.right = node30;

  console.log(inorderSuccessor(node30)); // null
}
