class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * 최소 트리:
 * 오름차순으로 정렬된 배열이 있다. 이 배열 안에 들어 있는 원소는 정수이며
 * 중복된 값이 없다고 했을 때 높이가 최소가 되는 이진 탐색 트리를 만드는 알고리즘을 작성하라.
 *
 * 답안:
 * - 배열의 중간 값을 트리의 루트로 하여, 중간 값을 기준으로 좌우를 나누어 서브트리를 구성하는 방식으로 트리를 만듬
 * - 이 과정을 재귀적으로 반복하면 높이가 최소인 이진 탐색 트리를 만들 수 있음
 */
function createMinimalBST(nums) {
  if (nums.length === 0) {
    return null;
  }

  // 중간 인덱스를 찾아 루트 노드를 생성
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  // 배열의 왼쪽 부분으로 왼쪽 서브트리를,
  // 오른쪽 부분으로 오른쪽 서브트리를 재귀적으로 생성
  root.left = createMinimalBST(nums.slice(0, mid));
  root.right = createMinimalBST(nums.slice(mid + 1));

  return root;
}

{
  // EX
  const result = createMinimalBST([1, 2, 3, 4, 5, 6, 7]);
  console.log(result);

  //    4
  //   / \
  //  2   6
  // / \ / \
  // 1  3 5  7
}
