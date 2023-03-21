export const quickSort = (array) => {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const start = [];
  const end = [];

  for (let i = 1; i < array.length; i++) {
    if (pivot > array[i]) {
      start.push(array[i]);
    } else {
      end.push(array[i]);
    }
  }

  return [...quickSort(start), pivot, ...quickSort(end)];
};
