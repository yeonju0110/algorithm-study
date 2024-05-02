import heapq as hq
import sys

input = sys.stdin.readline

def read_int():
    return int(input())

# 방법 1: 우선순위 큐 + 튜플
def main1():
    n = read_int()
    pq = []

    for _ in range(n):
        x = read_int()

        if x != 0:
            hq.heappush(pq, (abs(x), x))
        else:
            print(hq.heappop(pq)[1] if pq else 0)
    
    return

# 방법 2: 최대힙 + 최소힙 이용
def main2():
    n = read_int()
    min_heap = [] # 양수
    max_heap = [] # 음수

    for _ in range(n):
        x = read_int()

        if x != 0:
            if x > 0:
                hq.heappush(min_heap, x)
            else:
                hq.heappush(max_heap, -x)
        else:
            if min_heap:
                if max_heap:
                    if min_heap[0] < abs(max_heap[0]):
                        print(hq.heappop(min_heap))
                    else:
                        print(-hq.heappop(max_heap))
                else:
                    print(hq.heappop(min_heap))
                    continue
            else:
                if max_heap:
                    print(-hq.heappop(max_heap))
                else:
                    print(0)
    
    return

if __name__ == "__main__":
    main2()
