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

  // 데이터 값으로 노드 찾기 메서드
  findNode(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return current; // 데이터와 일치하는 노드 반환
      }
      current = current.next;
    }
    return null; // 해당 데이터 값을 가진 노드가 없을 경우
  }

  // 리스트 길이를 반환하는 메서드
  length() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
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

  /**
   * 뒤에서 k번째 원소 구하기
   * @param {number} k
   */
  findKthToLast(k) {
    let p1 = this.head;
    let p2 = this.head;

    // p1을 k 노드 앞으로 이동
    for (let i = 0; i < k; i++) {
      if (p1 === null) {
        // k가 리스트의 길이보다 큰 경우
        return null;
      }
      p1 = p1.next;
    }

    // p1과 p2를 동시에 움직여, p1이 리스트 끝에 도달했을 때 p2의 위치 확인
    while (p1 !== null) {
      p1 = p1.next;
      p2 = p2.next;
    }

    // p2는 이제 끝에서 k번째 노드를 가리킴
    return p2 ? p2.data : null; // p2가 null이 아니라면 데이터 반환, 그렇지 않으면 null 반환
  }

  /**
   * 중간 노드 삭제
   * 다음 노드의 데이터를 현재 노드에 복사한 다음에， 다음 노드를 지움.
   * @param {ListNode} node
   */
  deleteNode(node) {
    if (node === null || node.next === null) {
      return false; // 삭제할 수 없음
    }

    // 다음 노드의 데이터를 현재 노드에 복사
    node.data = node.next.data;
    // 현재 노드를 다음 노드의 다음 노드로 "건너뛰게" 함
    node.next = node.next.next;
    return true; // 성공적으로 삭제됨
  }

  /**
   * 리스트의 합:
   * 두 리스트의 숫자 합을 계산하여 새 리스트로 반환하는 메서드
   * @param {SinglyLinkedList} l1
   * @param {SinglyLinkedList} l2
   */
  static addLists(l1, l2) {
    let result = new SinglyLinkedList(); // 새로운 리스트를 위한 인스턴스 생성
    let p1 = l1.head;
    let p2 = l2.head;
    let carry = 0;

    while (p1 !== null || p2 !== null || carry > 0) {
      let sum = carry;
      if (p1 !== null) {
        sum += p1.data;
        p1 = p1.next;
      }
      if (p2 !== null) {
        sum += p2.data;
        p2 = p2.next;
      }

      result.append(sum % 10); // 새 노드에 합의 일의 자리 추가
      carry = Math.floor(sum / 10); // 다음 자리수로 넘길 값
    }

    return result; // 새로운 리스트 반환
  }
}
