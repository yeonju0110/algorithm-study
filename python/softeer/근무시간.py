import sys
input = sys.stdin.readline

sum = 0

for i in range(5):
    a, b = input().split()
    h1, m1 = map(int, a.split(':'))
    m1 += h1 * 60
    h2, m2 = map(int, b.split(':'))
    m2 += h2 * 60
    sum += (m2 - m1)

print(sum)