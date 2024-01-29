import { ListNode, SinglyLinkedList } from "./SinglyLinkedList";

describe("SinglyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  test("append and print", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.print()).toBe("1 -> 2 -> 3 -> null");
  });

  test("remove", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.remove(2);
    expect(list.print()).toBe("1 -> 3 -> null");
  });

  test("중복 없애기", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(2);

    list.removeDuplicates();
    expect(list.print()).toBe("1 -> 2 -> 3 -> null");
  });

  test("뒤에서 k번째 원소 구하기", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(2);

    expect(list.findKthToLast(2)).toBe(3);
  });

  test("중간 노드 삭제", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(2);

    const nodeToDelete = list.findNode(3);
    if (nodeToDelete) {
      list.deleteNode(nodeToDelete); // 찾은 노드 삭제
    }

    expect(list.print()).toBe("1 -> 2 -> 2 -> null");
  });

  test("두 리스트의 합", () => {
    const list1 = new SinglyLinkedList();
    list1.append(7);
    list1.append(1);
    list1.append(6);

    const list2 = new SinglyLinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(2);

    const resultList = SinglyLinkedList.addLists(list1, list2);
    expect(resultList.print()).toBe("2 -> 1 -> 9 -> null");
  });

  test("회문이 맞는지 검사", () => {
    list.append(7);
    list.append(1);
    list.append(6);
    list.append(6);
    list.append(1);
    list.append(7);

    expect(list.isPalindrome()).toBe(true);
  });

  test("회문이 아닌지 검사", () => {
    list.append(7);
    list.append(1);
    list.append(6);
    list.append(6);
    list.append(1);
    list.append(1);

    expect(list.isPalindrome()).toBe(false);
  });

  test("두 리스트가 교집합을 가지지 않는 경우", () => {
    const list1 = new SinglyLinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(3);

    const list2 = new SinglyLinkedList();
    list2.append(4);
    list2.append(5);
    list2.append(6);

    const intersection = SinglyLinkedList.findIntersection(list1, list2);
    expect(intersection).toBeNull();
  });

  /*
  test("두 리스트가 교집합을 가지는 경우", () => {
    // 공통 노드 생성
    const commonNode = new ListNode(7);
    commonNode.next = new ListNode(8);

    const list1 = new SinglyLinkedList();
    list1.append(1);
    list1.append(2);
    list1.head.next.next = commonNode; // 공통 노드 연결

    const list2 = new SinglyLinkedList();
    list2.append(4);
    list2.append(5);
    list2.head.next.next = commonNode; // 공통 노드 연결
    const intersection = SinglyLinkedList.findIntersection(list1, list2);

    expect(intersection).toBe(commonNode);
  });
*/

  test("루프 발견", () => {
    const linkedList = new SinglyLinkedList();
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    const node5 = new ListNode(5);

    linkedList.head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node2;

    const cycleStartNode = linkedList.detectCycle();

    expect(cycleStartNode).toBe(node2);
  });
});
