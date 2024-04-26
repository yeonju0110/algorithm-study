# 문제: https://leetcode.com/problems/kth-largest-element-in-a-stream/description/

import heapq
from typing import List


class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.minHeap = nums
        heapq.heapify(self.minHeap) # ⚠️ heap을 list로 변환한다고 해서 오름차순임을 보장하지 않음!
        while len(self.minHeap) > self.k:
            heapq.heappop(self.minHeap)
        

    def add(self, val: int) -> int:
        heapq.heappush(self.minHeap, val)
        if len(self.minHeap) > self.k:
            heapq.heappop(self.minHeap)
        return self.minHeap[0]