export default function cleanSet(set, startString) {
  let str = '';
  if (startString.length === 0) return str;
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      str += `${str.length === 0 ? '' : '-'}${item.slice(startString.length)}`;
    }
  });

  return str;
}
