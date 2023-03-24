export const longestCommonPrefix = (array) => {
  if (array.length <= 0) return "";
  if (array.length === 1) return array[0];

  const word = array[0];
  let res = "";

  for (let i = 0; i <= word.length; i++) {
    const start = word.slice(0, i);

    if (array.every((item) => item.startsWith(start))) {
      res = start;
    } else {
      return res;
    }
  }

  return res;
};
