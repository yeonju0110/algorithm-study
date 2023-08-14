import math

player = list(map(int, input().split()))
[W, R] = player
RM = W * (1 + R/30)
print(math.floor(RM))