/**
 * 첫 번째 공통조상:
 * 이진트리에서 노드 두개가 주어졌을 때 이 두 노드의 첫 번째 공통 조상을 찾는 알고리즘을 설계하고 그 코드를 작성하라.
 * 자료구조 내에 추가로 노드를 저장해 두면 안 된다. 반드시 이진 탐색 트리일 필요는 없다.
 */
function findFirstCommonAncestor(root, node1, node2) {
  if (!root || root === node1 || root === node2) {
    return root;
  }

  const left = findFirstCommonAncestor(root.left, node1, node2);
  const right = findFirstCommonAncestor(root.right, node1, node2);

  if (left && right) {
    // 두 노드가 현재 루트의 양쪽 서브트리에 위치해 있다면, 현재 루트가 첫 번째 공통 조상입니다.
    return root;
  }

  // 두 노드가 한쪽 서브트리에만 위치한다면, 그 서브트리에서 첫 번째 공통 조상을 반환합니다.
  return left ? left : right;
}
