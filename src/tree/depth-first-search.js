// Вернуть массив всех value
export const DFS = (tree) => {
  const res = [];

  const recursive = (node) => {
    if (node?.value) res.push(node.value);
    if (node?.children) {
      node.children.forEach((chl) => {
        recursive(chl);
      });
    }
  };

  recursive(tree);
  return res;
};
