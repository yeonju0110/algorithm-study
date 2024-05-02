import sys

input = sys.stdin.readline

def read_string():
    return input().rstrip()

def read_int():
    return int(input())

def main():
    n = read_int()

    for _ in range(n):
        ps = read_string()
        
        stk = []
        isVPS = True

        for s in ps:
            if s == '(':
                stk.append(s)
            else:
                if stk:
                    stk.pop()
                else:
                    isVPS = False
                    break
        
        if stk:
            isVPS = False
            
        print('YES' if isVPS else 'NO')

    return

if __name__ == "__main__":
    main()
