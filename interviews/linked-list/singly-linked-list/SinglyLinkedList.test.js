import { SinglyLinkedList } from "./SinglyLinkedList";

describe("SinglyLinkedList", () => {
  test("append and print", () => {
    const list = new SinglyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.print()).toBe("1 -> 2 -> 3 -> null");
  });

  test("remove", () => {
    const list = new SinglyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.remove(2);
    expect(list.print()).toBe("1 -> 3 -> null");
  });
});
