function getRandomPair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randomKey, value: obj[randomKey] };
}

const stringObj = { a: "Apple", b: "banana", c: "carrot" };
console.log(getRandomPair<string>(stringObj));

const numberObj = { one: 1, two: 2, three: 3 };
console.log(getRandomPair<number>(numberObj));
