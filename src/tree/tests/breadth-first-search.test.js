import { BFS } from "../breadth-first-search.js";
import { tree } from "../utils/index.js";
// import { BFS } from "../try-breadth-first-search.js";

describe("Поиск в ширину", () => {
  test("Возврат всех значений value", () => {
    expect(BFS(tree)).toEqual([1, 2, 3, 4, 5, 10, 6, 7, 8, 9]);
  });
});
