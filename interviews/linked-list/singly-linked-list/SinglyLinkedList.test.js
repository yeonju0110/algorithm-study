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
});
