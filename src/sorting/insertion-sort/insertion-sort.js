export const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = null;
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
};
