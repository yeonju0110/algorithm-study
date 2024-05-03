class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * 깊이의 리스트:
 * 이진트리가 주어졌을 때 같은 깊이에 있는 노드를 연결리스트로 연결해 주는 알고리즘을 설계하라
 * 즉, 트리의 깊이가 D라면 D개의 연결리스트를 만들어야 한다.
 *
 * 답안:
 * - BFS 사용
 *
 */
function createLevelLinkedList(root) {
  const result = []; // 각 레벨의 연결 리스트를 저장할 배열

  if (!root) {
    return result; // 루트가 null이면 빈 배열 반환
  }

  const queue = [root]; // BFS를 위한 큐, 루트로 시작

  while (queue.length > 0) {
    let levelSize = queue.length; // 현재 레벨의 노드 수
    let currentList = new ListNode(0); // 더미 헤드
    let listTail = currentList; // 연결 리스트의 현재 위치

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift(); // 큐에서 노드 꺼내기

      // 연결 리스트에 노드 추가
      listTail.next = new ListNode(currentNode.value);
      listTail = listTail.next;

      // 왼쪽, 오른쪽 자식 노드가 있으면 큐에 추가
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    result.push(currentList.next); // 더미 헤드를 제외한 연결 리스트를 결과에 추가
  }

  return result; // 각 레벨의 연결 리스트가 담긴 배열 반환
}

{
  // EX1
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  //    1
  //   / \
  //  2   3

  const lists = createLevelLinkedList(root);
  console.log(lists);
  //  첫 번째 리스트: 1
  // 두 번째 리스트: 2 -> 3
}

{
  // EX2
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  //    1
  //   / \
  //  2   3
  // /    \
  // 4    5

  const lists = createLevelLinkedList(root);
  console.log(lists);
  // 첫 번째 리스트: 1
  // 두 번째 리스트: 2 -> 3
  // 세 번째 리스트: 4 -> 5
}
