export const isValid = (str) => {
  const pair = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const res = [];

  for (const i of str) {
    if (!pair[i]) {
      res.push(i);
    } else if (res.pop() !== pair[i]) {
      return false;
    }
  }

  return res.length === 0;
};
