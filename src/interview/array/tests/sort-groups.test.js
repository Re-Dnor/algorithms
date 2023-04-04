import { sortGroups } from "../sort-groups.js";
// import { sortGroups } from "../try-sort-groups.js";

describe("Сортировка групп анаграмм", () => {
  test("Тест 1", () => {
    const arr = ["stop", "pots", "otsp", "appa", "mama", "amma"];
    expect(sortGroups(arr)).toEqual([["stop", "pots", "otsp"], ["appa"], ["mama", "amma"]]);
  });
});
