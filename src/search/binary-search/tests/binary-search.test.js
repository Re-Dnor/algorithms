import { binarySearch } from "../binary-search.js";
// import { binarySearch } from "../try-binary-search.js";

describe("Бинарный поиск", () => {
  test("Отсортированный массив", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 10;
    expect(binarySearch(arr, target)).toEqual(9);
  });

  test("Отсортированный c 10к элементов", () => {
    const arr = new Array(10000).fill(0).map((_, i) => i + 1);
    console.log(arr);
    const target = 10000;
    expect(binarySearch(arr, target)).toEqual(9999);
  });

  test("Отсутсвует target", () => {
    const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
    const target = 4;
    expect(binarySearch(arr, target)).toEqual(3);
  });

  test("Один элемент", () => {
    const arr = [1];
    const target = 1;
    expect(binarySearch(arr, target)).toEqual(0);
  });

  test("Пустой массив", () => {
    const arr = [];
    const target = 77;
    expect(binarySearch(arr, target)).toEqual(0);
  });
});
