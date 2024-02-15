/**
 * 노드 사이의 경로:
 * 방향 그래프가 주어졌을 때 두 노드 사이에 경로가 존재하는지 확인하는 알고리즘을 작성하라.
 *
 * 답안:
 * - BFS 사용
 */
function hasPath(graph, start, end) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift(); // 큐의 앞에서부터 노드를 꺼냄

    if (node === end) {
      return true; // 목표 노드에 도달했다면 경로가 존재함
    }

    if (!visited.has(node)) {
      visited.add(node); // 현재 노드를 방문한 것으로 표시

      const neighbors = graph[node]; // 인접 노드 가져오기
      if (neighbors) {
        for (const neighbor of neighbors) {
          queue.push(neighbor); // 인접 노드를 큐에 추가
        }
      }
    }
  }

  return false; // 모든 노드를 탐색했지만 목표 노드에 도달하지 못함
}

const graph = {
  A: ["B"],
  B: ["C"],
  C: ["D", "E"],
  D: ["C"],
  E: [],
  F: [],
};

{
  // EX1
  const result = hasPath(graph, "A", "D");
  console.log(result);
}

{
  // EX2
  const result2 = hasPath(graph, "A", "F");
  console.log(result2);
}
