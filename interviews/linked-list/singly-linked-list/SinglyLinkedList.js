class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null; // 다음 노드를 가리키는 포인터
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null; // 리스트의 시작 노드
  }

  // 리스트의 마지막에 새 노드 추가
  append(data) {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // 리스트에서 데이터 삭제
  remove(data) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.data === data) {
        if (previous) {
          previous.next = current.next;
        } else {
          this.head = current.next;
        }
        return true; // 데이터 삭제 성공
      }
      previous = current;
      current = current.next;
    }

    return false; // 삭제할 데이터가 리스트에 없음
  }

  // 리스트 출력
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }

    return result + "null";
  }
}
