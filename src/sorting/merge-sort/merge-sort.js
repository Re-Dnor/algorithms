export const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
};

function merge(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) sorted.push(left.shift());
    if (left[0] >= right[0]) sorted.push(right.shift());
  }

  return [...sorted, ...left, ...right];
}
