/**
 * 순서 정하기:
 * 프로젝트의 리스트와 프로젝트들 간의 종속 관계(즉， 프로젝트 쌍이 리스트로 주어지면 각 프로젝트 쌍에서
 * 두 번째 프로젝트가 첫 번째 프로젝트에 종속되어 있다는 뜻)가 주어졌을 때，
 * 프로젝트를 수행해 나가는 순서를 찾으라. 유효한 순서가 존재하지 않으면 에러를 반환한다.
 *
 * 입력:
 * 프로젝트: a,b,c,d,e,f
 * 종속 관계 (a, d), (f, b), (b, d), (f, a), (d, c) 출력: f,e,a,b,d,c
 *
 * 풀이방법:
 * 위상 정렬
 * - 방향 그래프의 모든 노드를 "방향성을 거스르지 않도록" 순서대로 나열하는 알고리즘
 * - 어떤 그래프의 간선 (a, b)가 a 전에 b가 나타나야 하는 조건을 나타낼 때， 노드를 선형 순서대로 나열하는 방법
 */
function findOrder(projects, dependencies) {
  const graph = new Map(); // 프로젝트 간의 종속성을 저장하는 그래프
  const inDegree = new Map(); // 각 프로젝트의 진입 차수
  const order = []; // 수행해야 할 프로젝트의 순서
  const queue = []; // 진입 차수가 0인 프로젝트를 저장하는 큐

  // 그래프 초기화
  projects.forEach((project) => {
    graph.set(project, []);
    inDegree.set(project, 0);
  });

  // 그래프와 진입 차수 업데이트
  dependencies.forEach(([u, v]) => {
    graph.get(u).push(v);
    inDegree.set(v, inDegree.get(v) + 1);
  });

  // 진입 차수가 0인 프로젝트를 큐에 추가
  for (let [project, degree] of inDegree) {
    if (degree === 0) {
      queue.push(project);
    }
  }

  while (queue.length) {
    const current = queue.shift();
    order.push(current);

    graph.get(current).forEach((neighbor) => {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    });
  }

  // 모든 프로젝트가 순서에 포함되었는지 확인
  if (order.length !== projects.length) {
    if (hasCycle(inDegree)) {
      throw new Error(
        "그래프에 사이클이 존재합니다. 유효한 순서를 정할 수 없습니다."
      );
    } else {
      throw new Error("유효한 순서가 존재하지 않습니다.");
    }
  }

  return order;
}

function hasCycle(inDegree) {
  for (let [_, degree] of inDegree) {
    if (degree > 0) {
      // 진입 차수가 0보다 큰 노드가 남아 있다면, 그래프에 사이클이 존재할 가능성이 있음.
      return true;
    }
  }
  return false;
}

// 예제1: 유효한 순서가 존재하는 경우
try {
  const projects = ["a", "b", "c", "d", "e", "f"];
  const dependencies = [
    ["a", "d"],
    ["f", "b"],
    ["b", "d"],
    ["f", "a"],
    ["d", "c"],
  ];
  const projectOrder = findOrder(projects, dependencies);
  console.log(projectOrder); // 예: ['e', 'f', 'a', 'b', 'd', 'c']
} catch (error) {
  console.error(error.message);
}

// 예제2: 사이클이 존재하여 유효한 순서를 정할 수 없는 경우
try {
  const projects = ["a", "b", "c"];
  const dependencies = [
    ["a", "b"],
    ["b", "c"],
    ["c", "a"],
  ]; // 사이클이 존재: a -> b -> c -> a
  const projectOrder = findOrder(projects, dependencies);
  console.log(projectOrder);
} catch (error) {
  console.error(error.message); // "그래프에 사이클이 존재합니다. 유효한 순서를 정할 수 없습니다."
}
