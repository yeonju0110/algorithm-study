# 문제: https://www.acmicpc.net/problem/1449

import sys

input = sys.stdin.readline

def read_int_list():
    return list(map(int, input().split()))

def main():
    N, L = read_int_list()
    waters = read_int_list()
    waters.sort()

    cnt = 1
    max_range = waters[0] + L

    for water in waters:
        if max_range <= water:
            cnt += 1
            max_range = water + L
        
    print(cnt)

    return

def main2():
    N, L = read_int_list()
    coord = [False] * 1001
    for i in read_int_list():
        coord[i] = True
    
    ans =  0
    x = 0
    while x < 1001:
        if coord[x]:
            ans += 1
            x += L
        else:
            x += 1

    print(ans)

if __name__ == "__main__":
    main()
