def parse_date(date_str):
    yyyy, mm, dd = map(int, date_str.split('.'))
    return yyyy, mm, dd

def calculate_days(yyyy, mm, dd):
    return dd + (mm - 1) * 28 + (yyyy - 1) * 12 * 28

def solution(today, terms, privacies):
    answer = []
    terms_dict = {}

    yyyy, mm, dd = parse_date(today)
    today = calculate_days(yyyy, mm, dd)
    
    for term in terms:
        type_of_term, period = term.split()
        terms_dict[type_of_term] = int(period)
    
    for idx, privacy in enumerate(privacies, 1):
        created_at, type_of_term = privacy.split()
        yyyy, mm, dd = parse_date(created_at)
        
        mm += terms_dict[type_of_term]
        yyyy += mm // 12
        mm %= 12
        
        ended_at = calculate_days(yyyy, mm, dd)
        
        if today >= ended_at:
            answer.append(idx)
    
    return answer
