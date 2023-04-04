import { sortOperations } from "../sort-operations.js";
// import { sortOperations } from "../try-sort-operations.js";

describe("Сортировка операция", () => {
  test("Тест 1", () => {
    const operations = [
      { date: "2017-07-31", amount: "5422" },
      { date: "2017-06-30", amount: "5220" },
      { date: "2017-05-31", amount: "5365" },
      { date: "2017-08-31", amount: "5451" },
      { date: "2017-09-30", amount: "5303" },
      { date: "2018-03-31", amount: "5654" },
      { date: "2017-10-31", amount: "5509" },
      { date: "2017-12-31", amount: "5567" },
      { date: "2018-01-31", amount: "5597" },
      { date: "2017-11-30", amount: "5359" },
      { date: "2018-02-28", amount: "5082" },
      { date: "2018-04-14", amount: "2567" },
    ];
    const result = {
      2017: ["07-31", "06-30", "05-31", "08-31", "09-30", "10-31", "12-31", "11-30"],
      2018: ["03-31", "01-31", "02-28", "04-14"],
    };
    expect(sortOperations(operations)).toEqual(result);
  });
});
