# 문제: https://leetcode.com/problems/linked-list-cycle

from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

'''
1. Hash Table 이용
- 시간 복잡도: O(n) — Each node is visited once.
- 공간 복잡도: O(n) — To store visited nodes.
'''
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        visited_nodes = set()
        current_node = head
        while current_node:
            if current_node in visited_nodes:
                return True
            visited_nodes.add(current_node)
            current_node = current_node.next
        return False

'''
2. Two Pointer 이용 (Floyd's Cycle-Finding Algorithm)
- runner 기법
- 시간 복잡도: O(n) — In the worst-case scenario, each node is visited once.
- 공간 복잡도: O(1) — Constant space is used.
'''
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow_pointer = head
        fast_pointer = head
        while fast_pointer and fast_pointer.next:
            slow_pointer = slow_pointer.next
            fast_pointer = fast_pointer.next.next
            if slow_pointer == fast_pointer:
                return True
        return False