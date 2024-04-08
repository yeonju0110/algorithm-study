/**
 * 문제: https://leetcode.com/problems/linked-list-cycle
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 1. Hash Table 이용
- 시간 복잡도: O(n) — Each node is visited once.
- 공간 복잡도: O(n) — To store visited nodes.
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle1 = function (head) {
  let visited_nodes = new Set();
  let current_node = head;
  while (current_node != null) {
    if (visited_nodes.has(current_node)) {
      return true;
    }
    visited_nodes.add(current_node);
    current_node = current_node.next;
  }
  return false;
};

/**
 * 2. Two Pointer 이용 (Floyd's Cycle-Finding Algorithm)
- runner 기법
- 시간 복잡도: O(n) — In the worst-case scenario, each node is visited once.
- 공간 복잡도: O(1) — Constant space is used.
 */
const hasCycle2 = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
