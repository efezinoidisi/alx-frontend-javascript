export default function hasValuesFromArray(set, arr) {
  const convertedSet = Array.from(set);
  return arr.every((item) => convertedSet.includes(item));
}
