# 문제: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

from typing import List

class Solution:
    def findMin(self, nums: List[int]) -> int:
        start = 0
        end = len(nums) - 1

        while start < end:
            mid = (start + end) // 2

            if nums[mid] > nums[end]:
                start = mid + 1
            else:
                end = mid

        return nums[start]
    
# 1, 2, 3, 4, 5  o

# mid와 end값 비교
# 2, 3, 4, 5, 1 : 4 > 1 -> 오른쪽 탐색
# 3, 4, 5, 1, 2 : 5 > 2 -> 오른쪽 탐색

# 4, 5, 1, 2, 3 : 1 < 3 -> 왼쪽 탐색
# 5, 1, 2, 3, 4 : 2 < 4 -> 왼쪽 탐색