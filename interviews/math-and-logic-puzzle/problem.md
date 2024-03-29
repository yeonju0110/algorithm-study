# 🧸 문제

### **1. 무거운 알약**

- **문제**
  약병 20개가 있다. 이 중 19개에는 1.0그램짜리 알약들이 들어 있고, 하나에는 1.1그램짜리 알약들이 들어 있다.
  정확한 저울 하나가 주어 졌을 때, 무거운 약병을 찾으려면 어떻게 해야 할까?
  (\*저울은 딱 한 번만 쓸 수 있다.)
- **풀이**
  - 약병이 두 개만 있다고 가정했을 때,
    1. `약병 1` (1.0 그램 알약들) + `약병 2` (1.1그램 알약들)
       - `약병1` _ 1개 + `약병2` _ 2개 = 1.0 + 2.2 = 3.2그램
    2. `약병 1` (1.1 그램 알약들) + `약병 2` (1.0그램 알약들)
       - `약병1` _ 1개 + `약병2` _ 2개 = 1.1 + 2.0 = 3.1그램
    - 즉, `약병 개수` _ 1.0 + `1.1그램 약병번호` _ 0.1 = 전체 무게
      - 1.1그램 약병 번호 = (전체 무게 - 약병 개수 \* 1.0)/0.1
      - 1.1그램 약병 번호 = (전체 무개 - 210그램)/0.1그램

### 2. 농구

- **문제**
  - 농구 골대가 하나 있는데 다음 두 게임 중 하나를 해볼 수 있다.
    게임 1: 슛을 한 번 쏴서 골대에 넣어야 한다.
    게임 2: 슛을 세 번 쏴서 두 번 골대에 넣어야 한다.
    슛을 넣을 확률이 p라고 했을 때 p가 어떤 값일 때 첫 번째 게임을, 혹은 두번째 게임을 선택하겠는가?
- **풀이**
  - 게임 1에서 이길 확률 = p
  - 게임 2에서 이길 확률 = 3p^2 - 2p^3
    - P(승리) = s(2, 3) + s(3, 3)
      1. s(3, 3) = p^3
      2. s(2, 3) = P(1, 2 성공, 3 실패) + P(1, 3 성공, 2 실패) + P(2, 3 성공, 1실패)
         - = p*p* (1 - p) + p* (1 - p)* p + (1 - p)_ p_ p
         - = 3 (1-p) p^2
           즉, s(2, 3) + s(3, 3) = p^3 + 3 (1-p) p^2
      - = p^3 + 3p^2 - 3p^3
      - = 3p^2 - 2p^3
  - **게임 1을 선택해야 하는 경우 = P(게임1) > P(게임2) 여야 함**
    $$
    p > 3p^2 - 2p^3 \\ 1 > 3p - 2p^2 \\ 2p^2 - 3p + 1 > 0 \\ (2p - 1)(p - 1) > 0
    $$
    - p<1이므로 p-1<0이어야 함 → 따라서 두 항이 모두 음수임
      $$
      2p - 1 < 0 \\ 2p < 1 \\ p < 0.5
      $$
    - 즉, 0<p<0.5라면 게임 1, 0.5<p<1이라면 게임2선택해야함
      - 만약 p = 0, 0.5, 1이라면 아무거나 선택해도 됨

### 3. 도미노

- **문제**
  - 8x8 크기의 체스판이 있는데, 대각선 반대 방향 끝에 있는 셀(cell) 두 개가 떨어져 나갔다. 하나의 도미노로 정확히 두 개의 정사각형을 덮을 수있을 때, 31개의 도미노로 보드 전체를 덮을 수 있겠는가? 여러분의답이 옳다는 것을 증명하라. 예를 들거나, 왜 가능 혹은 불가능한지를 보이면 된다.
- **풀이**
  ![](https://github.com/yeonju0110/algorithm-study/assets/97719273/a739b634-8ffa-436a-b164-741d5409b3b7)
  1. 도미노를 1번 행에 놓으려고 하면 정사각형이 7개밖에 없으므로 그 중 하나는 2번 행에 걸쳐 두어야 함
     - 2번 행도 마찬가지
     - 즉, 각 행에 도미노를 놓을 때마다, 하나의 도미노는 항상 다음 행에 걸쳐 놓아야만 함
     - 따라서 모든 도미노를 올바르게 배치할 수 없음
  2. 32개의 검은 색 사각형 + 32개 흰색 사각형이 있음
     - 마주보는 대각선 자리의 사각형 하나씩을 제거하면
     - 30개의 검은색 + 32개 흰색 or 32개 검은색 30개 흰색 사각형이 남음
     - 도미노를 놓을때마다 = 하나의 흰색 사각형 + 검정 사각형이 사용
     - 즉, 31개의 도미노를 넣으려면 31개 검은색 + 31개 흰색 사각형이 필요

### 4. 삼각형 위의 개미

- **문제**
  - 개미 세 마리가 삼각형의 각 꼭짓점에 있다. 개미 세 마리가 삼각형 모서리를 따라 걷기 시작했을 때, 두 마리 혹은 세 마리 전부가 충돌할 확률은 얼마인가? 각 개미는 자신이 움직일 방향을 임의로 선택할 수 있는데, 같은 확률로 두 방향 중 하나를 선택한다. 또한 그들은 같은 속도로 걷는다. 이 문제를 확장해서 n개의 개미가 n각형 위에 있을 때 그들이 충돌할 확률도 구하라.
- **풀이**
  - 개미가 충돌하지 않으려면 모두가 같은 방향으로 움직여야 함!
    $$
    P(시계방향) = (1 / 2)^3 \\ P(반시계방향) = (1 / 2)^3 \\ P(같은 방향) = (1 / 2)^3 + (1 / 2)^3 = 1 / 4 \\ P(충돌) = 1 - P(같은 방향) = 1 - 1 / 4 = 3/4
    $$
  - n각형일 때 ?
