# 📝 문제 풀이 보고서 
> [리트코드 - Remove duplicate letters](https://leetcode.com/problems/remove-duplicate-letters/description/)

## ⏱️ 문제 풀이 시간
- 총 소요 시간: **80분**

---

## 📊 문제 난이도
- [ ] 🟢 쉬움
- [x] 🟡 보통
- [ ] 🔴 어려움

---

## ⚙️ 사용한 알고리즘
- 스택, 그리디

---

## 💡 풀이 과정 (생각의 흐름)
### 1단계: 첫 번째 시도 - 단순 그리디 접근
- 제약조건 `1 <= s.length <= 10^4`를 보고 O(n) 시간복잡도로 한 번만 순회하면 될 것 같다고 생각했음.
- **아이디어**: 문자열을 순회하면서 중복 문자가 나오면 기존 위치와 새 위치 중 사전순으로 더 좋은 것을 선택
  - 예: `"abca"`에서 마지막 `a`가 나오면 `"abc"` vs `"bca"` 중 더 작은 것 선택
- **문제점 발견**: 단순 정방향만으로는 최적해를 찾을 수 없는 케이스가 존재..

### 2단계: 양방향 순회로 개선 시도
- 정방향과 역방향을 모두 시도해서 더 좋은 결과를 선택하는 방식으로 개선해 봄 (사실 다시 풀기 싫었던 것 같아요..)
- **예시**: `"bcabc"`
  - **정방향**: `b` → `bc` → `bca` → `bca` → `bac`
  - **역방향**: `c` → `bc` → `abc` ← **더 좋은 결과 선택**
- **결과**: 290개 테스트케이스 중 280개만 통과..^^

### 3단계: 실패 원인을 다시 분석해보자.
1. **근본적 한계**: **미래 정보를 고려하지 않음**
    - 현재 시점에서만 판단하므로 지역 최적화만 수행
    - 전역 최적해를 보장할 수 없음
    - **실패 예시**: `"bcabc"`
      - **내 방법의 처리 과정**
          - `b` 추가 → `"b"`
          - `c` 추가 → `"bc"`
          - `a` 추가 → `"bca"` (a가 가장 작으니 앞으로 보내고 싶지만, 뒤에 또 나올지 모름)
          - `b` 중복 발견 → 기존 `b` 제거 후 뒤에 추가 → `"cab"`
          - `c` 중복 발견 → 기존 `c` 제거 후 뒤에 추가 → `"abc"`
   - **문제점**: 3번째 단계에서 `a`를 만났을 때, 뒤에 `b`와 `c`가 다시 나온다는 것을 모르므로 기존 `bc`를 제거하지 못함

2. 사실 시간복잡도 문제도 있음
   - 애초에 `replace()` 연산이 O(n)이므로 전체 O(n²) 시간복잡도를 가지고 있었음. 내가 원하는 대로 풀이 방향이 흘러가지 않았음 => 이 때 스택이나 큐를 써야하나 싶었음 ㅠㅠ
   - `10^4` 크기에서는 비효율적
   
## 🔀 다른 풀이 방법
### 4단계: 올바른 접근법 찾기
- **핵심 아이디어**: "이 문자를 나중에 다시 만날 수 있나?"를 미리 알아야 함
  - **해결 전략**:
    1. **사전 준비**: 각 문자의 마지막 등장 위치를 미리 계산
       - "bcabc" → b는 4번째가 마지막, c는 5번째가 마지막, a는 3번째가 마지막
    2. **스택 활용**: 결과 문자열을 스택으로 관리하며 다음 규칙 적용
        - 새로운 문자가 스택 top보다 작고
        - 스택 top 문자가 나중에 다시 나온다면
        - → 스택 top을 제거 (더 좋은 위치에서 다시 만날 수 있으니까!)
  - **예시**: `"bcabc"`
    - `b` 처리: 스택 `[b]`
    - `c` 처리: 스택 `[b,c]`
    - `a` 처리:
        - `a < c`이고 `c`가 나중에 또 나옴 → `c` 제거
        - `a < b`이고 `b`가 나중에 또 나옴 → `b` 제거
        - 스택 `[a]`
    - `b` 처리: 스택 `[a,b]`
    - `c` 처리: 스택 `[a,b,c]` → 결과: `"abc"`

- **핵심 깨달음**: 현재 포기해도 나중에 더 좋은 자리에서 만날 수 있다"는 확신이 있어야 최적의 선택이 가능하다.

```java
class Solution {
    public String removeDuplicateLetters(String s) {
        // 1. 각 문자의 마지막 등장 위치 미리 계산
        int[] lastIndex = new int[26];
        for (int i = 0; i < s.length(); i++) {
            lastIndex[s.charAt(i) - 'a'] = i;
        }
        
        StringBuilder result = new StringBuilder();
        boolean[] used = new boolean[26]; // 사용된 문자 boolean 배열
        
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            int idx = c - 'a';
            
            // 이미 사용된 문자면 스킵
            if (used[idx]) continue;
            
            // 스택 top보다 작고, top의 마지막 등장이 현재보다 뒤라면 제거
            while (result.length() > 0) {
                char top = result.charAt(result.length() - 1);
                if (top <= c || lastIndex[top - 'a'] <= i) break;
                
                // top 문자 제거
                result.deleteCharAt(result.length() - 1);
                used[top - 'a'] = false; // 사용 해제
            }
            
            // 현재 문자 추가
            result.append(c);
            used[idx] = true; // 사용 표시
        }
        
        return result.toString();
    }
}
```

### 5단계: 성능 개선 - 비트 마스크
```java
// 기존 방식: boolean 배열
boolean[] visited = new boolean[26];  // 26바이트
visited[0] = true;   // a 사용
visited[1] = true;   // b 사용

// 비트마스크 방식
int used = 0;        // 4바이트
used |= (1 << 0);    // a 사용 (비트 0 설정)
used |= (1 << 1);    // b 사용 (비트 1 설정)
```

- 핵심 비트 연산들
    1. 비트 설정 (문자 사용 표시)
          ```
           used |= bit;  // OR 연산으로 해당 비트를 1로 설정
           // 예: used = 6, bit = 1인 경우
           //     110 | 001 = 111
           ```
    2. 비트 해제 (문자 사용 해제)
       ```
        used &= ~bit;  // AND + NOT 연산으로 해당 비트를 0으로 설정
        // 예: used = 7, bit = 4인 경우  
        //     111 & 011 = 011
       ```
    3. 비트 확인 (문자 사용 여부 체크)
       ```
       (used & bit) != 0  // AND 연산으로 해당 비트가 1인지 확인
          // 예: used = 6, bit = 4인 경우
          //     110 & 100 = 100 ≠ 0 → true (사용됨)
       ```


```java
class Solution {
    public String removeDuplicateLetters(String s) {
        // 1. 각 문자의 마지막 등장 위치 미리 계산
        int[] lastIndex = new int[26];
        for (int i = 0; i < s.length(); i++) {
            lastIndex[s.charAt(i) - 'a'] = i;
        }

        StringBuilder result = new StringBuilder();
        int used = 0; // 사용된 문자 비트마스크

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            int bit = 1 << (c - 'a');

            // 이미 사용된 문자면 스킵
            if ((used & bit) != 0) continue;

            // 스택 top보다 작고, top의 마지막 등장이 현재보다 뒤라면 제거
            while (result.length() > 0) {
                char top = result.charAt(result.length() - 1);
                if (top <= c || lastIndex[top - 'a'] <= i) break;

                // top 문자 제거
                result.deleteCharAt(result.length() - 1);
                used &= ~(1 << (top - 'a')); // 비트 해제
            }

            // 현재 문자 추가
            result.append(c);
            used |= bit; // 비트 설정
        }

        return result.toString();
    }
}
```

## 😢 회고
### 이런 문제 유형을 어떻게 알아볼까?
1. 핵심 키워드 패턴 
   - ✅ "중복 제거" + "사전순 최소" → 탐욕 + 스택
   - ✅ "각 문자 정확히 한 번" + "가장 작은" → 단조 스택
   - ✅ "subsequence" + "lexicographically smallest" → 그리디 스택
2. 문제 구조 분석
   - 제거할 수 있는 선택권이 있나? → 탐욕적 선택 가능성 
   - 순서를 유지해야 하나? → 스택/덱 고려 
   - 미래 정보가 현재 결정에 영향을 주나? → 전처리 필요

### 최적화 고려사항
- boolean[] vs 비트마스크: 알파벳이면 비트마스크 고려
- lastIndex vs count: 실시간 count가 보통 더 빠름
- StringBuilder vs Stack: StringBuilder가 더 효율적