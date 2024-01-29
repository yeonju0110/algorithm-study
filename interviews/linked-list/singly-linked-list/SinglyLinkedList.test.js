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
});
