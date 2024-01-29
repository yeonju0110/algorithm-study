import { SinglyLinkedList } from "./SinglyLinkedList";

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
});
