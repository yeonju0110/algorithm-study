# 🔗 연결리스트

> 면접에서 연결리스트에 대해 이야기 할 때는 단방향 연결리스트에 대한 이야기인지 양방향 연결리스트에 대한 이야기인지 반드시 인지하고 있어야 함

</aside>

## 📍 정의

- 차례로 연결된 노드를 표현해주는 자료구조

## 📍 종류

- **단방향 연결리스트**
  - 각 노드는 다음 노드를 가리킴
- **양방향 연결리스트**
  - 각 노드는 다음 노드와 이전 노드를 함께 가리킴

## 📍 장점

- 리스트의 시작 지점에서 아이템을 추가하거나 삭제하는 연산을 상수 시간에 할 수 있다는 점

## 📍 단방향 연결리스트에서 노드 삭제

- 노드 n이 주어지면,
  - 그 이전 노드 prev를 찾아 prev.next === n.next와 같도록 설정함
  - 양방향 연결 리스트인 경우
    - n.next.prev === n.prev 와 같도록 설정해야 함
- 유의할 점
  1. 널 포인터 검사를 반드시 해야 함
  2. 필요하면 head와 tail 포인터도 갱신해야 함
  3. C나 C++처럼 메모리 관리가 필요한 언어를 사용해 구현하는 경우에는 삭제한 노드에 할당되었던 메모리가 제대로 반환되었는지 반드시 확인해야 함

## 📍 Runner 기법

- 연결리스트 문제에서 많이 활용되는 기법
- 연결리스트를 순회할 때 두 개의 포인터를 동시에 사용하는 것
- 한 포인터가 다른 포인터보다 앞서도록 함
- 앞선 포인터가 따라오는 포인터보다 항상 지정된 개수만큼을 앞서도록 할 수도 있고,
- 아니면 따라오는 포인터를 여러 노드를 한 번에 뛰어넘도록 설정할 수도 있음

## 📍 재귀 문제

- 연결리스트 관련 문제 가운데 상당수는 재귀 호출에 의존함
  - 연결리스트 문제를 푸는 데 어려움을 겪고 있다면, 재귀적 접근법은 통할지 확인해 봐야 함
- 재귀 호출 깊이가 n이 될 경우, 해당 재귀 알고리즘이 적어도 O(n) 만큼의 공간을 사용한다는 사실을 기억.