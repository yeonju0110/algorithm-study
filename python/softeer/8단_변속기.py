import sys
input = sys.stdin.readline

nums = list(map(int, input().split()))
n = len(nums)

answer = 'ascending'

for i in range(n-1):
    if nums[i+1] - nums[i] == 1:
        answer = 'ascending'
    elif nums[i+1] - nums[i] == -1:
        answer = 'descending'
    else:
        answer = 'mixed'
        break
        
print(answer)

# 다양한 방법으로 풀 수 있는 문제같다.
# 정렬로도 풀 수 있고, 배열을 직접 비교해줘도 된다.