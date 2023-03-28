# 왕실의 나이트

x, y = list(input())
x = ord(x) - ord('a') + 1
y = int(y)

steps = [(2, 1), (2, -1), (-2, 1), (-2, -1), (1, 2), (-1, 2), (1, -2), (-1, -2)]

result = 0

for step in steps:
    nx = x + step[0]
    ny = y + step[1]
    if nx < 1 or ny < 1 or nx > 8 or ny > 8:
        continue
    result += 1

print(result)
