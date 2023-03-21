export const selectionSort = (array) => {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      // Находим индекс минимального
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // Если минимальное не равно текущему то меняем
    if (min !== i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  // Изменяем исходный массив
  return array;
};
