# 문제: https://leetcode.com/problems/linked-list-cycle-ii
from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# 풀이 1 -> 공간 복잡도 O(n)
class Solution1:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        visited_nodes = set()
        current_node = head

        while current_node:
            if current_node in visited_nodes:
                return current_node
            visited_nodes.add(current_node)
            current_node = current_node.next
        
        return None
    
# 풀이 2 -> 공간 복잡도 O(1)
class Solution2:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                slow = head
                while slow != fast:
                    slow = slow.next
                    fast = fast.next
                return slow

        return None
    
# 🤔 왜 slow.next, fast.next가 무한루프가 안되고 만나는가???
# 리스트 시작부터 순환 시작까지의 거리를 a, 순환 시작부터 포인터가 만나는 지점까지의 거리를 b, 그 지점부터 다시 순환 시작까지의 거리를 c라고 합시다.
# 느린 포인터는 a + b 거리를 이동하고, 빠른 포인터는 a + b + c + b 거리를 이동했습니다 (빠른 포인터는 느린 포인터보다 두 배 빨리 움직이므로).
# 여기서 a + b + c + b = 2(a + b)라는 방정식을 얻을 수 있으며, 이를 정리하면 a = c가 됩니다.
# 따라서 느린 포인터가 리스트 시작에서 출발하여 a만큼 이동하고, 빠른 포인터가 만난 지점에서 출발하여 c만큼 이동하면, 두 포인터는 순환의 시작 지점에서 만나게 됩니다.