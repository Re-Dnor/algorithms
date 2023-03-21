export const bubbleSort = (array) => {
  if (array.length <= 1) return array;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      // Проверка текущего элемента массива и следующего
      if (array[j] > array[j + 1]) {
        // Замена если текущее больше следующего
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  // Меняется исходный массив
  return array;
};
