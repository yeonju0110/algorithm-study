import sys
input = sys.stdin.readline

A, B = map(int, input().split())

if A > B:
    print('A')
elif A == B:
    print('same')
else:
    print('B')