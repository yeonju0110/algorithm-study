def solution(babbling):
    answer = 0
    available_words = {'aya', 'ye', 'woo', 'ma'}

    for b in babbling:
        for word in available_words:
            if word in b:
                b = b.replace(word, ' ')

        if not b.strip():
            answer += 1

    return answer
