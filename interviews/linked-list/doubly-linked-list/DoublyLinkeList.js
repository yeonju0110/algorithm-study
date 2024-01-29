class DoublyListNode {
  constructor(data) {
    this.data = data;
    this.next = null; // 다음 노드를 가리키는 포인터
    this.prev = null; // 이전 노드를 가리키는 포인터
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null; // 리스트의 시작 노드
    this.tail = null; // 리스트의 마지막 노드
  }

  // 리스트의 마지막에 새 노드 추가
  append(data) {
    const newNode = new DoublyListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  // 리스트에서 데이터 삭제
  remove(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        return true; // 데이터 삭제 성공
      }

      current = current.next;
    }

    return false; // 삭제할 데이터가 리스트에 없음
  }

  // 리스트 출력
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }

    return result + "null";
  }

  /**
   * 중복 없애기: O(N)
   * 각 노드를 순회하면서 발견된 원소의 값을 저장하는 해시 테이블(또는 자바스크립트 객체) 사용
   * 이미 저장된 값이 다시 나타나면 해당 노드를 리스트에서 제거
   */
  removeDuplicates() {
    const values = {}; // 해시 테이블로 사용될 객체
    let current = this.head;

    while (current) {
      if (values[current.data]) {
        // 중복된 노드 발견
        const nextNode = current.next;

        if (current.prev) {
          current.prev.next = nextNode;
        } else {
          // 현재 노드가 head일 경우
          this.head = nextNode;
        }

        if (nextNode) {
          nextNode.prev = current.prev;
        } else {
          // 현재 노드가 tail일 경우
          this.tail = current.prev;
        }
      } else {
        // 중복되지 않은 경우, 값을 저장
        values[current.data] = true;
      }
      current = current.next;
    }
  }

  /**
   * 분할:
   * 주어진 값 x를 기준으로 노드 재배치
   * @param {number} x
   */
  partition(x) {
    let current = this.head;
    let newHead = null;
    let newTail = null;

    while (current) {
      const nextNode = current.next; // 현재 노드의 다음 노드 저장
      current.next = null; // 현재 노드의 next와 prev를 초기화
      current.prev = null;

      if (current.data < x) {
        // x보다 작은 노드는 새로운 헤드의 앞에 추가
        if (!newHead) {
          newHead = current;
          newTail = current;
        } else {
          current.next = newHead;
          newHead.prev = current;
          newHead = current;
        }
      } else {
        // x보다 크거나 같은 노드는 새로운 테일의 뒤에 추가
        if (!newTail) {
          newHead = current;
          newTail = current;
        } else {
          newTail.next = current;
          current.prev = newTail;
          newTail = current;
        }
      }

      current = nextNode;
    }

    this.head = newHead;
    this.tail = newTail;
  }
}
