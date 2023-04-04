// Необходимо операции отсортировать по дате и сгруппировать их по году, а в качестве
// значений представить массивы c датами в формате MM-DD.
// const operations = [
//   { date: "2017-05-31", amount: "5365" },
//   { date: "2017-08-31", amount: "5451" },
// ];
// Результат:
// {
//   "2017": [
//     "07-31",
//     "08-22"
//   ]
// }

export const sortOperations = (operations) => {
  return operations.reduce((acc, val) => {
    const date = val.date.split("-");
    const year = date.splice(0, 1)[0];
    const other = date.join("-");

    acc[year] = acc[year] ? [...acc[year], other] : [other];
    return acc;
  }, {});
};
