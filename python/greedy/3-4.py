# 1이 될 때까지

n, k = map(int, input().split())
result = 0

while True:
    # n이 k로 나누어 떨어지는 수를 target -> target 까지 1씩 빼기
    target = (n // k) * k
    result += (n - target)
    n = target
    # 더이상 나눌 수 없을때 반복문 탈출
    if n < k:
        break
    # k로 나누기
    result += 1
    n //= k

result += (n - 1)
print(result)