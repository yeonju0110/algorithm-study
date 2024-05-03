/**
 * 합의 경로:
 * 각 노드의 값이 정수(음수 및 양수)인 이진트리가 있다.
 * 이때 정수의 합이 특정 값이 되도록 하는 경로의 개수를 세려고 한다.
 * 경로가 꼭 루트에서 시작해서 말단 노드에서 끝날 필요는 없지만 반드시 아래로 내려가야 한다.
 * 즉，부모 노드에서 자식 노드로만 움직일 수 있다. 알고리즘을 어떻게 설계할것인가?
 *
 * 풀이:
 * - 재귀적으로 각 노드를 방문하면서, 현재 노드를 경로의 시작으로 하는 모든 가능한 경로를 탐색하고,
 *   주어진 합과 일치하는 경로의 수를 세기
 */
function countPathsWithSum(root, targetSum) {
  if (root === null) {
    return 0;
  }

  // 현재 노드에서 시작하는 경로 중, 합이 targetSum이 되는 경로의 수
  const pathsFromRoot = countPathsFromNode(root, targetSum, 0);

  // 왼쪽과 오른쪽 자식 노드에서 시작하는 경로를 재귀적으로 탐색
  const pathsOnLeft = countPathsWithSum(root.left, targetSum);
  const pathsOnRight = countPathsWithSum(root.right, targetSum);

  // 현재 노드를 포함하는 경로와 포함하지 않는 경로의 합
  return pathsFromRoot + pathsOnLeft + pathsOnRight;
}

function countPathsFromNode(node, targetSum, currentSum) {
  if (node === null) return 0;

  currentSum += node.value;

  let totalPaths = 0;
  if (currentSum === targetSum) {
    // 현재 경로의 합이 목표 합과 일치하는 경우
    totalPaths++;
  }

  // 현재 노드의 왼쪽과 오른쪽 자식을 따라 내려가며 경로 탐색
  totalPaths += countPathsFromNode(node.left, targetSum, currentSum);
  totalPaths += countPathsFromNode(node.right, targetSum, currentSum);

  return totalPaths;
}

{
  // 예제
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  // 예제 트리 구성 및 테스트
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(-3);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(2);
  root.right.right = new TreeNode(11);
  root.left.left.left = new TreeNode(3);
  root.left.left.right = new TreeNode(-2);
  root.left.right.right = new TreeNode(1);

  const targetSum = 8;
  console.log(countPathsWithSum(root, targetSum)); // 주어진 합을 만족하는 경로의 수 출력
}
