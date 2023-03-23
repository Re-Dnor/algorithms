export const uniquePaths = (m, n, row = 1, col = 1, cache = {}) => {
  const pos = row + "/" + col;

  if (pos in cache) return cache[pos];
  if (row > m || col > n) return 0;
  if (row === m && col === n) return 1;
  const right = uniquePaths(m, n, row, col + 1, cache);
  const down = uniquePaths(m, n, row + 1, col, cache);

  cache[pos] = right + down;

  return cache[pos];
};
