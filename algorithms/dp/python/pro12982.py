# 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12982

def solution(d, budget):
    answer = 0
    dp = [0 for _ in range(len(d))]
    
    d.sort()
    
    # dp[0] 구하기
    if d[0] <= budget:
        dp[0] = d[0]
        answer += 1
    else:
        dp[0] = 0
    
    # dp[1] 구하기
    if len(d) >= 2:
        n1 = dp[0] + d[1]
        n2 = dp[0]

        if n1 <= budget:
            dp[1] = n1
            answer += 1
        else:
            dp[1] = n2
    
    # dp[2]부터 구하기
    for i in range(2, len(d)):
        n1 = dp[i - 1] + d[i]
        n2 = dp[i - 1]
        n3 = dp[i - 2] + d[i]

        if n1 <= budget:
            answer += 1
            dp[i] = n1
        elif n3 <= budget:
            dp[i] = min(n2, n3)
        else:
            dp[i] = n2
    
    return answer
