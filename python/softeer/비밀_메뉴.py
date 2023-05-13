import sys
input = sys.stdin.readline

m, n, k = map(int, input().split())
key = "".join(input().split())
user = "".join(input().split())


if key in user:
    print('secret')
else:
    print('normal')

