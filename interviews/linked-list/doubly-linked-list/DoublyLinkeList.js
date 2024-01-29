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
}
