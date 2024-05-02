# 문제: https://school.programmers.co.kr/learn/courses/30/lessons/42883

def solution(number, k):
    answer = []
    
    for num in number:
        while k > 0 and answer and answer[-1] < num:
            answer.pop()
            k -= 1
        answer.append(num)
        
    return ''.join(answer[:len(answer) - k])


'''
입력값 〉	"4177252841", 4
기댓값 〉	"775841"
4 []
1 ['4']
7 ['4', '1']
7 ['7']
2 ['7', '7']
5 ['7', '7', '2']
2 ['7', '7', '5']
8 ['7', '7', '5', '2']
4 ['7', '7', '5', '8']
1 ['7', '7', '5', '8', '4']
'''