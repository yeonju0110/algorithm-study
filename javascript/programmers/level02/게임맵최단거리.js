/**
 * 문제: https://school.programmers.co.kr/learn/courses/30/lessons/1844
 * 풀이 유형: bfs, 최단 거리
 */
function solution(maps) {
  const rows = maps.length;
  const columns = maps[0].length;

  const bfs = (x, y) => {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    let queue = [];
    queue.push([x, y]);

    while (queue.length) {
      const [x, y] = queue.shift();

      for (i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= rows || ny < 0 || ny >= columns) {
          continue;
        }

        if (maps[nx][ny] <= 0) {
          continue;
        }

        // 처음 방문한 길이라면
        if (maps[nx][ny] === 1) {
          maps[nx][ny] = maps[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
    return maps[rows - 1][columns - 1];
  };

  const result = bfs(0, 0);
  if (result === 1) {
    return -1;
  }
  return result;
}
