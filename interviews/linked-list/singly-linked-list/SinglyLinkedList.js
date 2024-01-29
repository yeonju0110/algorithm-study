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

  /**
   * 중복 없애기: O(N)
   * 각 노드를 순회하면서 발견된 원소의 값을 저장하는 해시 테이블(또는 자바스크립트 객체) 사용
   * 이미 저장된 값이 다시 나타나면 해당 노드를 리스트에서 제거
   */
  removeDuplicates() {
    let current = this.head;
    let previous = null;
    let values = {}; // 해시 테이블로 사용될 객체

    while (current) {
      if (values[current.data]) {
        // 중복 발견, 이전 노드의 next를 현재 노드의 next로 변경
        previous.next = current.next;
      } else {
        // 중복이 아닌 경우, 값을 저장하고 이전 노드를 업데이트
        values[current.data] = true;
        previous = current;
      }
      current = current.next;
    }
  }
}
