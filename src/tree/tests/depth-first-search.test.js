import { DFS } from "../depth-first-search";
import { tree } from "../utils/index.js";
// import { DFS } from "../try-depth-first-search";

describe("Поиск в глубину", () => {
  test("Возврат всех значений value", () => {
    expect(DFS(tree)).toEqual([1, 2, 5, 6, 7, 8, 9, 3, 10, 4]);
  });
});
