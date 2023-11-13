function solution(sizes) {
  let maxs = [];
  let mins = [];

  sizes.forEach((size) => {
    [width, height] = size;

    maxs.push(Math.max(width, height));
    mins.push(Math.min(width, height));
  });

  return Math.max(...maxs) * Math.max(...mins);
}
