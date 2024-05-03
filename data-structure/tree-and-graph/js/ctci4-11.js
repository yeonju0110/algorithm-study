/**
 * 임의의 노드:
 * 이진 트리 클래스를 바닥부터 구현하려고 한다.
 * 노드의 삽입, 검색, 삭제뿐만 아니라 임의의 노드를 반환하는 getRandomNode() 메서드도 구현한다.
 * 모든 노드를 같은 확률로 선택해주는 getRandomNode 메서드를 설계하고 구현하라.
 * 또한 나머지 메서드는 어떻게 구현할지 설명하라.
 *
 * 풀이 방법:
 * 각 노드에 대해 왼쪽 서브트리와 오른쪽 서브트리의 노드 수를 저장하는 방식을 사용할 수 있음.
 * 이 정보를 바탕으로, 각 노드가 선택될 확률을 균등하게 만들 수 있음.
 */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.size = 1; // 현재 노드를 루트로 하는 서브트리의 노드 수
  }

  // 노드 삽입
  // 삽입될 값이 현재 노드의 값보다 작거나 같으면 왼쪽 서브트리에, 그렇지 않으면 오른쪽 서브트리에 삽입
  insertInOrder(value) {
    if (value <= this.value) {
      if (this.left === null) {
        this.left = new TreeNode(value);
      } else {
        this.left.insertInOrder(value);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(value);
      } else {
        this.right.insertInOrder(value);
      }
    }
    this.size++;
  }

  // 노드 검색: 주어진 값을 가진 노드를 찾는 메서드
  // 값이 현재 노드의 값과 같으면 현재 노드를 반환하고, 작으면 왼쪽 서브트리에서 찾고, 크면 오른쪽 서브트리에서 찾음
  find(value) {
    if (value === this.value) {
      return this;
    } else if (value < this.value) {
      return this.left !== null ? this.left.find(value) : null;
    } else if (value > this.value) {
      return this.right !== null ? this.right.find(value) : null;
    }
    return null;
  }

  // 임의의 노드 반환
  // 현재 노드의 왼쪽 서브트리 크기를 기반으로 난수를 생성하고,
  // 이 난수를 통해 왼쪽 서브트리, 현재 노드, 오른쪽 서브트리 중에서 하나를 선택
  getRandomNode() {
    const leftSize = this.left === null ? 0 : this.left.size;
    const index = Math.floor(Math.random() * this.size);
    if (index < leftSize) {
      return this.left.getRandomNode();
    } else if (index === leftSize) {
      return this;
    } else {
      return this.right.getRandomNode();
    }
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // 이진 트리에 노드 삽입
  insert(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this.root.insertInOrder(value);
    }
  }

  // 이진 트리에서 노드 검색
  find(value) {
    return this.root !== null ? this.root.find(value) : null;
  }

  // 임의의 노드 반환
  getRandomNode() {
    if (this.root === null) throw new Error("트리가 비어 있습니다.");
    return this.root.getRandomNode();
  }
}
