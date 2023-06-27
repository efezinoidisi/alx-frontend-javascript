export default function createIteratorObject(report) {
  const allDepartmentsEmployees = Object.values(report.allEmployees);
  return [].concat(...allDepartmentsEmployees);
}
