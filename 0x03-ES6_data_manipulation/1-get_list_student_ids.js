export default function getListStudentIds(arr) {
  if (typeof arr !== 'object') return [];
  return arr.map((obj) => obj.id);
}
