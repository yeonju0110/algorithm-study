import { DoublyLinkedList } from "./DoublyLinkeList";

describe("DoublyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  test("append and print", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.print()).toBe("1 <-> 2 <-> 3 <-> null");
  });

  test("remove", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.remove(2);
    expect(list.print()).toBe("1 <-> 3 <-> null");
  });

  test("중복 없애기", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(2);

    list.removeDuplicates();
    expect(list.print()).toBe("1 <-> 2 <-> 3 <-> null");
  });

  test("분할", () => {
    list.append(3);
    list.append(5);
    list.append(8);
    list.append(5);
    list.append(10);
    list.append(2);
    list.append(1);

    list.partition(5); // x = 5를 기준으로 재배치

    expect(list.print()).toBe(
      "1 <-> 2 <-> 3 <-> 5 <-> 8 <-> 5 <-> 10 <-> null"
    );
  });
});
