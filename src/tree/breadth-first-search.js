// Вернуть массив всех value
export const BFS = (tree) => {
  const res = [];
  const queue = [];

  queue.push(tree);

  while (queue.length) {
    const node = queue.shift();

    if (node?.value) res.push(node.value);
    if (node?.children) {
      node.children.forEach((chl) => {
        queue.push(chl);
      });
    }
  }

  return res;
};
