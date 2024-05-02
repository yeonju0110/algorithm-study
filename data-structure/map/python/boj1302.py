# 문제: https://www.acmicpc.net/problem/1302

from collections import defaultdict
import sys

input = sys.stdin.readline

def read_string():
    return input().rstrip()

def read_int():
    return int(input())

def main():
    books = defaultdict(int)
    for _ in range(read_int()):
        book_name = read_string()
        books[book_name] += 1

    result = sorted(books.items(), key = lambda x:(-x[1], x[0]))
    print(result[0][0])
    
    return

if __name__ == "__main__":
    main()
