import { SinglyLinkedList } from "./SinglyLinkedList";

/**
 * 리스트의 합:
 * 두 리스트의 숫자 합을 계산하여 새 리스트로 반환하는 메서드
 * @param {SinglyLinkedList} l1
 * @param {SinglyLinkedList} l2
 */
export function addLists(l1, l2) {
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

/**
 * 교집합
 * @param {SinglyLinkedList} list1
 * @param {SinglyLinkedList} list2
 * @returns
 */
export function findIntersection(list1, list2) {
  if (!list1.head || !list2.head) return null;

  const result1 = list1.getTailAndSize();
  const result2 = list2.getTailAndSize();

  if (result1.tail !== result2.tail) {
    return null;
  }

  let shorter = result1.size < result2.size ? list1 : list2;
  let longer = result1.size < result2.size ? list2 : list1;

  longer = longer.getKthNode(Math.abs(result1.size - result2.size));

  // TODO 오류
  let shorterNode = shorter.head;
  let longerNode = longer.head;

  while (shorterNode !== longerNode && shorterNode && longerNode) {
    shorterNode = shorterNode.next;
    longerNode = longerNode.next;
  }

  return shorterNode;
}

/**
 * 배열과 문자열
 * 연결리스트
 * 스택과 큐
 * 트리와 그래프
 * 비트 조작
 * 수학 및 논리 퍼즐
 * 객체 지향 설계
 * 재귀와 동적 프로그래밍
 * 시스템 설계 및 규모 확장성
 */
