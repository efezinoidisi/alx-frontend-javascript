// return sum of all students Ids

export default function getListIdsSum(studentsList) {
  return studentsList.reduce((sum, { id }) => sum + id, 0);
}
