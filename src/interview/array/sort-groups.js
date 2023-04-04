// Нужно преобразовать массив: ["stop", "pots", "otsp", "appa", "mama", "amma"]
// с подгрупппами слов анаграмм: [ [ 'stop', 'pots', 'otsp' ], [ 'appa' ], [ 'mama', 'amma' ] ]

export const sortGroups = (arr) => {
  const pair = {};

  for (let word of arr) {
    const key = word.split("").sort().join("");
    pair[key] = pair[key] ? [...pair[key], word] : [word];
  }

  return Object.values(pair);
};
